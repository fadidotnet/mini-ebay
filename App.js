import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import configureStore from './src/config-store';
import AppContainer from './src/containers/appContainer';
import appStyles from './src/helper/appStyles';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <SafeAreaProvider style={appStyles.Main}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
          />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
