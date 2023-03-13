import {ref} from "vue";
import getImageUrl from "../../getImageUrl.js";
import close from "../../../assets/mapMaterial/close.png"
import truck from "../../../assets/mapMaterial/infoTruck.jpg"
import infoTruckLabel from "../../../assets/mapMaterial/infoTruckLabel.png"

export default function (map) {

    // 设置一个图标对象
    let icon = {
        // 图标类型，现阶段只支持 image 类型
        type: 'image',
        // 图片 url
        image: getImageUrl('../assets/mapMaterial/car.png'),
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
            name: '一号车',
            position: [106.626226,26.645221],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 10,
            fold: true,
            icon,
            text: {
                // 要展示的文字内容
                content: '一号车',
                // 文字方向，有 icon 时为围绕文字的方向，没有 icon 时，则为相对 position 的位置
                direction: 'right',
                // 在 direction 基础上的偏移量
                offset: [-3, -5],
                // 文字样式
                style: textStyle
            },
        },
        {
            name: '二号车',
            position: [106.62812,26.645188],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '二号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '三号车',
            position: [106.630099,26.645173],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '三号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '四号车',
            position: [106.55714,26.581803],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '四号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '五号车',
            position: [106.592846,26.629383],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '五号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '六号车',
            position: [106.605549,26.611581],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '六号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '七号车',
            position: [106.605549,26.611581],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '七号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '八号车',
            position: [106.663399,26.667433],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '八号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '九号车',
            position: [106.635418,26.644881],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '九号车',
                direction: 'right',
                offset: [-3, -5],
                style: textStyle
            }
        },
        {
            name: '十号车',
            position: [106.624569,26.634319],
            zooms: [8, 20],
            opacity: 1,
            zIndex: 16,
            icon,
            text: {
                content: '十号车',
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
        };

        let labelMarker = new AMap.LabelMarker(curData);

        // {data:{opts:{text}}} Marker
        labelMarker.on('click',function ({data:{opts:{text}}}) {
            console.log('鼠标点击',text)
            infoWindow.open(map, labelMarker.getPosition());
        })
        //----------------------------------------------------------
        //实例化信息窗体
        let title = '山花01号车<span style="font-size:14px;color:#74ddc4;margin-left: 10px;">当前状态:配送中</span>';
        let picture = truck
        let message ="配送线路：总部->奶点1->奶点2->奶点3<br/>配送人员:张三<br/>联系电话:18746368901<br/>奶车情况:部件正常|通讯正常<br/>牛奶信息:24件利乐纯|8箱屋顶盒<br/>"
        let infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: createInfoWindow(title, picture, message),
            offset: new AMap.Pixel(16, -20)
        });
        //构建自定义信息窗体
        function createInfoWindow(title, picture, message) {
            var info = document.createElement("div");
            info.className = "custom-info input-card content-window-card";

            //可以通过下面的方式修改自定义窗体的宽高
            info.style.position = "relative"
            info.style.width = "400px";
            info.style.height = "190px";
            info.style.borderRadius = "5px";
            info.style.background = "#12172a";
            // 定义顶部标题
            var top = document.createElement("div");
            var hrLine = document.createElement("hr")
            var titleD = document.createElement("text");
            var closeX = document.createElement("img");

            top.className = "info-top";
            top.style.textAlign = "left"
            top.style.color = "#3361d5"

            hrLine.style.borderColor = "#475e9c"

            titleD.innerHTML = title;
            titleD.style.fontSize = "18px"
            titleD.style.fontWeight = "2px"
            titleD.style.marginLeft = "2%"

            closeX.src = close;
            closeX.style.width = "18px";
            closeX.style.height = "18px";
            closeX.style.marginLeft = "40%"
            closeX.onclick = closeInfoWindow;

            top.appendChild(titleD);
            top.appendChild(closeX);
            top.appendChild(hrLine);
            info.appendChild(top);

            // 定义中部内容
            let middle = document.createElement("div");
            let middleLeft = document.createElement("div")
            let middlePicture = document.createElement("img");
            let middleLabel = document.createElement("img");
            let middleLabelText = document.createElement("text")
            let middleText = document.createElement("div");

            middle.className = "info-middle";
            middle.style.color = '#74ddc4';

            middleLeft.className = "info-middle-left"
            middleLeft.style.float = "left"
            middleLeft.style.width = "30%"

            middlePicture.style.borderRadius = "5px"
            middlePicture.style.width = "108px"
            middlePicture.style.height = "auto"
            middlePicture.src = picture

            middleLabel.style.width = "24px"
            middleLabel.style.height = "24px"
            middleLabel.src = infoTruckLabel

            middleLabelText.style.fontSize = "18px"
            middleLabelText.innerHTML = "贵AZ0987"

            middleLeft.appendChild(middlePicture)
            middleLeft.appendChild(middleLabel)
            middleLeft.appendChild(middleLabelText)

            middleText.style.float = "right"
            middleText.style.width = "65%"
            middleText.style.textAlign = "left"
            middleText.innerHTML = message

            middle.appendChild(middleLeft)
            // middle.appendChild(middlePicture)
            middle.appendChild(middleText)
            info.appendChild(middle);

            // 定义底部内容
            let bottom = document.createElement("div");
            let bottomLine = document.createElement("hr")
            let bottomText = document.createElement("text");
            bottom.className = "info-bottom";
            bottom.style.marginTop = "30%"

            bottomLine.style.borderColor = "#475e9c"

            bottomText.style.color="#74ddc4"
            bottomText.style.fontSize = "10px"
            bottomText.innerHTML="NfryCompany © 2023 隐私和法律 贵ICP备2021004806号-1"

            bottom.appendChild(bottomLine);
            bottom.appendChild(bottomText)
            info.appendChild(bottom);
            return info;
        }

        //关闭信息窗体
        function closeInfoWindow() {
            map.clearInfoWindow();
        }
        //---------------------------------------------------------
        markers.push(labelMarker);
    }
    // 将 marker 添加到图层
    layer.add(markers);

}