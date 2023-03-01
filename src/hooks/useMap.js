import mapStart from "./mapHooks/mapStart.js";

export default function (){
    // 获取地图属性
    // console.log(map)

    return mapStart()
}


// let regions = [
//     {
//         name: '新疆维吾尔自治区',
//         itemStyle: {
//             areaColor: '#374ba4',
//             opacity: 1,
//         },
//     },
// ]
// let scatter = [
//     { name: '贵阳', value: [106.788429, 26.570909,9]},
//     { name: '重庆', value: [106.544593, 29.497486,9] },
//     { name: '昆明', value: [102.82742, 24.888386,9] },
//     { name: '南宁', value: [108.338115, 22.881946,9]},
//     { name: '长沙', value: [113.068534, 28.160286,9]},
// ]
// export default function () {
//     let option = reactive({
//         title:{
//             text:'销售实时地图',
//             left:'center',
//             textStyle:{
//                 color:'#cad8ff',
//                 fontFamily:'得意黑',
//             }
//         },
//         geo: {
//             map: 'china',
//             roam: true, //是否允许缩放，拖拽
//             zoom: 1.7, //初始化大小
//             //缩放大小限制
//             scaleLimit: {
//                 min: 1, //最小
//                 max: 100, //最大
//             },
//             //设置中心点
//             center: [104, 36],
//             //省份地图添加背景
//             // regions: regions,
//             itemStyle: {
//                 areaColor: '#003953',
//                 color: 'red',
//                 borderColor: '#A8DCFD',
//                 borderWidth: 0.3,
//             },
//             //高亮状态
//             emphasis: {
//                 itemStyle: {
//                     areaColor: '#A8DCFD',
//                 },
//             },
//         },
//         //配置属性
//         series: {
//             name:'实时数据',
//             type: 'effectScatter',
//             coordinateSystem: 'geo',
//             data: scatter,
//             showEffectOn: 'render',
//             rippleEffect: {
//                 //涟漪特效相关配置
//                 brushType: 'stroke', //波纹的绘制方式，可选 'stroke' 和 'fill'
//             },
//             label: {
//                 formatter: '{b}',
//                 position: 'right',
//                 show: true,
//             },
//             itemStyle: {
//                 color: '#32c2fc', //散点的颜色
//                 shadowBlur: 10,
//                 shadowColor: 20,
//                 fontSize: '12px',
//             },
//         },
//         tooltip: {
//             trigger:'item',
//             formatter: '{a} <br/>省会城市 坐标位置(x,y) 销售数据(万)<br/>{b} {c}'
//         },
//         test:1
//     });
//
//     return option
// }