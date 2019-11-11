import LoginPage from '../page-object/auth';
import NavSection from '../page-object/Nav';

describe('Login section',() =>{
    xit('verify Url', () =>{
        browser.url('');
        expect(browser.getTitle()).toEqual('My Store');
        
    })

    it('click on login', () =>{
        browser.url('');
        NavSection.signIn('');
        expect(browser.getTitle()).toEqual('Login - My Store')
        
    })

    it('email should be required',()=>{
        browser.url('');
        NavSection.signIn('');
        LoginPage.submit('');
        expect(LoginPage.getErrorMessage()).toEqual('And email address is required.')
    })

    it('password should be required',() =>{
        browser.url('');
        NavSection.signIn('');
        LoginPage.email.setValue('')
        LoginPage.submit('');
        expect(LoginPage.getErrorMessage()).toEqual('Password is required.')
    })
})

    










