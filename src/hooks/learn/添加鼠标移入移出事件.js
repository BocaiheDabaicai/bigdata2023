// 设置label标签

// 设置鼠标划过点标记显示的文字提示
marker.on('mouseover', function (e) {
    marker.setLabel({
        offset: new AMap.Pixel(20, 20),  //设置文本标注偏移量
        content: "我是 marker 的 label 标签", //设置文本标注内容
        direction: 'right' //设置文本标注方位
    });
})
marker.on('mouseout', function (e) {
    marker.setLabel({
        content:'abcd',
        direction:'bottom-center',
        offset: new AMap.Pixel(20, -40),
    });
})