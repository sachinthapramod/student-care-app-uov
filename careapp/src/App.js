import React, {useState } from "react";
import {createaStackNavigator} from '@react-navigation/stack';
import {NavigationContainer } from '@react-navigation/native';
import {paperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function App() {
  const [use , setUser] = useState(null);
  return (
    <SafeAreaProvider>
      <paperProvider>
        <NavigationContainer>
          
        </NavigationContainer>
      </paperProvider>
    </SafeAreaProvider>
  );
}

export default App;
