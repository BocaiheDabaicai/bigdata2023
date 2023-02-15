
export default function (map) {

    let driving = new AMap.Driving({
        map: map,
        hideMarkers :true,
        outlineColor:'#9CBFEC',
        showTraffic:true

    });
    // 根据起终点经纬度规划驾车导航路线
    driving.search(
        new AMap.LngLat(106.529937,26.57145),
        new AMap.LngLat(106.577853,26.613244),{
        waypoints:[
            new AMap.LngLat(106.609226,26.599128),
            new AMap.LngLat(106.602584,26.59993)
        ]
    }, function(status, result) {
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
            console.log('绘制驾车路线完成')
        } else {
            console.log('获取驾车数据失败：' + result)
        }
    });

    // setTimeout(()=>{
    //     driving.clear()
    // },3000)

}
