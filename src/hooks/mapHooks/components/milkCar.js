import {ref} from "vue";
import getImageUrl from "../../getImageUrl.js";
import car from "../../../assets/mapMaterial/car.png"

export default function (map) {

    // '' +
    //         '<div class="custom-content-marker">' +
    //         '   <img src="//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png">' +
    //         '<div><text>12345</text></div>'
    //     '</div>';
    let icon = new AMap.Icon({
        // 图片 url
        image: getImageUrl('../assets/mapMaterial/car.png'),
        // 图片尺寸
        size: new AMap.Size(50,50),
        imageSize : new AMap.Size(24,24),
    })

    // 点标记显示内容，HTML要素字符串
    let markerContent = `
        <div class="custom-content-marker">
            <img src="../../../assets/mapMaterial/car.png">
            <div>
                <text>12345</text>
            </div>
        </div>`;

    let marker = new AMap.Marker({
        position: [106.628104,26.645207],
        // 将 html 传给 content
        icon:icon,
        zooms: [8, 20],
        // content: markerContent,
        // label:{
        //   content:'laskdjslkajdlkasjdlk'
        // },
        // 以 icon 的 [center bottom] 为原点
        // offset: new AMap.Pixel(0, -30)
        anchor:'bottom-center'
    });

    // 将 markers 添加到地图
    map.add(marker);


    // 设置一个图标对象
    // let icon = {
    //     // 图标类型，现阶段只支持 image 类型
    //     type: 'image',
    //     // 图片 url
    //     image: getImageUrl('../assets/mapMaterial/car.png'),
    //     // 图片尺寸
    //     size: [24, 24],
    //     // 图片相对 position 的锚点，默认为 bottom-center
    //     anchor: 'center',
    // };
    // let textStyle = {
    //     fontSize: 12,
    //     fontWeight: 'normal',
    //     fillColor: '#A8DCFD',
    //     strokeColor: '#71A5C4',
    //     strokeWidth: 1,
    //     fold: true,
    //     padding: '2, 5',
    //     backgroundColor:'',
    //
    // };
    // let LabelsData = [
    //     {
    //         name: '一号车',
    //         position: [106.626226,26.645221],
    //         zooms: [8, 20],
    //         opacity: 1,
    //         zIndex: 10,
    //         fold: true,
    //         icon,
    //         text: {
    //             // 要展示的文字内容
    //             content: '一号车',
    //             // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
    //             direction: 'right',
    //             // 在 direction 基础上的偏移量
    //             offset: [-3, -5],
    //             // 文字样式
    //             style: textStyle
    //         },
    //     },
    //     {
    //         name: '二号车',
    //         position: [106.62812,26.645188],
    //         zooms: [8, 20],
    //         opacity: 1,
    //         zIndex: 16,
    //         icon,
    //         text: {
    //             content: '二号车',
    //             direction: 'right',
    //             offset: [-3, -5],
    //             style: textStyle
    //         }
    //     },
    //     {
    //         name: '三号车',
    //         position: [106.630099,26.645173],
    //         zooms: [8, 20],
    //         opacity: 1,
    //         zIndex: 16,
    //         icon,
    //         text: {
    //             content: '三号车',
    //             direction: 'right',
    //             offset: [-3, -5],
    //             style: textStyle
    //         }
    //     },
    // ];
    // let markers = [];
    // let layer = new AMap.LabelsLayer({
    //     zooms: [3, 20],
    //     zIndex: 1000,
    //     collision: true,
    // });
    // layer.add(markers);
    // // 图层添加到地图
    // map.add(layer);
    //
    // // 初始化 labelMarker
    // for (let i = 0; i < LabelsData.length; i++) {
    //     let curData = LabelsData[i];
    //     curData.extData = {
    //         index: i,
    //     };
    //
    //     let labelMarker = new AMap.LabelMarker(curData);
    //
    //     // {data:{opts:{text}}} Marker
    //     labelMarker.on('mouseover',function ({data:{opts:{text}}}) {
    //         console.log('鼠标移入',text)
    //     })
    //
    //     labelMarker.on('mouseout',function ({data:{opts:{text}}}) {
    //         console.log('鼠标移出',text)
    //     })
    //
    //     markers.push(labelMarker);
    // }
    // // 将 marker 添加到图层
    // layer.add(markers);

}