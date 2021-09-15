import Validator from './js/validator.js';
import Showpsw from './js/showpsw.js';
import {Config} from './config/default.js';

const validator = new Validator();
const showPsw = new Showpsw();

let email = document.getElementById('forEmail');
const form = document.getElementById('form');
let psw = document.getElementById('pwd');
let emailError = document.getElementById('emailerror');
let passwordError = document.getElementById('pswerror');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailError.innerHTML='';
    passwordError.innerHTML='';

    let result = validator.validateEmail(email.value)
    if (result !== "") {
        emailError.innerHTML = result
    }
    let result2 = validator.validatePassword(psw.value)
    if (result2.length > 0) {
        passwordError.innerHTML = result2.join("; ");
    }
    if (result !== "" || result2.length >0){
        return
    }

    let response = (async () => {
        try {
            const resp =  await fetch(Config.uri, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                }),
                body: JSON.stringify({
                    token: Config.token,
                    data: {
                        dateToday: "dateToday",
                        email: email.value,
                        password: psw.value,
                    }
                })
            })
           return await resp.json()
        } catch (error) {
        }
    })()
   response.then(value => console.log(value))
});


const btn = document.querySelector('.eyebtn');

btn.addEventListener("click", () => {
    const input = document.querySelector('.eyepsw');
    btn.classList.toggle('active')
    if (btn.classList.contains('active')) {
        showPsw.hidePassword(input);
    } else {
        showPsw.showPassword(input);
    }
})
