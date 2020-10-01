import i18n from 'js-yaml-loader!../../assets/data/i18n.yml';
import * as str from '../utils/strings'

export const mapText = {
    WORLD: {
        title: i18n.WORLD_MAP,
        regionName: str.GLOBAL_ZH,
        flagCode: 'un',
        continent: i18n.WORLD_MAP
    },
    COL: {
        title: i18n.COLOMBIA_MAP,
        regionName: str.COLOMBIA_ZH,
        flagCode: 'co',
        continent: i18n.SOUTH_AMERICA
    }
}

