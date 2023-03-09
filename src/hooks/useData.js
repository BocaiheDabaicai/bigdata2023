import {ref} from "vue";
import useTotalStore from "../storage/saleBigData/useTotalStore.js";

export default function (range,time){
    const totalData = useTotalStore()
    let tempData = ref([0,0])
    setInterval(()=>{
        totalData.updateData(range)
        // console.log("useData :",totalData.presentData,totalData.targetData)
        tempData.value[0]=totalData.presentData
        tempData.value[1]=totalData.targetData
    },time)
    return tempData
}
