import {reactive} from "vue";

export default function () {
    const list = reactive({
        columns:[
            {
                title:'排名',
                key:'line'
            },
            {
                title:'公司',
                key:'company'
            },
            {
                title:'销售额',
                key:'sale'
            },
        ],
        data:[
            {line:1,company:'xx公司',sale:61273},
            {line:2,company:'上上公司',sale:43122},
            {line:3,company:'qq公司',sale:39584},
            {line:4,company:'zz公司',sale:37621},
            {line:5,company:'pp公司',sale:29801},
            {line:6,company:'ww公司',sale:21881},
            {line:7,company:'ff公司',sale:11881}
        ],
        extraData:[
            {line:8,company:'前期公司',sale:9874},
            {line:9,company:'人人公司',sale:8776},
            {line:10,company:'uu公司',sale:5546},
            {line:11,company:'版本公司',sale:5422},
            {line:12,company:'魄力公司',sale:4987},
            {line:13,company:'监控公司',sale:4781},
            {line:14,company:'路口公司',sale:3220}
        ]
    })

    // 数据动态演示
    setInterval(()=>{
        let i = 0
        list.data.map((item)=>{
            item.sale += Math.floor(Math.random()*100)
            i++
        })
        if(i===350){
            let tempData = list.data
            list.data = list.extraData
            list.extraData = tempData
            i=0
        }
    },100)
    /*
    * 历史遗留问题
    * naiveUI的dataTable的scrollbar滚动条组件
    * 期待:
    *   滚动条自动滚动并带动列表下滑
    * 实际:
    *   滚动条下滑而列表未下滑
    * 处理方案:
    *   发起axios请求，取前六十位，逐次播放十五秒
    *   再次请求，并重复播放
    * */
    // let carousel = document.getElementsByClassName('n-scrollbar-rail__scrollbar')
    // let height = 0
    // setInterval(()=>{
    //     if(height>182){
    //         height = 0
    //     }
    //     carousel[0].style.top = (height += 1).toString()+'px'
    //     console.log(carousel[0].style,carousel[0].style.top,carousel[0].offsetTop)
    // },1000)

    return list
}