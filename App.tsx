import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './SRC/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
