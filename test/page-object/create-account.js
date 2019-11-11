class createAccount{
    get Login() { return $('.login')}
    get emailadd() {return $('#email_create')}
    get submitbtn() {return $('#SubmitCreate')}
    get customerName(){return $('#customer_firstname')}
    get customerLastname(){return $('#customer_lastname')}
    get email(){return $('#email')}
    get pass(){return $('#passwd')}
    get firstName(){return $('#firstname')}
    get lastName(){return $('lastname')}
    get Address(){return $('#address1')}
    get City(){return $('#city')}
    get selectState(){return $('#id_state')}
    get postcode(){return $('#postcode')}
    get country(){return $('#id_country')}
    get mobilePhone(){return $('#phone_mobile')}
    get Alias(){return $('#alias')}
    get registerBtn(){return $('#submitAccount')}

    
    open() {
        super.open('login')
    }

    submit(){
        this.submitbtn.click()
    }

    submit(){
        this.registerBtn.click()
    }

}
export default new createAccount()


