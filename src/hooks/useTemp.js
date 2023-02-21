

export default function () {
    let option = {
        title:{
            text:'都匀常低温占比',
            left:'center',
            textStyle:{
                fontSize:26,
                color:'#a4c6ff'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
            },
        },
        legend: {
            data: ['常温', '低温', '比值'],
            top:'bottom',
            textStyle:{
                color:'#a4c6ff'
            },
        },
        xAxis: [
            {
                type: 'category',
                data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
                axisPointer: {
                    type: 'shadow'
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '销售量 (万)',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '占比 (常温/低温)',
                min: 0,
                max: 2.5,
                interval: 0.5,
                axisLabel: {
                    formatter: '{value} '
                },
            }
        ],
        series: [
            {
                name: '常温',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                ]
            },
            {
                name: '低温',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' 万';
                    }
                },
                data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                ]
            },
            {
                name: '比值',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value;
                    }
                },
                data: [0.87,0.93,1.03,1.13,1.21,1.78,0.78]
            }
        ],
        textStyle:{
            color:'#a4c6ff'
        },
    };

    return option
}