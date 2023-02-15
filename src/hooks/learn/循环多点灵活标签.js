var spots = [];
var zoomStyleMapping2 = {
    14:0,
    15:0,
    16:1,
    17:1,
    18:1,
    19:1,
    20:1
}
for(var i=0;i<touristSpots.length;i+=1){
    var marker = new AMap.ElasticMarker({
        position:[106.63527,26.645388],
        zooms:[15.5,20],
        styles:[{
            icon:{
                img:touristSpots[i].smallIcon,
                size:[16,16],//可见区域的大小
                ancher:[8,16],//锚点
                fitZoom:14,//最合适的级别
                scaleFactor:2,//地图放大一级的缩放比例系数
                maxScale:2,//最大放大比例
                minScale:1//最小放大比例
            },
            label:{
                content:touristSpots[i].name,
                offset:[-35,0],
                position:'BM',
                minZoom:15
            }
        },{
            icon:{
                img:touristSpots[i].bigIcon,
                size:touristSpots[i].size,
                ancher:touristSpots[i].ancher,
                fitZoom:17.5,
                scaleFactor:2,
                maxScale:2,
                minScale:0.125
            },
            label:{
                content:touristSpots[i].name,
                offset: [-35,0],
                position:'BM'
            }
        }],
        zoomStyleMapping:zoomStyleMapping2
    })
    spots.push(marker);
}
map.add(spots)