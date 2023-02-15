import {ref,computed} from 'vue'

export default function(){
    let datalist = ref([
        {value:12,name:'jack'},
        {value:33,name:'mary'},
        {value:51,name:'cryq'},
        {value:16,name:'ssa'},
        {value:55,name:'poppp'},
        {value:89,name:'dong'}
    ])

    setInterval(()=>{
        // datalist.value = datalist.value.map((item)=>({
        //     ...item,
        //     value: Math.random()*100
        // }))
        datalist.value.push({
            value: Math.random()*100,name:Math.random().toString(36).slice(-8)
        })
    },1000)

    return computed(()=>{
        return {
            xAxis: {
                type: 'category',
                data: datalist.value.map(item => item.name)
            },
            yAxis: {
                type:'value'
            },
            series: [
                {
                    data: datalist.value.map(item => item.value),
                    type: 'line'
                }
            ]
        }
    })
}

