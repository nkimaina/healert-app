import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import IntroSlider from './screens/Intro';
import { checkIfFirstLaunch, setAppLaunched } from './utils/FirstLaunch';

const App = () => {
  const [firstLaunch, setFirstLaunch] = React.useState<string>();

  checkIfFirstLaunch().then((launched) => {
    setFirstLaunch(launched)
  });

  return <NavigationContainer>
    <IntroSlider _onDone={setAppLaunched} /> 
  </NavigationContainer>
};

export default App;