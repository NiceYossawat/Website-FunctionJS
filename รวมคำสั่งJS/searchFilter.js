const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItem = []

filter.addEventListener('input', (event) =>{
    const search = event.target.value.toLowerCase()
    listItem.forEach(item =>{
        if(item.innerText.toLowerCase().includes(search)){
            //แสดงรายการ
            item.classList.remove("hide")
        }else{
            //ซ่อนรายการที่ไม่เกี่ยวข้อง
            item.classList.add("hide")
        }
    })
})

async function getData() { //รอให้ดึงข้อมูลมาให้ครบก่อนแล้วแสดงผล
    const url = "https://restcountries.com/v2/all"
    const res =  await fetch(url) //ดึงข้อมูล
    const items = await res.json()
    result.innerHTML = ""
    items.forEach(data =>{
        const li = document.createElement("li")
        listItem.push(li)
        li.innerHTML = 
        `
            <img src = "${data.flag}"/>
            <div class = "info">
                <h4>${data.name}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>         
        `
        result.appendChild(li)
    })
}

function formatNumber(num) { // จัดรูปแบบตัวเลขให้มีลูกน้ำ

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}
getData()