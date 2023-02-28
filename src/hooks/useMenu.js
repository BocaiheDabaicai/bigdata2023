import {reactive,ref} from "vue";
// import { useMessage } from "naive-ui";

export default function () {
    // const message = useMessage();
    const showDropDownRef = ref(false)
    let options = reactive([
        {
            label: "显示车辆",
            key: "carOpen",
            show:true
        },
        {
            label: "隐藏车辆",
            key: "carClose",
            show:false
        },
        {
            label: "显示奶点",
            key: "milkOpen"
        },
        {
            label: "显示销售板块",
            key: "saleOpen"
        },
        {
            label: "显示热力图",
            key: "hotOpen"
        },
        {
            label: "全屏展示",
            key: "fullScreen"
        }
    ])

    function handleSelect(key) {
        // message.info(String(key));
        // console.log(String(key).substring(0,3))
        // console.log(options)
        options.map((item)=>{
            console.log(item)
            if(item.key === key){
                console.log('we find it')
            }
        })
    }
    function handleClick() {
        showDropDownRef.value = !showDropDownRef.value;
    }

    return {options,handleSelect,handleClick}
}

