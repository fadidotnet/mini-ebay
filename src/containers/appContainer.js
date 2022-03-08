import React, { useState } from 'react';
import CreateRootNavigator from "../routes";
import { connect } from 'react-redux';

const AppContainer = props => {

  const [signedIn, setSignedIn] = useState(true)
  const [isOnboarding, setIsOnboarding] = useState(true)


  if (props.isLogin) {
    return (<CreateRootNavigator signedIn={props.isLogin} isOnboarding={isOnboarding} />);
  }
  if (signedIn == null || isOnboarding == null ) {
    return (null)
  }
  else {
    return (
      <CreateRootNavigator signedIn={signedIn} isOnboarding={isOnboarding} />);
  }
}

export default AppContainer;
