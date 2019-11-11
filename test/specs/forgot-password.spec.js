import FORGOTPASSWORD from '../page-object/forgotpass';
import NavSection from '../page-object/Nav';

describe('third suit',()=> {
    it('password forgot',()=>{
        browser.url('');
        FORGOTPASSWORD.signIn('');
        FORGOTPASSWORD.forgotlink.submit('.lost_password form-group');
        expect(title).toEqual('Forgot your password - My Store');

    })

    it('enter email address you used to register')
    browser.url('');
    FORGOTPASSWORD.signIn('');
    FORGOTPASSWORD.forgotlink.submit('.lost_password form-group');
    FORGOTPASSWORD.PassEmail.setValue('#email');
    FORGOTPASSWORD.passBtn.submit('.btn btn-default button button-medium')
    expect(FORGOTPASSWORD.getErrorMessage()).toEqual('Invalid email address.')

})

