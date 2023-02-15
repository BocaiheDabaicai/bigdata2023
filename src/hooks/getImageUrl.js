export default (url)=>{
    return new URL(url,import.meta.url).href
}