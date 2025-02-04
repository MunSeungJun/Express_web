const loginForm = document.querySelector("#user_login_form")
        loginForm.addEventListener("submit", (e)=>{
            const userId = document.querySelector("#user_id").value
            const userPw = document.querySelector("#user_pw").value
            e.preventDefault();
            if(userId === "admin" && userPw === "admin1234" ) {
                alert("로그인 되었습니다")
            } else {
                alert("아이디 비밀번호가 틀립니다")
            }
        })