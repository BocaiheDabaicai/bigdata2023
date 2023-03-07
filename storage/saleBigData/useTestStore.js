import {defineStore} from "pinia";
import {reactive,computed} from "vue";

export default defineStore('test',()=>{
    const arrList = reactive([1,2,3,4,5])
    function inputResult(){
        let a = arrList.map(item=>{
            return item = item + 1
        })
        // for(let i=0;i<arrList.value.length;i++){
        //     arrList.value[i]++
        // }
        console.log("pinia result is : ",a)
    }

    return {arrList,inputResult}
})