import {defineStore} from "pinia";
import {ref} from "vue";

export default defineStore("control",()=>{
    const controlData = ref(false)
    const controlZoom = ref(4)
    const controlCenter = ref([105.381839,37.996769])

    function updateControl() {
        controlData.value = ! controlData.value
    }

    function setZoomAndCenter (zoom,center){
        controlZoom.value = zoom
        controlCenter.value = center
    }

    return {controlData,controlZoom,controlCenter,setZoomAndCenter,updateControl}
})