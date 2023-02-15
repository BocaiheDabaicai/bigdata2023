import {ref} from "vue";
import getImageUrl from "../../getImageUrl.js";

export default function (map) {
    // 设置一个图标对象
    let icon = {
        // 图标类型，现阶段只支持 image 类型
        type: 'image',
        // 图片 url
        image: getImageUrl('../assets/mapMaterial/house.png'),
        // 图片尺寸
        size: [24, 24],
        // 图片相对 position 的锚点，默认为 bottom-center
        anchor: 'center',
    };
    let textStyle = {
        fontSize: 12,
        fontWeight: 'normal',
        fillColor: '#A8DCFD',
        strokeColor: '#71A5C4',
        strokeWidth: 1,
        fold: true,
        padding: '2, 5',
        backgroundColor:'',

    };
    let LabelsData = [
        {
            name: '自提点1',
            position: [106.609226,26.599128],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 10,
            fold: true,
            icon,
            text: {
                // 要展示的文字内容
                content: '山花奶点1',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                offset: [-3, -5],
                // 文字样式
                style: textStyle
            },
        },
        {
            name: '自提点2',
            position: [106.602584,26.59993],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '山花奶点2',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '自提点3',
            position: [106.577853,26.613244],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '山花奶点3',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
    ];
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
    for (let i = 0; i < LabelsData.length; i++) {
        let curData = LabelsData[i];
        curData.extData = {
            index: i,
            content:'具体情况,奶品销售:1202,奶品比例:3/12.'
        };

        let labelMarker = new AMap.LabelMarker(curData);

        // {data:{opts:{text}}}
        labelMarker.on('mouseover',function ({data:{opts:{text}}}) {
            console.log('鼠标移入')
            // 替换暂存数据
            let tempContent = labelMarker.getExtData()
            labelMarker.setExtData({
                ...tempContent,
                content:text.content
            })
            // 设置当前数据
            text.content = tempContent['content']
            text.style.backgroundColor='#23487c'
            labelMarker.setText(text)
        })

        labelMarker.on('mouseout',function ({data:{opts:{text}}}) {
            console.log('鼠标移出')
            // 替换暂存数据
            let tempContent = labelMarker.getExtData()
            labelMarker.setExtData({
                ...tempContent,
                content:text.content
            })
            // 设置当前数据
            text.content = tempContent['content']
            text.style.backgroundColor=''
            labelMarker.setText(text)
        })

        markers.push(labelMarker);
    }
    // 将 marker 添加到图层
    layer.add(markers);

}