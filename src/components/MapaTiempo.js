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
        startDate: '2020-01-01',
        endDate: '2020-07-25',
        date: '2020-06-25',
        tempDate: '2020-06-25',
        plotDates: [ '2020-01-24', '2020-06-25' ],
        fechaLista: [],
        ultimoCaso: '',
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

    obtenerCasos = () => {
        let proxyUrl = ''
        if (typeof this.props.proxy_url != 'undefined') {
          proxyUrl = this.props.proy_url;
        }
        console.log('proxyUrl=', proxyUrl)
        let casosUrl = 'https://base.nocheyniebla.org/casos/cuenta';
        if (typeof this.props.casos_url != 'undefined') {
          casosUrl = this.props.casos_url
        }
        console.log('casosUrl:', casosUrl)

        fetch(proxyUrl + casosUrl).then((res) => res.json()).then((res) => {
            console.log("casos: ", res)
            this.cambiarDatos(res["casos"])
        })
        .catch(err => console.log("Casos Error: ", err))
    }


    cambiarDatos = (casosApi) => {

        console.log("Data Obj: ")
        const pais = "哥伦比亚";
        allJson[pais].confirmedCount = {};
        var cuentaTotal = {}
        var cuentaPais = 0

        //Limpieza del Json para que queden vacios todas las fechas
        Object.entries(allJson[pais]).map ( (item) =>{
            if(typeof item[1] == "object" && item[1].ENGLISH){
                var departamento = item[0];
                allJson[pais][departamento].confirmedCount = {};
                allJson[pais][departamento].curedCount = {};
                allJson[pais][departamento].deadCount = {};
                cuentaTotal[departamento] = 0
            }
        });

        var listaFechas = [];
        var fechaUltimoCaso = 0;

        casosApi.map((casos) => {

            cuentaPais += casos.cuenta
            allJson[pais].confirmedCount[casos.fecha] = cuentaPais;

            if(casos.nombre){

                if(casos.fecha){
                    const fecha = new Date(casos.fecha);
                    const year = fecha.getFullYear();
                    if(listaFechas.indexOf(year) == -1){
                        listaFechas.push(year)
                    }
                    const tiempo = new Date(fechaUltimoCaso)
                    if(fecha.getTime() > tiempo.getTime()){
                        fechaUltimoCaso = casos.fecha;
                    }
                } 

                Object.entries(allJson[pais]).map ( (item) =>{
                    if(typeof item[1] == "object" && item[1].ENGLISH){
                        var departamento = item[0];
                        var nombres = casos.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                        if(item[1].ENGLISH.toUpperCase() == nombres.toUpperCase()){
                            //console.log("If if: ", cuentaTotal.departamento)
                            cuentaTotal[departamento] +=  casos.cuenta
                        }
                        allJson[pais][departamento].confirmedCount[casos.fecha] = cuentaTotal[departamento];

                    }
                });
            }
        });

        const fecha = listaFechas[listaFechas.length-2];
        this.setState({
            data: allJson,
            fechaLista: listaFechas,
            startDate: fecha+'-01-01',
            endDate: fecha+'-12-31',
            ultimoCaso: fechaUltimoCaso
        })
	const fechaact = this.state.date
	var mesini = '07';
	var mesfin = '12';
        var mess = parseInt(fechaact.split("-")[1])
	if( mess < 7){
	 mesini = '01';
	 mesfin = '06';
	}
        this.setState({
            plotDates: [ fecha+'-'+mesini+'-01', fecha+'-'+mesfin+'-31' ]
        })
        console.log("Fechas: ", fechaUltimoCaso)
        console.log("Data allJson refact: ", allJson)
    }

    cambiarFecha = (year) =>{
        var fechaFin = year+'-12-31'; 
        const { ultimoCaso } = this.state
        var fecha = new Date(ultimoCaso);
        if (fecha.getFullYear() == year) {
            /* var mes = fecha.getMonth() + 1
            if (mes < 10) mes = `0${mes}`;
            fechaFin = fecha.getFullYear()+'-'+mes+'-'+fecha.getDate(); */
            fechaFin = ultimoCaso;
        }
	const fechaact = this.state.date
	var mesini = '07';
	var mesfin = '12';
        var mess = parseInt(fechaact.split("-")[1])
	if( mess < 7){
	 mesini = '01';
	 mesfin = '06';
	}
        this.setState({
            startDate: year+'-01-01',
            plotDates: [ year+'-'+mesini+'-01', year+'-'+mesfin+'-31' ],
            endDate: fechaFin
        })
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

    handleDateChange = (newDate) =>{ 
	const fechaact = newDate
	var mesini = '07';
	var mesfin = '12';
        var fecha = parseInt(fechaact.split("-")[0])
        var mess = parseInt(fechaact.split("-")[1])
	if( mess < 7){
	 mesini = '01';
	 mesfin = '06';
	}
	this.setState({
          date: newDate, 
          plotDates: [ fecha+'-'+mesini+'-01', fecha+'-'+mesfin+'-31' ],
	  tempDate: newDate 
	})
    }
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
                    <Container className={`themed-container ${fullScreenMode}`} fluid={true}>
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
                                    cambiarFecha={this.cambiarFecha}
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
                                    <ReactTooltip className="plot-tooltip" type={darkMode ? 'dark' : 'light'} html={true} />
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
        </div>
    )
  }
}

export default MapaTiempo
