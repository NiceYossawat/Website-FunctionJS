// คำนวณ BMI Calculator 

const bmiBtn = document.querySelector('.btn12')
const resultEl = document.querySelector('.result12')


bmiBtn.addEventListener('click', (event) =>{
    event.preventDefault() //คงค่าที่ป้อนไว้ไม่ต้อง reset
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    if(weight ==="" || isNaN(weight)){
        return resultEl.innerHTML = "กรุณาป้อนข้อมูลให้ถูกต้อง"
    }
    else if(height ==="" || isNaN(height)){
        return resultEl.innerHTML = "กรุณาป้อนข้อมูลให้ถูกต้อง"
    }else{
        // cm -> m
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)

        if(bmi < 18.5){
            showResult(bmi, "ผอมเกินไป", "yellow")
        }else if(bmi >= 18.5 && bmi <= 24.9){
            showResult(bmi, "ปกติ", "green")
        }else if(bmi >= 25 && bmi <= 29.9){
            showResult(bmi, "อ้วน", "red")
        }else{
            showResult(bmi, "อ้วนเกินไป", "purple")
        }
    }
})

function showResult(bmi, message, color){
    resultEl.style.backgroundColor = color
    return resultEl.innerHTML = `ผลลัพธ์ = ${bmi} ${message}`
}