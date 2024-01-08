const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllbreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const resetBtn = document.getElementById("reset-button")

const currentDogs = []

function displayDogs(item){
    const dogImgDiv = document.createElement("div")
    dogImgDiv.classList.add("flex-item")
    dogImgDiv.innerHTML = `
    <img src=${item}>`
    main.appendChild(dogImgDiv)
}

window.addEventListener("load", function(){

    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
        });
        request1.send()

        request2.open("get", apiAllbreeds)
        request2.addEventListener("load", function(){
            const response = JSON.parse(request2.response)
            Object.keys(response.message).forEach(function(item){
                const option = document.createElement("option")
                option.textContent = item
                option.value = item
                select.appendChild(option)
            });
        })
        request2.send()

    })

button.addEventListener('click', function(){
    main.innerHTML = ""
    let filteredDogs =  currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
    })

    input.value = ""

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})

select.addEventListener('change', function(){
    main.innerHTML = ""
    let filteredDogs =  currentDogs.filter(function(item){
        return item.indexOf(select.value) !== -1
    })

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})

more.addEventListener('click', function(){
    request1.open('get', apiRandomDogs)
    request1.addEventListener('load',function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
    })
    request1.send()
}) 

tothetop.addEventListener('click', function(){
    window.scrollTo({  top: 0 })
})
//견종 고르는 select옆에 버튼 추가
//버튼엔 리셋 - 해단 버튼 누르면 42마리의 소스를 새롭게 요청 받아옴
//새로고침없이 원래 강아지는 없어지고 새로운 강아지 42마리 채우기
resetBtn.addEventListener('click', function(){
    main.innerHTML = ""
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        })
     })
        request1.send()
})