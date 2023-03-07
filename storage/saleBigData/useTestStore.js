import {defineStore} from "pinia";
import {reactive,computed} from "vue";

export default defineStore('test',()=>{
    const arrList = reactive([1,2,3,4,5])
    const result = computed(()=>{
        console.log("computed被使用")
        arrList.forEach((item)=> {
            console.log(item," 被使用")
            item++
            console.log(item)
        })
    })
    function inputResult(data){
        console.log("pinia result is : ",data)
    }

    return {arrList,result,inputResult}
})