import {reactive,ref} from "vue";
import {useMessage} from "naive-ui";
import useControlStore from "../storage/saleBigData/useControlStore.js";
import useMap from "./useMap.js";
export default function () {
    const message = useMessage()
    const showRef = ref(true)
    const control = useControlStore()

    let options = reactive([
        {
            label: "显示车辆",
            key: "carOpen",
            props:{
                onClick:()=>{
                    // 连接地图
                    message.success("数据展示成功！")
                    control.updateCars()
                    console.log("in useMenu",control.controlCars)
                    useMap()
                }
            },
            optionLabel:true
        },
        {
            label: "显示奶点",
            key: "milkOpen",
            props:{
                onClick:()=>{
                    message.success("数据展示成功！")
                    control.updateMilk()
                    console.log("in useMenu",control.controlMilk)
                    useMap()
                }
            },
            optionLabel:true
        },
        {
            label: "显示销售板块",
            key: "saleOpen",
            props:{
                onClick:()=>{
                    message.success("数据展示成功！")
                    control.updateProvince()
                    console.log("in useMenu",control.controlData)
                    useMap()
                }
            },
            optionLabel:true
        },
        {
            label: "显示热力图",
            key: "hotOpen",
            props:{
                onClick:()=>{
                    message.success("数据展示成功！")
                }
            },
            optionLabel:true
        },
        {
            label: "全屏展示",
            key: "fullScreen",
            props:{
                onClick:()=>{
                    message.success("全屏展示成功！")
                    showRef.value = !showRef.value
                }
            },
            optionLabel:true
        }
    ])

    function handleSelect(key) {
        options.map((item)=>{
            if(item.key === key && key!== "fullScreen"){
                item.optionLabel = !item.optionLabel
                item.label = (item.optionLabel?"显示":"隐藏")+item.label.substring(2)
                console.log(item)
            }
            if(item.key === key && item.key === "fullScreen"){
                item.optionLabel = !item.optionLabel
                item.label = (item.optionLabel?"全屏":"原图")+item.label.substring(2)
                console.log(item)
            }
        })
    }

    return {options,handleSelect,showRef}
}

