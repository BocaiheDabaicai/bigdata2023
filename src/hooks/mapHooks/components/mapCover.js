import China from '../../../style/map/China.json'

export default function (map) {
    let geojson = new AMap.GeoJSON({
        geoJSON: China,
        // 还可以自定义getMarker和getPolyline
        getPolygon: function(geojson, lnglats) {
            // 计算面积
            let area = AMap.GeometryUtil.ringArea(lnglats[0])

            return new AMap.Polygon({
                path: lnglats,
                fillOpacity: 0.1,// 面积越大透明度越高
                strokeColor: '#79c1cf',
                fillColor: '#0f1623',
                strokeWeight:0.8
            });
        }
    });
    map.add(geojson);
    // log.success('GeoJSON 数据加载完成')
}