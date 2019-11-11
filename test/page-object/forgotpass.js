class FORGOTPASSWORD{
    get intitle(){return $('head > title');}
    get signIn(){return $('.login');}
    get forgotlink(){return $('.lost_password form-group')}
    get PassEmail(){return $('#email')}
    get passBtn(){return $('.btn btn-default button button-medium')}



    submit(){
        this.forgotlink.click()
    }

    submit(){
        this.passBtn.click()
    }
}

export default new FORGOTPASSWORD()