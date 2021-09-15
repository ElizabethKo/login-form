const emailCheck = new RegExp(/^[A-Za-z0-9_]{3,30}@[A-Za-z]{3,}[.][A-Za-z.]{2,6}$/);
const checkList = {
    numbers: {
        error: "must contain numbers",
        regexp: /[0-9]/
    },
    lower: {
        error: "must contain lower case letters",
        regexp: /[a-z]/
    }
}

export default class Validator {

    validateEmail(email) {
        if (email === "") {
            return "Sorry, we need Your email";
        } else if (!emailCheck.test(email)) {
            return "Please enter a valid email";
        }
        return "";
    }

    validatePassword(password) {
        let errors = []
        for (let key in checkList) {
            if ((new RegExp(checkList[key].regexp).test(password)) === false){
                errors.push(checkList[key].error)
            }
        }
        return errors;
    }
}