//  const form = document.querySelector("form"),
//          nextBtn = form.querySelector(".nextBtn"),
//          backBtn = form.querySelector(".backBtn"),
//          allInput = form.querySelector(".first input");

//  nextBtn.addEventListener("click", ()=>{
//      allInput.forEach(input => {
//          if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//             alert("input is empty")
//       }
//   })

//  })

// backBtn.addEventListener("click",() => form.classList.remove('secActive'));


const form = document.querySelector(".form"),
nextBtn = document.querySelector(".nextBtn"),
backBtn = document.querySelector(".backBtn"),
allInput = document.querySelectorAll(".first input");
console.log(allInput);
const firstForm = document.querySelector(".first");
const secondForm = document.querySelector(".second");
console.log(firstForm);
console.log(secondForm);

nextBtn.addEventListener("click", ()=>{
    let isValid = true ;
allInput.forEach(input => {
    console.log(input.value);
if (input.value.trim() === ""){
    alert("Please Fill Every Field");
    let isValid = false ;
    return;
}
});
if (isValid){
    firstForm.classList.add('secActive');
    firstForm.style.transform = "translateX(-100%)";
    secondForm.classList.add("secActive");
    secondForm.style.opacity = "1";
    secondForm.style.transform = "translateX(0%)";
}
});

backBtn.addEventListener("click",() => {
    firstForm.classList.add('secActive');
    secondForm.classList.add("secActive");
});

 

 
