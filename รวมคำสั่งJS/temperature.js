// แปลงอุณหภูมิ 

const celciusInput = document.getElementById('celcius')
const fahrenheitInput = document.getElementById('fahrenheit')
const kevinInput = document.getElementById('kevin')
const tempInputs = document.querySelectorAll(".bg11-con input")

tempInputs.forEach(input =>{
    input.addEventListener('input', (event) =>{
        //ตัวเลขที่ป้อนเข้ามา
        let tempValue = parseInt(event.target.value)
        //ชื่อหน่วยอุณหภูมิ
        let inputName = event.target.name

        if(event.target.value === ""){
            celciusInput.value = null
            fahrenheitInput.value = null
            kevinInput.value = null
            return
        }
        //กระบวนการแปลงอุณหภูมิ
        if(inputName === "celcius"){
            // c => F 
            let fahrenheit = (tempValue*1.8)+32
            fahrenheitInput.value = fahrenheit.toFixed(2) // ทศนิยม 2 ตำแหน่ง
            // c => K
            let kevin = tempValue+273
            kevinInput.value = kevin.toFixed(2)
        }
        else if(inputName === "fahrenheit"){
            // F => C
            let celcius = (tempValue-32)/1.8
            celciusInput.value = celcius.toFixed(2)
            //F => K
            let kevin = (tempValue-32)/1.8+273
            kevinInput.value = kevin.toFixed(2)
        }
        else if(inputName === "kevin"){
            // K => C
            let celcius = tempValue-273
            celciusInput.value = celcius.toFixed(2)
            // K => F
            let fahrenheit = (tempValue-273)*1.8+32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})