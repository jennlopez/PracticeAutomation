class NavSection{
   get intitle(){return $('head > title');}
   get signIn(){return $('.login');}
   get signOut(){return $('.logout');}


    submit() {
        this.signIn.click('') 
    }
    submit(){
        this.signOut.click('')
    }
}
export default new NavSection()