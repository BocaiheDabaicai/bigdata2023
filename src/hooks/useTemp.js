

export default function () {
    let option = {
        title: {
            text: '常低温占比',
            textStyle:{
                color:'#bfcde7',
                fontSize:'12px'
            }
        },
        legend: {
            data: ['Allocated Budget', '低温'],
            left:'left',
            bottom:'bottom',
            textStyle:{
                color:'#bfcde7'
            },
        },
        tooltip:{

        },
        radar: {
            // shape: 'circle',
            indicator: [
                { name: '爱克林', max: 6500 },
                { name: '玻璃瓶', max: 16000 },
                { name: '塑杯', max: 30000 },
                { name: '八联杯', max: 38000 },
                { name: '屋顶盒', max: 52000 },
                { name: '百利包', max: 25000 }
            ],
            radius:'40%',
            splitNumber:3,
            axisName:{
                color:'#bfcde7'
            }
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: '低温',
                        itemStyle:{
                            color:'#dd4ebf'
                        },
                        lineStyle:{
                            color:'#8b74cf'
                        },
                        areaStyle: {
                            color:'#3b3058'
                        },
                    }
                ]
            }
        ]
    };

    return option
}