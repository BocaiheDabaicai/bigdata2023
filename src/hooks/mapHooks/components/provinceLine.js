export default function (map) {
    let lineArrList = {
        path:[
            [//重庆
                [106.746595,26.578258],
                [106.574477,29.512791]
            ],
            [//云南
                [106.746595,26.578258],
                [101.398997,24.47001]
            ],
            [//广西
                [106.746595,26.578258],
                [108.64544,23.880921]
            ],
            [//湖南
                [106.746595,26.578258],
                [111.658813,27.691448]
            ]
        ],
    }
    let listObject = []
    lineArrList.path.map((item)=>{
        let polyline = new AMap.Polyline({
            path: item,            // 设置线覆盖物路径
            strokeColor: '#36adff',   // 线颜色
            strokeOpacity: 1,         // 线透明度
            strokeWeight: 2,          // 线宽
            strokeStyle: 'dashed',     // 线样式
            strokeDasharray: [10,10], // 补充线样式
            geodesic: true            // 绘制大地线
        });
        listObject.push(polyline)
        map.add(polyline);
    })

    setInterval(()=>{
        if(map.getZoom()>6){
            listObject.forEach((item)=>{
                item.hide()
            })
        }else {
            listObject.forEach((item)=>{
                item.show()
            })
        }
    },1000)
}