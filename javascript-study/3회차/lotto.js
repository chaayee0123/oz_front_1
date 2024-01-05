
const todayspan = document.querySelector("#today")
const numbersdiv = document.querySelector(".numbers")
const drawbutton = document.querySelector("#draw")
const resetbutton = document.querySelector("#reset")

let lottoNumbers = [];

const today = new Date()
let year = today.getFullYear()
let month = today.getMonth()+1
let date = today.getDate()
todayspan.textContent = `${year}년 ${month}월 ${date}일 `


function paintNumber(number){
    const eachNumdiv = document.createElement("div");
    eachNumdiv.classList.add("eachnum");
    eachNumdiv.textContent = number;
    numbersdiv.append(eachNumdiv);
}


drawbutton.addEventListener("click", function(){
    while(lottoNumbers.length < 6) {
        let rn = Math.floor(Math.random() * 45) +1;

        if(lottoNumbers.indexOf(rn) === -1){
        lottoNumbers.push(rn);
        paintNumber(rn);
    }
    }
})

resetbutton.addEventListener("click", function(){
    lottoNumbers.splice(0,6)
    numbersdiv.innerHTML = "";
})