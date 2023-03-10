import AMapLoader from "@amap/amap-jsapi-loader";
import {reactive, ref} from "vue";
import milkIcon from "./components/milkIcon.js";
import provinceIcon from "./components/provinceIcon.js";
import provinceLine from "./components/provinceLine.js";
import headquarters from "./components/headquarters.js";
import milkPath from "./components/milkPath.js";
import mapCover from "./components/mapCover.js";
import milkCar from "./components/milkCar.js";
//------------------Event-------------------------
import mapScale from "../mapEvents/mapScale.js";
//------------------Store-------------------------
import useControlStore from "../../storage/saleBigData/useControlStore.js";
import provinceArea from "./components/provinceArea.js";


export default function () {
    let control = useControlStore()

    AMapLoader.load({
        "key": "55b4970fae20d60951cc56a77e77fbd3",              // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": ['AMap.LabelsLayer','AMap.Driving','AMap.Polyline',
            'AMap.LngLat','AMap.InfoWindow','AMap.Marker','AMap.Icon',
            'AMap.GeoJSON','AMap.LabelMarker','AMap.Size','AMap.InfoWindow'],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap)=>{

        let map = new AMap.Map('midMap',{
            center:[105.381839,37.996769],
            zoom:4,
            mapStyle: 'amap://styles/blue',
        });

        map.setZoom(control.controlZoom,true)
        map.setCenter(control.controlCenter,true)

        // 106.623487,26.634874
        // 106.647156,26.635188
        if (control.controlMilk){
            milkIcon(map)
        }
        // milkPath(map)
        console.log("in mapState",control.controlData)
        if (control.controlData){
            provinceIcon(map)
            provinceArea(map)
        }
        // provinceLine(map)
        headquarters(map)
        if (control.controlCars){
            milkCar(map)
        }
        mapCover(map)
        // mapScale(map)
        /*
        * 3级图层显示国家
        * 5级图层省级
        * */
        // console.log(map)

        setInterval(()=>{
            console.log("map.getZoom()",typeof map.getZoom(),map.getZoom())
            console.log("map.getCenter()",typeof map.getCenter(),map.getCenter())
            control.setZoomAndCenter(map.getZoom(),map.getCenter())
            console.log("control.controlZoom",control.controlZoom)
            console.log("control.controlCenter",control.controlCenter)
        },1000)

        return map

    }).catch(e => {
        console.log(e);
    })

}
