import createAccount from '../page-object/auth';
import { create } from 'domain';


describe('second suit', () => {
    xit('create account', () => {
        browser.url('');
        createAccount.submit('.login');
        createAccount.login.submit('.login');
        createAccount.emailadd.setValue('jennifer@gmail.com');
        createAccount.submitbtn.submit('#SubmitCreate');
        expect(title).toEqual('Login - My Store');
})
    it ("complete fields",() =>{
        browser.url('');
        NavSection.signIn('')
        createAccount.emailadd.setValue('');
        createAccount.submitbtn('');
        createAccount.customertName.setValue('');
        createAccount.customerlastName.setValue('');
        createAccount.email.setvalue('');
        createAccount.pass.setvalue('');
        createAccount.firstName.setValue('');
        createAccount.lastName.setValue('');
        createAccount.Address.setValue('');
        createAccount.City.setValue('');
        createAccount.selectState.setValue('');
        createAccount.postcode.setValue('');
        createAccount.country.setValue('');
        createAccount.mobilePhone.setValue('');
        createAccount.Alias.setValue('');
        createAccount.registerBtn('');
        expect(browser.getTitle()).toEqual('My Account - My Store');
        expect(createAccount.viewMyAccount.getText()).toEqual(firstName + ' ' +lastName);
})

})