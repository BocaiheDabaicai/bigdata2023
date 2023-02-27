

export default function (map) {
    var logMapinfo = function (){
        let zoom = map.getZoom(); //获取当前地图级别
        document.querySelector("#map-zoom").innerText = zoom;
    };
    logMapinfo();

    function mapZoomstart(){
        document.querySelector("#text").innerText = '缩放开始';
    }
    function mapZoom(){
        logMapinfo();
        document.querySelector("#text").innerText = '正在缩放';
    }
    function mapZoomend(){
        document.querySelector("#text").innerText = '缩放结束';
    }

    // 事件绑定
    function zoomOn(){
        console.log("绑定事件!");
        map.on('zoomstart', mapZoomstart);
        map.on('zoomchange', mapZoom);
        map.on('zoomend', mapZoomend);
    }
    // 解绑事件
    function zoomOff(){
        log.success("解除事件绑定!");
        map.off('zoomstart', mapZoomstart);
        map.off('zoomchange', mapZoom);
        map.off('zoomend', mapZoomend);
    }

    // 给按钮绑定事件
    document.getElementById("zoomOn").onclick = zoomOn;
    document.getElementById("zoomOff").onclick = zoomOff;
}