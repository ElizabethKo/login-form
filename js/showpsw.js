export default class Showpsw {
    showPassword(input){
        if (input.getAttribute("type")==="password") {
            input.setAttribute("type","text")
        }

    }
    hidePassword(input){
        input.setAttribute("type","password")
    }
}
