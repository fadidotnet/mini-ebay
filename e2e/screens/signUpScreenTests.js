
import { checkVisibility,androidBackWithTimeout, tapWithTimeout } from '../methods/detoxMethods';

export const signUpScreenTests = () => {

    checkVisibility('Sign Up Screen, Sign Up Text Visible','Register_SignUpText')

    checkVisibility('Name Text Input Visible','Signup_NameTextInput')

    checkVisibility('Icon on Name Text Input Visible','Signup_NameIcon')
    
    checkVisibility('Email Text Input Visible','Signup_EmailTextInput')

    checkVisibility('Icon on Email Text Input Visible','Signup_EmailIcon')

    checkVisibility('Password Text Input Visible','Signup_PasswordTextInput')

    checkVisibility('Icon on Password Text Input Visible','Signup_PasswordIcon')

    checkVisibility('Sign Up Button Visible','Signup_Button')

    checkVisibility('Already Have An Account Visible','Signup_AlreadyText')

    androidBackWithTimeout('Use android Back Button to navigate to sign in screen again',3000)

    tapWithTimeout('Tap on Sign In Button to sign in the app and navigate to Feed Screen','Login_SignInButton',10000)

}
