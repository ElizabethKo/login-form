
let email = document.getElementById('forEmail');
const form = document.getElementById('form');
let emailCheck = new RegExp(/^[A-Za-z0-9_]{3,30}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/);


form.addEventListener('submit', (e) => {
    e.preventDefault();

if (email.value === "") {
    document.getElementById('emailerror').innerHTML = "Sorry, we need Your email";
}else if(!emailCheck.test(email.value)) {
    document.getElementById('emailerror').innerHTML = "Please enter a valid email";
}


});
/*hide and show password*/
function showPassword() {
    const btn = document.querySelector('.eyebtn');
    const input = document.querySelector('.eyepsw');
    btn.addEventListener("click", () => {
        btn.classList.toggle('active')

        if (input.getAttribute("type")==="password") {
            input.setAttribute("type","text")
        }else {
            input.setAttribute("type","password")

        }
    })

}
