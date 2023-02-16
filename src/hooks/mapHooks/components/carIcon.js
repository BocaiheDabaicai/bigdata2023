import getImageUrl from "../../getImageUrl.js";


export default function (map) {

    let Icon = new AMap.Icon({
        // 图标类型，现阶段只支持 image 类型
        type: 'image',
        // 图片 url
        image: getImageUrl('../assets/car.png'),
        // 图片尺寸
        size: [24, 24],
        // 图片相对 position 的锚点，默认为 bottom-center
        anchor: 'center',
    });

    let lnglats = [
        [106.629142,26.641975],
        [106.627937,26.642614]
    ];

    let infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -30)
    });

    for (let i = 0; i < lnglats.length; i++) {
        let marker = new AMap.Marker({
            position: lnglats[i],
            map: map,
            icon: Icon,
        });
        marker.content = '我是第' + (i + 1) + '个Marker';
        marker.on('click', markerClick);
        marker.emit('click', {target: marker});
    }

    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

    map.setFitView();
}