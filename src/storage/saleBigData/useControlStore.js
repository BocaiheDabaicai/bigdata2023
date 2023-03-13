import {defineStore} from "pinia";
import {ref} from "vue";

export default defineStore("control", () => {
    const controlData = ref(false)
    const controlCars = ref(false)
    const controlMilk = ref(false)
    const controlZoom = ref(4)
    const controlCenter = ref([105.381839, 37.996769])

    function updateProvince() {
        controlData.value = !controlData.value
    }

    function updateCars() {
        controlCars.value = !controlCars.value
    }

    function updateMilk() {
        controlMilk.value = !controlMilk.value
    }

    function setZoomAndCenter(zoom, center) {
        controlZoom.value = zoom
        controlCenter.value = center
    }

    return {
        controlData,
        controlCars,
        controlMilk,
        controlZoom,
        controlCenter,
        setZoomAndCenter,
        updateProvince,
        updateCars,
        updateMilk
    }
})