export const formValidation = (data) => {
    const errors = [];
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if(data.password != data.passwordConfirm) {
        errors.push("Password doesn't match");
    }

    if(!urlRegex.test(data.image)) {
        errors.push("Invalid image Url");
    }
}