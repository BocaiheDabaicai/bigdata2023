import {ref} from 'vue'


const countryColors = ['#4862A5', '#6664AD', '#8464B1', '#A064B2', '#BB62AF',]

export default function () {
    let dataList=ref([
        {value:221,itemStyle:{color:countryColors[0]}},
        {value:432,itemStyle:{color:countryColors[1]}},
        {value:543,itemStyle:{color:countryColors[2]}},
        {value:534,itemStyle:{color:countryColors[3]}},
        {value:888,itemStyle:{color:countryColors[4]}},
    ])
    let option = {
        title: {
            show: true,
            id: 'title',
            text: '贵阳牛奶销售排行',
            left:'center',
            textStyle: {
                color: '#a4c6ff'
            },
        },
        xAxis: {
            max: 'dataMax'
        },
        yAxis: {
            name:'当前排名',
            nameLocation:'start',
            type: 'category',
            data: ['利乐', '八联杯', '爱克林', '百利包', '屋顶盒'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 4, // only the largest 3 bars will be displayed
            axisLine:{
                onZero:false
            },
            offset:-5
        },
        series: [
            {
                realtimeSort: true,
                name: 'X',
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
            show: false,
            top: '30px',
            textStyle: {
                color: '#a4c6ff'
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
            color: '#a4c6ff'
        }
    };

    setInterval(()=>{
        dataList.value.map((item)=>{
            item.value += Math.floor(Math.random()*70)
        })
    },200)

    return option
}