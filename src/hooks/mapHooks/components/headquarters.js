// 106.529937,26.57145
import getImageUrl from "../../getImageUrl.js";

export default function (map) {
    // 设置一个图标对象
    let icon = {
        // 图标类型，现阶段只支持 image 类型
        type: 'image',
        // 图片 url
        image: getImageUrl('../assets/mapMaterial/province.png'),
        // 图片尺寸
        size: [24, 24],
        // 图片相对 position 的锚点，默认为 bottom-center
        anchor: 'center',
    };
    let markers = [];
    let layer = new AMap.LabelsLayer({
        zooms: [3, 20],
        zIndex: 1000,
        collision: true,
    });
    layer.add(markers);
    // 图层添加到地图
    map.add(layer);

    // 初始化 labelMarker
    let labelMarker = new AMap.LabelMarker(
        {
            name: '公司总部',
            position: [106.529937,26.57145],
            zooms: [12, 20],
            opacity: 1,
            zIndex: 10,
            fold: true,
            icon,
            text: {
                // 要展示的文字内容
                content: '公司总部',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'bottom-center',
                // 在 direction 基础上的偏移量
                offset: [-26, 36],
                // 文字样式
                style: {
                    fontSize: 18,
                    fontWeight: 'normal',
                    fontFamily:'得意黑',
                    fillColor: '#008BF3',
                    strokeColor: '#235DF2',
                    strokeWidth: 1,
                    fold: true,
                    padding: '2, 5',
                    backgroundColor:'',

                }
            },
        }
    );
    markers.push(labelMarker);

    // 将 marker 添加到图层
    layer.add(markers);

}