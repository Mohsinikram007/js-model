let model = document.querySelector(".model")
let sh = document.querySelector(".show");
let cl = document.querySelector(".close");

window.addEventListener('load' ,close);
 function close()
 {
    model.style.display ="none";
    model.classList.remove("sho")
    sh.style.display = "block"
    
 }



 sh.addEventListener('click', show);
 cl.addEventListener('click',close);
 function show()
 {
    model.style.display ="flex";
    model.classList.add("sho")
    sh.style.display = "none"
 }
