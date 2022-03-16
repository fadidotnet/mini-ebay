
import { checkVisibility, tapWithTimeout, detoxStart } from '../methods/detoxMethods';
import { by, element, device, } from 'detox';

const waitToNavigate = duration => new Promise(resolve => setTimeout(() => resolve(), duration));

export const signInScreenTests = () => {

    detoxStart('Login Screen, Sign In Text Visible', 'Login_SignInText')

    checkVisibility('Email Text Input Visible', 'Login_EmailTextInput')

    checkVisibility('Icon on Email Text Input Visible', 'Login_EmailIcon')

    it('Type Wrong Email', async () => {
        await element(by.id('Login_EmailTextInput')).tap();
        await element(by.id('Login_EmailTextInput')).replaceText("fahad123");
        await waitToNavigate(1000);
        await device.pressBack()
    });

    tapWithTimeout('Tap on Sign In Button', 'Login_SignInButton', 3000)

    checkVisibility('Invalid Email Error Visible', 'Login_EmailError')

    checkVisibility('Password Text Input Visible', 'Login_PasswordTextInput')

    checkVisibility('Icon on Password Text Input Visible', 'Login_PasswordIcon')

    it('Type Wrong Password', async () => {
        await element(by.id('Login_PasswordTextInput')).tap();
        await element(by.id('Login_PasswordTextInput')).replaceText("fah");
        await waitToNavigate(1000);
        await device.pressBack()
    });
    tapWithTimeout('Tap on Sign In Button', 'Login_SignInButton', 3000)

    checkVisibility('Invalid Password Error Visible', 'Login_PasswordError')

    it('Type valid email and password for Login ', async () => {
        await element(by.id('Login_EmailTextInput')).tap();
        await element(by.id('Login_EmailTextInput')).replaceText("fahad1@gmail.com");
        await waitToNavigate(1000);
        await device.pressBack()
        await element(by.id('Login_PasswordTextInput')).tap();
        await element(by.id('Login_PasswordTextInput')).replaceText("1234567");
        await waitToNavigate(1000);
        await device.pressBack()
    });

    checkVisibility('Sign In Button Visible', 'Login_SignInButton')

    tapWithTimeout('Tap on Register Button to navigate to Register Screen', 'Login_RegisterText', 3000)

}
