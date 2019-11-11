class LoginPage{
    get email() { return $('#email') }
    get password() { return $('#passwd') }
    get Login() { return $('#Submitlogin') }
    get validationMessage(){return $('.alert-danger li')}


    submit() {
        this.Login.click()
    }

    getErrorMessage(){
    return this.validationMessage.getText()
    }

}
export default new LoginPage()