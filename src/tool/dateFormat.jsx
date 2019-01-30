export default function changeFormat(strDate) {
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const arr = strDate.split("-")
    return arr[0]+" "+months[parseInt(arr[1])]+". "+arr[2];
}