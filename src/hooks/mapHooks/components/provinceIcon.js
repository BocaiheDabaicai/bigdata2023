import {ref} from "vue";
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
    let textStyle = {
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily:'得意黑',
        fillColor: '#9CBFEC',
        strokeColor: '#99A0D5',
        strokeWidth: 1,
        fold: true,
        padding: '2, 5',
        backgroundColor:'',

    };
    // 29.512791,106.574477 重庆
    // 24.89754,102.836622 昆明
    // 22.856412,108.391489 广西
    // 28.194215,113.011893 长沙
    let LabelsData = [
        {
            name: '贵州',
            position: [106.746595,26.578258],
            zooms: [3, 6],
            opacity: 1,
            zIndex: 10,
            fold: true,
            text: {
                // 要展示的文字内容
                content: '贵州',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'bottom-center',
                // 在 direction 基础上的偏移量
                offset: [-10, -5],
                // 文字样式
                style: {
                    fontSize: 18,
                    fontWeight: 'normal',
                    fontFamily:'得意黑',
                    fillColor: '#A8DCFD',
                    strokeColor: '#71A5C4',
                    strokeWidth: 1,
                    fold: true,
                    padding: '2, 5',
                    backgroundColor:'',

                }
            },
        },
        {
            name: '重庆',
            position: [106.574477,29.512791],
            zooms: [3, 6],
            opacity: 1,
            zIndex: 10,
            fold: true,
            text: {
                // 要展示的文字内容
                content: '重庆',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'bottom-center',
                // 在 direction 基础上的偏移量
                offset: [-10, -5],
                // 文字样式
                style: textStyle
            },
        },
        {
            name: '云南',
            position: [101.398997,24.47001],
            zooms: [3, 6],
            opacity: 1,
            zIndex: 10,
            fold: true,
            text: {
                // 要展示的文字内容
                content: '云南',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'bottom-center',
                // 在 direction 基础上的偏移量
                offset: [-10, -5],
                // 文字样式
                style: textStyle
            },
        },
        {
            name: '广西',
            position: [108.64544,23.880921],
            zooms: [3, 6],
            opacity: 1,
            zIndex: 10,
            fold: true,
            text: {
                // 要展示的文字内容
                content: '广西',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'bottom-center',
                // 在 direction 基础上的偏移量
                offset: [-10, -5],
                // 文字样式
                style: textStyle
            },
        },
        {
            name: '湖南',
            position: [111.658813,27.691448],
            zooms: [3, 6],
            opacity: 1,
            zIndex: 10,
            fold: true,
            text: {
                // 要展示的文字内容
                content: '湖南',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'bottom-center',
                // 在 direction 基础上的偏移量
                offset: [-10, -5],
                // 文字样式
                style: textStyle
            },
        },
    ];
    let markers = [];
    let layer = new AMap.LabelsLayer({
        zooms: [2, 7],
        zIndex: 1000,
        collision: false,
    });
    layer.add(markers);
    // 图层添加到地图
    map.add(layer);

    // 初始化 labelMarker
    for (let i = 0; i < LabelsData.length; i++) {
        let curData = LabelsData[i];
        curData.extData = {
            index: i,
        };

        let labelMarker = new AMap.LabelMarker(curData);

        markers.push(labelMarker);
    }
    // 将 marker 添加到图层
    layer.add(markers);

}