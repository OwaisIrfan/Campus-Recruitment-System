
import React, { Component } from 'react';


import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';



const Signup = ({ navigation }) => {
  const [textInputName, setTextInputName] = React.useState('');
  const [textInputEmail, setTextInputEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');

  const checkTextInput = () => {

    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }

    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }

    navigation.replace('Splashhome');



  };

  const company = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please also enter Email');
      return;
    }
    if (!Password.trim()) {
      alert('Please enter Password');
      return;
    }
    if (!ConfirmPassword.trim()) {
      alert('Please enter confirm Password');
      return;
    }

    navigation.replace('Splashcompany');
  };
  const admin = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!Password.trim()) {
      alert('Please enter Password');
      return;
    }
    if (!ConfirmPassword.trim()) {
      alert('Please enter confirm Password');
      return;
    }
    navigation.replace('Splashadmin');
  };
  const student = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!Password.trim()) {
      alert('Please enter Password');
      return;
    }
    if (!ConfirmPassword.trim()) {
      alert('Please enter confirm Password');
      return;
    }
    navigation.replace('Splashstudent');
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{
          flex: 1,
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20
        }}>
          <View style={styles.nmjijiqwig} >
            <TextInput
              placeholder="Name"
              onChangeText={
                (value) => setTextInputName(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            />
          </View>

          <View style={styles.nmjijiqwig} >
            <TextInput
              autoCapitalize='none'
              placeholder="Email"
              keyboardType={'email-address'}
              onChangeText={
                (value) => setTextInputEmail(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            /></View>

          <View style={styles.nmjijiqwig} >
            <TextInput
              secureTextEntry={true}
              autoCapitalize='none'
              placeholder="Password"
              onChangeText={
                (value) => setPassword(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            /></View>

          <View style={styles.nmjijiqwig} >
            <TextInput
              autoCapitalize='none'
              secureTextEntry={true}
              placeholder="Confirm Password"
              onChangeText={
                (value) => setConfirmPassword(value)
              }
              underlineColorAndroid="transparent"
              style={styles.vsbfbsvhje}
            /></View>



          <View style={[styles.njadvsngfn, { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10, marginBottom: -10 }]}>
            <Text style={[styles.jwvnvnm, { fontSize: 15, marginTop: 10, fontFamily: 'ProductSansRegular' }]}>Sign up as:</Text>

          </View>
          <View style={styles.nhjunhjunj}>

            <TouchableOpacity onPress={admin} activeOpacity={0.5} style={styles.dfnjdebndev}>
              <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 16, fontFamily: 'ProductSansRegular' }]}>Admin</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={student} activeOpacity={0.5} style={styles.dfnjdebndev}>
              <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 16, fontFamily: 'ProductSansRegular' }]}>Student</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={company} activeOpacity={0.5} style={styles.dfnjdebndev}>
              <Text style={[styles.jwvnvnm, { color: 'white', fontSize: 16, fontFamily: 'ProductSansRegular' }]}>Company</Text>
            </TouchableOpacity>

          </View>

          <View style={[styles.njadvsngfn, { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 30 }]}>
            <Text style={[styles.jwvnvnm, { fontSize: 13, marginTop: 10, fontFamily: 'ProductSansRegular' }]}>Already have an Account?</Text>
            <TouchableOpacity onPress={() => {

              navigation.navigate('Login');
            }} >
              <Text style={[styles.jwvnvnm, { fontSize: 13, marginTop: 10, color: '#75cfb8', fontFamily: 'ProductSansRegular' }]}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
  vsbfbsvhje: {
    height: 50,
    width: '100%',
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 18,
    paddingTop: 13,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#000",
    elevation: 4,
    fontSize: 18,
    fontFamily: 'ProductSansRegular'
  },
  dfnjdebndev: {
    backgroundColor: '#8f4068',
    borderWidth: 0,
    width: 90,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 5,

  },
  nmjijiqwig: {
    width: '90%',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 2,
    marginTop: 2,

  },
  njadvsngfn: {
    flex: 1,
    alignItems: 'flex-end',

    marginBottom: 5,
    width: '100%',
    paddingHorizontal: 30
  },
  jwvnvnm: {
    fontSize: 18,
    marginLeft: 5,
    color: '#5b5b5b',
    fontFamily: 'ProductSansRegular'
  },
  nhjunhjunj: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
});

export default Signup;