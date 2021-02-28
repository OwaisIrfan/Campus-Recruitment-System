import React from 'react';
import {

  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './src/screen/Splash';
import Splashhome from './src/screen/Splashhome';
import Login from './src/screen/Login';
import Signup from './src/screen/Signup';
import student from './src/screen/student/student'
import company from './src/screen/company/company'
import admin from './src/screen/admin/admin'

const Stack = createStackNavigator();

function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: 63, elevation: 6, },
        cardStyle: { backgroundColor: '#fff' }, headerTitleStyle: { fontFamily: 'ProductSansBold', marginLeft: 6 }
      }}>

        <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen options= {{title: 'Home',headerLeft: null }} name="student" component={student} />
        
        <Stack.Screen options= {{title: 'Home', headerLeft: null }} name="admin" component={admin} />
        
        <Stack.Screen options= {{title: 'Home',headerLeft: null }} name="company" component={company} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="Splashhome" component={Splashhome} />

      </Stack.Navigator>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({

});

export default App;
