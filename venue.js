let m = document.querySelector(".page1");
let v = document.querySelector("#venue");
let vv = document.querySelector(".venues");
let ven = document.querySelector("#vendors");
let ve = document.querySelector(".vendors");

m.addEventListener("click",function(){
    vv.style.display = "none"
    ve.style.display = "none"
})

v.addEventListener("click",function(){
    vv.style.display = "flex"
    ve.style.display = "none"
})
ven.addEventListener("click",function(){
    ve.style.display = "flex"
    vv.style.display = "none"
})
