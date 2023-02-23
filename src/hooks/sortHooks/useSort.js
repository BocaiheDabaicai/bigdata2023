import {ref} from 'vue'


const countryColors = ['#4862A5', '#6664AD', '#8464B1', '#A064B2', '#BB62AF','#53577c']

export default function () {
    let dataList=ref([
        {value:221,name: '利乐',itemStyle:{color:countryColors[0]}},
        {value:432,name: '八联杯',itemStyle:{color:countryColors[1]}},
        {value:543,name: '爱克林',itemStyle:{color:countryColors[2]}},
        {value:534,name: '百利包',itemStyle:{color:countryColors[3]}},
        {value:888,name: '屋顶盒',itemStyle:{color:countryColors[4]}},
        {value:401,name: '花都',itemStyle:{color:countryColors[5]}},
    ])
    let option = {
        title: {
            show: true,
            id: 'title',
            text: '贵阳牛奶销售排行',
            left:'center',
            textStyle: {
                color: '#bfcde7'
            },
        },
        xAxis: {
            max: 'dataMax',
        },
        yAxis: {
            name:'当前排名',
            nameLocation:'start',
            type: 'category',
            data: ['利乐', '八联杯', '爱克林', '百利包', '屋顶盒','花都'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 5, // only the largest 3 bars will be displayed
            axisLine:{
                onZero:false
            },
            // offset:-5
        },
        series: [
            {
                realtimeSort: true,
                type: 'bar',
                data: dataList.value,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            },
        ],
        tooltip: {
            trigger: 'item',
            formatter: '当前牛奶 <br/>{b} : {c}万'
        },
        legend: {
            show: true,
            top: '30px',
            textStyle: {
                color: '#bfcde7'
            }
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
            elements: [
                {
                    type: 'text',
                    right: 50,
                    bottom: 120,
                    style: {
                        text: '2023-02',
                        font: 'bolder 40px monospace',
                        fill: 'rgba(255,172,172,0.25)',
                    },
                    z: 100
                }
            ]
        },
        textStyle: {
            color: '#bfcde7'
        }
    };

    setInterval(()=>{
        dataList.value.map((item)=>{
            item.value += Math.floor(Math.random()*70)
        })
    },200)

    return option
}