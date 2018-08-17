import LoginPage from '../pageobjects/login.page';
import reporter from 'wdio-allure-reporter'

var expect = require('chai').expect;
import { Given, When, Then } from 'cucumber';
import excelReader from '../helper/excelreader'


Given(/^Open the LoginPage$/, function () {
    LoginPage.open();
    browser.getTitle().should.equal('Login | 7P');
});

When(/^enter "([^"]*)" and "([^"]*)" and click login button$/, (username, password) => {
    LoginPage.username.setValue(username);
    LoginPage.password.setValue(password);
    LoginPage.submit();
});

Then(/^user logged in successful and admin name "([^"]*)" is visible$/, (username) => {

    LoginPage.closeLoginPopup();
    expect(LoginPage.userID.getText()).to.contain(username);
});