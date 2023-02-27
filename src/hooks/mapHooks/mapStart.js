import AMapLoader from "@amap/amap-jsapi-loader";
import {reactive, ref} from "vue";
import milkIcon from "./components/milkIcon.js";
import provinceIcon from "./components/provinceIcon.js";
import provinceLine from "./components/provinceLine.js";
import headquarters from "./components/headquarters.js";
import milkPath from "./components/milkPath.js";
import carIcon from "./components/carIcon.js";
import mapCover from "./components/mapCover.js";
//------------------Event-------------------------
import mapScale from "../mapEvents/mapScale.js";

export default function () {

    AMapLoader.load({
        "key": "55b4970fae20d60951cc56a77e77fbd3",              // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": ['AMap.LabelsLayer','AMap.Driving','AMap.Polyline',
            'AMap.LngLat','AMap.InfoWindow','AMap.Marker','AMap.Icon',
            'AMap.GeoJSON'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap)=>{

        let map = new AMap.Map('midMap',{
            center:[105.381839,37.996769],
            zoom:4,
            mapStyle: 'amap://styles/blue',
        });
        // 106.623487,26.634874
        // 106.647156,26.635188
        milkIcon(map)
        // milkPath(map)
        provinceIcon(map)
        provinceLine(map)
        headquarters(map)
        // carIcon(map)
        mapCover(map)
        // mapScale(map)
        /*
        * 3级图层显示国家
        * 5级图层省级
        * */
        // console.log(map)
        return map

    }).catch(e => {
        console.log(e);
    })

}
