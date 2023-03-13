import GuiZhou from '../../../style/map/GuiZhou.json'
import ChongQing from '../../../style/map/ChongQing.json'
import HuNan from '../../../style/map/HuNan.json'
import GuangXi from '../../../style/map/GuangXi.json'
import YunNan from '../../../style/map/YunNan.json'

export default function (map) {
    
    let geojsonGuiZhou = new AMap.GeoJSON({
        geoJSON: GuiZhou,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            // 计算面积
            let area = AMap.GeometryUtil.ringArea(lnglats[0])

            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.3,// 面积越大透明度越高
                fillColor: '#6bbfe1',
                strokeWeight:0.8
            });
        }
    });
    let geojsonChongQing = new AMap.GeoJSON({
        geoJSON: ChongQing,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            // 计算面积
            let area = AMap.GeometryUtil.ringArea(lnglats[0])

            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.3,// 面积越大透明度越高
                fillColor: '#6bbfe1',
                strokeWeight:0.8
            });
        }
    });
    let geojsonGuangXi = new AMap.GeoJSON({
        geoJSON: GuangXi,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            // 计算面积
            let area = AMap.GeometryUtil.ringArea(lnglats[0])

            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.3,// 面积越大透明度越高
                fillColor: '#6bbfe1',
                strokeWeight:0.8
            });
        }
    });
    let geojsonYunNan = new AMap.GeoJSON({
        geoJSON: YunNan,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            // 计算面积
            let area = AMap.GeometryUtil.ringArea(lnglats[0])

            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.3,// 面积越大透明度越高
                fillColor: '#6bbfe1',
                strokeWeight:0.8
            });
        }
    });
    let geojsonHuNan = new AMap.GeoJSON({
        geoJSON: HuNan,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            // 计算面积
            let area = AMap.GeometryUtil.ringArea(lnglats[0])

            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.3,// 面积越大透明度越高
                fillColor: '#6bbfe1',
                strokeWeight:0.8
            });
        }
    });
    map.add(geojsonGuiZhou)
    map.add(geojsonHuNan)
    map.add(geojsonChongQing)
    map.add(geojsonGuangXi)
    map.add(geojsonYunNan)
}