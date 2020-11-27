import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactTooltip from 'react-tooltip'
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai'
import Helmet from 'react-helmet'
import Measure from 'react-measure'
import './MapaTiempo.css'
import Map from './Map'
import MapNavBar from './MapNavBar'
import DateSlider from './DateSlider'
import AnimationController from './AnimationController'
import MainCounts from './MainCounts'
import Plot from './Plot'
import Tree from './Tree'
import NavBar from './NavBar'
import Loading from './Loading'
import Footer from './Footer'
import Region from './Region'
import i18n from 'js-yaml-loader!../../assets/data/i18n.yml';
import * as str from '../utils/strings'
import { updateDarkMode, isoDate } from '../utils/utils'
import { mapText } from '../utils/map_text'
import allJson from '../../assets/maps/all.json'

const defaultState = {
    currentMap: 'COL',
    metric: 'confirmedCount',
    currentRegion: [ str.COLOMBIA_ZH ],
    playing: false,
    scale: 'linear',
    mapZoom: 1,
    fullMap: false,
    fullPlot: false,
    fullTree: false
}

class MapaTiempo extends Component {
    state = {
        startDate: '2020-01-24',
        endDate: '2020-06-25',
        date: '2020-06-25',
        tempDate: '2020-06-25',
        plotDates: [ '2020-01-24', '2020-06-25' ],
        data: null,
        dataLoaded: false,
        lang: 'es',
        darkMode: true,
        mapDimensions: {
            width: -1,
            height: -1
        },
        fullDimensions: {
            width: -1,
            height: -1
        },
        plotType: 'plot_basic',
        ...defaultState
    }
    
    fetchData = () => {
        //fetch('/sivel2/casos/infomapa/datoscovid').then((res) => res.json()).then((res) => {
        const latest = Object.keys(allJson[str.COLOMBIA_ZH].confirmedCount).pop()
        this.setState({
            data: allJson,
            dataLoaded: true,
            date: latest,
            tempDate: latest,
            endDate: latest,
            plotDates: [ this.state.plotDates[0], latest ]
        })

        const { data } = this.state
        this.obtenerCasos()
        this.tooltipRebuild()
    }

    obtenerCasos = (datos) => {
        const casosUrl = this.props.casos_url
        /* const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        fetch(proxyUrl + casosUrl).then((res) => res.json()).then((res) => { */
        fetch(casosUrl).then((res) => res.json()).then((res) => {
            console.log("casos: ", res)
            //this.cambiarDatos(datos, res["casos"])
        })
        .catch(err => console.log("Casos Error: ", err))   
    }


    cambiarDatos= (obj, cas) => {
    	
        var casesRefact = cas;
	    console.log("Data Obj: ", obj)
	    Object.entries(obj).map( (data) => {
	        var country = data[0];
            if(country == "哥伦比亚" ){
                var countryObj = data[1];
                var cuentatotal = 0
                Object.entries(countryObj).map ( (item) =>{
                    if(typeof item[1] == "object"){
                        if(item[1].ENGLISH){
                            var depart = item[0];
                            var dateszeros = {}
                            obj[country][depart].confirmedCount = dateszeros;
                            obj[country][depart].curedCount = dateszeros;
                            obj[country][depart].deadCount = dateszeros;
                            var cuenta = 0;
                            casesRefact.map((casos) => {
                                if(item[1].ENGLISH.toUpperCase() == casos.nombre){
                                    let dateCase = casos.fecha;
                                    cuenta += casos.count;
                                    cuentatotal += casos.count
                                    if(obj[country][depart].confirmedCount[dateCase]){
                                        let total = obj[country][depart].confirmedCount[dateCase] + 1;
                                        obj[country][depart].confirmedCount[dateCase] = total;
                                    }else{
                                        obj[country][depart].confirmedCount[dateCase] = 1;
                                    }
                                    obj[country][depart].confirmedCount["2020-07-01"] = cuenta;
                                } 
                            });
                        }
                        obj[country].confirmedCount["2020-07-01"] = cuentatotal;
                    }

                })
            }
        })
    
        this.setState({
            data: obj
        })
	    console.log("Data Obj refact: ", obj)
    }

    componentDidMount() {
        updateDarkMode(this.state.darkMode)
        this.fetchData()
        this.updateFullDimensions()
        window.addEventListener('resize', this.updateFullDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateFullDimensions)
    }

    updateFullDimensions = () => {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        if (height < 750 || width < 992) {
            if (this.state.fullMap) this.setState({ fullMap: false })
            if (this.state.fullPlot) this.setState({ fullPlot: false })
        }

        this.setState({
            fullDimensions: {
                height: Math.min(height - 250, (width - 200) * 3 / 4),
                width: Math.min((height - 250) * 4 / 3, width - 200)
            }
        })
    }

    reset = () =>
        this.setState({
            ...defaultState,
            date: this.state.endDate,
            tempDate: this.state.endDate,
            plotDates: [ this.state.startDate, this.state.endDate ]
        })

    mapToggle = (newMap) =>
        this.setState({
            currentMap: newMap,
            // do not reset map zoom when switching between two China maps
            mapZoom: newMap === str.WORLD_MAP || this.state.currentMap === str.WORLD_MAP ? 1 : this.state.mapZoom
        })
    
    metricToggle = (newMetric) => this.setState({ metric: newMetric })

    regionToggle = (newRegion, mapChange = true) => {
        const { currentMap } = this.state
        this.setState({ currentRegion: newRegion })
        if (!mapChange) return
            let map = Object.keys(mapText).find((x) => mapText[x].regionName === newRegion[0])
            map = map != null ? map : str.WORLD_MAP
            this.mapToggle(map)
    }
    
    playingToggle = () => this.setState({ playing: !this.state.playing })

    scaleToggle = (newScale) => this.setState({ scale: newScale })

    languageToggle = (lang) => this.setState({ lang })

    fullMapToggle = () => {
        this.setState({ fullMap: !this.state.fullMap })
    }

    fullPlotToggle = () => {
        ReactTooltip.hide()
        this.setState({ fullPlot: !this.state.fullPlot })
    }

    fullTreeToggle = () => {
        this.setState({ fullTree: !this.state.fullTree })
    }

    darkModeToggle = () => {
        updateDarkMode(!this.state.darkMode)
        this.setState({ darkMode: !this.state.darkMode })
    }
    
    handleMapZoomChange = (newZoom) => this.setState({ mapZoom: newZoom })

    handleDateChange = (newDate) => this.setState({ date: newDate, tempDate: newDate })

    handleTempDateChange = (newDates) => {
        const newDateStrings = newDates.map((x) => isoDate(x, this.state.endDate).slice(0, 10))
        if (!this.state.fullPlot) {
            this.setState({ tempDate: newDateStrings[0] })
        } else {
            this.setState({ plotDates: newDateStrings })
        }
    }

    handlePlotTypeChange = (newType) => this.setState({ plotType: newType })
    tooltipRebuild = () => ReactTooltip.rebuild()
    changeDataJSON = (data) => {
    
    }
  
  render(){
        const { data, lang, dataLoaded, currentMap, fullMap, fullPlot, fullTree, darkMode } = this.state
        const fullScreenMode = fullMap ? 'map-full' : fullPlot ? 'plot-full' : fullTree ? 'tree-full' : ''
        const FullScreenIcon = fullMap ? AiOutlineFullscreenExit : AiOutlineFullscreen  
        this.changeDataJSON(data)
	  return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            {!dataLoaded ? (
                <Loading />
            ) : (
                <Fragment>
                    <Container className={`app-container ${fullScreenMode}`}>
                        <Row>
                            <Col lg={!fullMap ? 7 : 12}>
                                <div className="header">
                                    <span
                                        className="header-title"
                                        style={{ letterSpacing: lang === 'es' ? '1px' : 'normal' }}
                                    >
                                        {i18n.COVID19[lang]}
                                    </span>
                                </div>
                                <NavBar
                                    {...this.state}
                                    scaleToggle={this.scaleToggle}
                                    languageToggle={this.languageToggle}
                                    darkModeToggle={this.darkModeToggle}
                                    reset={this.reset}
                                />
                                {!fullPlot &&
                                !fullTree && (
                                    <Measure
                                        bounds
                                        onResize={(contentRect) => {
                                            this.setState({ mapDimensions: contentRect.bounds })
                                        }}
                                    >
                                        {({ measureRef }) => (
                                            <div
                                                ref={measureRef}
                                                className="map"
                                                style={{
                                                    height: !fullMap
                                                        ? this.state.mapDimensions.width * 3 / 4
                                                        : this.state.fullDimensions.height,
                                                    width: !fullMap ? '100%' : this.state.fullDimensions.width
                                                }}
                                            >
                                                {currentMap !== str.TRANSMISSION && (
                                                    <Map
                                                        {...this.state}
                                                        handleMapZoomChange={this.handleMapZoomChange}
                                                        mapToggle={this.mapToggle}
                                                        regionToggle={this.regionToggle}
                                                        tooltipRebuild={this.tooltipRebuild}
                                                    />
                                                )}
                                                <div className="map-full-button">
                                                    <FullScreenIcon
                                                        size={fullMap ? 30 : 20}
                                                        onClick={this.fullMapToggle}
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </Measure>
                                )}
                                <MapNavBar
                                    {...this.state}
                                    mapToggle={this.mapToggle}
                                    metricToggle={this.metricToggle}
                                    regionToggle={this.regionToggle}
                                />
                                <DateSlider
                                    {...this.state}
                                    handleDateChange={this.handleDateChange}
                                    handleTempDateChange={this.handleTempDateChange}
                                />
                                <AnimationController
                                    {...this.state}
                                    handleDateChange={this.handleDateChange}
                                    playingToggle={this.playingToggle}
                                />
                                <div className="footer-white" />
                            </Col>
                            {!fullMap && (
                                <Col lg={!fullPlot && !fullTree ? 5 : 12} className="col-right">
                                    <Row style={{ display: 'flex', flexDirection: 'column', padding: 10 }}>
                                        <Region
                                            {...this.state}
                                            regionToggle={this.regionToggle}
                                            ReactTooltip={ReactTooltip}
                                        />
                                        <MainCounts {...this.state} />
                                        <Plot
                                            {...this.state}
                                            regionToggle={this.regionToggle}
                                            fullPlotToggle={this.fullPlotToggle}
                                            scaleToggle={this.scaleToggle}
                                            handlePlotTypeChange={this.handlePlotTypeChange}
                                        />
                                        <Tree
                                            {...this.state}
                                            regionToggle={this.regionToggle}
                                            fullTreeToggle={this.fullTreeToggle}
                                        />
                                        <div className="footer-placeholder" />
                                    </Row>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </Fragment>
            )}
            <ReactTooltip className="plot-tooltip" type={darkMode ? 'dark' : 'light'} html={true} />
        </div>
    )
  }
}

export default MapaTiempo
