//제출 이벤트를 받는다
const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault() //기존기능차단

    let userID = event.target.id.value
    let userPW1 = event.target.pw1.value
    let userPW2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userIntro = event.target.intro.value

    if(userID.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
        return 
    }

    if(userPW1 !== userPW2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }


    document.body.innerHTML = "";
    document.write(`<p>${userID}님 환영합니다</p>`)

})

//제출된 입력값들을 참조

//입력값에 문제가 있는 경우 이를 감지
//아이디가 너무 짧은 경우
//비번이랑 확인이 일치하는가

//가입환영 인사를 제공
//님 환영합니다
//아이디
//이름
//전화번호
//직무 나오게끔
