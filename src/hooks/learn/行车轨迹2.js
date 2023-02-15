var drivingOption = {
    policy: AMap.DrivingPolicy.LEAST_TIME, // 其它policy参数请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingPolicy
    ferry: 1, // 是否可以使用轮渡
    province: '京', // 车牌省份的汉字缩写
}

// 构造路线导航类
var driving = new AMap.Driving(drivingOption)

// 根据起终点经纬度规划驾车导航路线
driving.search(new AMap.LngLat(106.623487,26.644864), new AMap.LngLat(106.647156,26.635288), function(status, result) {
    // result即是对应的驾车导航信息，相关数据结构文档请参考 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
    if (status === 'complete') {
        if (result.routes && result.routes.length) {
            // 绘制第一条路线，也可以按需求绘制其它几条路线
            drawRoute(result.routes[0])
            log.success('绘制驾车路线完成')
        }
    } else {
        log.error('获取驾车数据失败：' + result)
    }
});

function drawRoute (route) {
    var path = parseRouteToPath(route)

    var startMarker = new AMap.Marker({
        position: path[0],
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/start.png',
        map: map
    })

    var endMarker = new AMap.Marker({
        position: path[path.length - 1],
        icon: 'https://webapi.amap.com/theme/v1.3/markers/n/end.png',
        map: map
    })

    var routeLine = new AMap.Polyline({
        path: path,
        isOutline: true,
        outlineColor: '#ffeeee',
        borderWeight: 2,
        strokeWeight: 5,
        strokeOpacity: 0.9,
        strokeColor: '#0091ff',
        lineJoin: 'round'
    })

    map.add(routeLine);

    // 调整视野达到最佳显示区域
    map.setFitView([ startMarker, endMarker, routeLine ])
}

// 解析DrivingRoute对象，构造成AMap.Polyline的path参数需要的格式
// DrivingResult对象结构参考文档 https://lbs.amap.com/api/javascript-api/reference/route-search#m_DriveRoute
function parseRouteToPath(route) {
    var path = []

    for (let i = 0; i < route.steps.length; i++) {
        for (let j = 0; j < route.steps[i].path.length; j++) {
            path.push(route.steps[i].path[j])
        }
    }

    return path
}