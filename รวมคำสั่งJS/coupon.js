// Auto Click to Copy Coupon 
const btn = document.querySelector('.btn-bg1');
const coupon = document.querySelector('.coupon');

btn.addEventListener('click',(event) =>{
    coupon.select() // การเลือกค่าตัวแปร ใน Coupon
    coupon.setSelectionRange(0,999999) //การหนดช่วงการ Copy
    navigator.clipboard.writeText(coupon.value) //copy ไว้ใน คลิปบอร์ด
    btn.textContent = "คัดลอกคูปองเรียบร้อย!"
    setTimeout(()=>{ // หน่วงเวลาให้ค่ากลับไปเหมือนเดิม
        btn.textContent = "คัดลอก"
    },3000)
})