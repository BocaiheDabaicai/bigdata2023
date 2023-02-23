import {ref} from 'vue'

export default function (){
    let dataList = ref([
        { value: 40, name: '贵阳' },
        { value: 38, name: '都匀' },
        { value: 32, name: '遵义' },
        { value: 30, name: '安顺' },
        { value: 28, name: '凯里' },
        { value: 26, name: '云南' },
        { value: 22, name: '铜仁' },
    ])

    setInterval(()=>{
        dataList.value.forEach((item,index)=>{
            if(index===Math.floor(Math.random()*7)){
                item.value += Math.floor(Math.random()*30)
                // console.log(item.value,index,'+')
            }
            if(index===Math.floor(Math.random()*7)){
                item.value -= Math.floor(Math.random()*15)
                // console.log(item.value,index,'-')
            }
        })
    },500)

    let option = {
        title: {
            text: '销售分布图',
            left: '42%',
            textStyle:{
                color:'#bfcde7'
            },
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            bottom:'20%',
            textStyle:{
                color:'#bfcde7',
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}万 ({d}%)'
        },
        // 工具
        // toolbox:{
        //     show:true,
        //     feature:{
        //         dataView: { show: true, readOnly: false },
        //         saveAsImage: { show:true }
        //     },
        //     left:'left',
        //     bottom:'bottom'
        // },
        series: [
            {
                name: '数据情况',
                type: 'pie',
                radius: [5, 60],
                center: ['55%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8,
                },
                label:{
                    color:'#bfcde7'
                },
                data: dataList.value
            }
        ],
    };

    return option
}