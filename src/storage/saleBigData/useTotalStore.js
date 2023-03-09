import {defineStore} from "pinia";
import {ref, computed} from "vue";

export default defineStore('total', () => {
    const presentData = ref(0)
    const targetData = ref(100)

    function updateData(range) {
        presentData.value = targetData.value
        targetData.value += Math.floor(Math.random() * range)
        // console.log("已触发")
        // console.log("presentData.value", presentData.value)
        // console.log("targetData.value", targetData.value)
    }

    return {presentData, targetData, updateData}
})