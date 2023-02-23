

export default function () {
    let option = {
        title: {
            text: '前五大销售地区',
            left:'center',
            textStyle:{
                color:'#bfcde7'
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#bfcde7'
                }
            }
        },
        legend: {
            data: ['贵阳', '遵义', '安顺', '凯里', '都匀'],
            orient:'horizontal',
            align:'left',
            top:'30px',
            textStyle:{
                color:'#bfcde7'
            },
        },
        toolbox: {},
        grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                name:'销售量(万)',
                nameLocation:'end',
                type: 'value'
            }
        ],
        series: [
            {
                name: '贵阳',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                smooth: true,
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '遵义',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                smooth: true,
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '安顺',
                type: 'line',
                stack: 'Total',
                areaStyle:{},
                emphasis: {
                    focus: 'series'
                },
                smooth: true,
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '凯里',
                type: 'line',
                stack: 'Total',
                areaStyle:{},
                emphasis: {
                    focus: 'series'
                },
                smooth: true,
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '都匀',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top',
                    color:'#a4c6ff'
                },
                itemStyle:{
                    color:'#dd4ebf'
                },
                lineStyle:{
                    color:'#8b74cf'
                },
                areaStyle: {
                    color:'#3b3058'
                },
                emphasis: {
                    focus: 'series'
                },
                smooth: true,
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ],
        textStyle:{
            color:'#bfcde7'
        },
    };
    return option
}