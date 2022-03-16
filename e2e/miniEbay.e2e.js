import {signInScreenTests} from './screens/signInScreenTests'
import {signUpScreenTests} from './screens/signUpScreenTests'

describe('Mini E-bay Flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  signInScreenTests() 
  
  signUpScreenTests()
});
