// login.page.js
import Page from './page';

class LoginPage extends Page {

    get username()  { return browser.element('//*[@name="username"]'); }
    get password()  { return browser.element('//*[@name="password"]'); }
    get form()      { return browser.element('//button[contains(., "Login")]'); }
    get flash()     { return browser.element('//*[@class="modal-body"]'); }
    get ok()     { return browser.element('//button[contains(., "OK")]'); }
    get userID() { return browser.element('//*[@class="adminName seconderyColorOnly"]');}
    
    open() {
        super.open('');
        console.log("open the server instance");
    }

    submit() {
        this.form.click();
        console.log('clicked on login button');
    }

    closeLoginPopup(){
        this.flash.waitForVisible(5000);
        browser.keys('ESC')
    }
}

export default new LoginPage();