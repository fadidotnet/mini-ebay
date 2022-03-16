
import { by, element, expect, device, } from 'detox';

const waitToNavigate = duration => new Promise(resolve => setTimeout(() => resolve(), duration));

export const detoxStart = (message, id) => {
   it(message, async () => {
       await device.reloadReactNative();
       await waitToNavigate(5000)
       await expect(element(by.id(id))).toBeVisible();
   });
}

export const checkVisibility = (message, id) => {
   it(message, async () => {
       await expect(element(by.id(id))).toBeVisible();
   });
}

export const checkVisibilityByText = (message, text) => {
   it(message, async () => {
       await expect(element(by.text(text))).toBeVisible();
   });
}

export const checkInVisibility = (message, id) => {
   it(message, async () => {
       await expect(element(by.id(id))).not.toBeVisible();
   });
}

export const checkVisibilityWithTimeout = (message, id, timeout) => {
   it(message, async () => {
       await waitToNavigate(timeout)
       await expect(element(by.id(id))).toBeVisible();
   });
}

export const tapWithTimeout = (message, id, timeout) =>{
   it(message, async () => {
       await element(by.id(id)).tap();
       await element(by.id(id)).tap();
       await waitToNavigate(timeout);
   });
}

export const androidBackWithTimeout = (message,timeout) =>{
   it(message, async () => {
       await waitToNavigate(timeout)
       await device.pressBack();
   });
}
