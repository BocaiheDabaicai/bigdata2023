import {ref} from "vue";

export default function (range,refTime){
    let testData = ref([0,0])

    setInterval(()=>{
        testData.value[0] = testData.value[1]
        testData.value[1] += Math.floor(Math.random()*range)
    },refTime)

    return testData
}
