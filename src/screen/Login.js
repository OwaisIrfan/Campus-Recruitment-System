import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [textInputName, setTextInputName] = React.useState('');
  const [textInputEmail, setTextInputEmail] = React.useState('');
  

  const company = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please also enter Email');
      return;
    }
    
    navigation.replace('Splashcompany');
  };
  const admin = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Password');
      return;
    }
    navigation.replace('Splashadmin');
  };
  const student = () => {
    if (!textInputName.trim()) {
      alert('Please Enter Email');
      return;
    }
    if (!textInputEmail.trim()) {
      alert('Please Enter Password');
      return;
    }
    navigation.replace('Splashstudent');
  };


  return (
    <ScrollView>
      <View style={{
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <LottieView
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#fff',
          }}
          source={require('../../assets/working.json')}
          autoPlay
          loop={true}
          speed={0.8}

        />
        <Text style={[styles.jwvnvnm, { fontSize: 25, marginTop: 10, fontFamily: 'ProductSansBold' }]}>Welcome Back!</Text>
        <View style={styles.nmjijiqwig} >

          <TextInput

            onChangeText={
              (value) => setTextInputName(value)
            }
            keyboardType={'email-address'} autoCapitalize='none' style={styles.vsbfbsvhje} placeholder="Enter Your Email" />
        </View>
        
        <View style={styles.nmjijiqwig} >

          <TextInput onChangeText={(value) => setTextInputEmail(value)} secureTextEntry={true} style={styles.vsbfbsvhje} placeholder="Enter Your Password" />
        
        </View>
        <View style={styles.njadvsngfn}>

          <TouchableOpacity>
            <Text style={[styles.jwvnvnm, { fontSize: 13, marginTop: 10, fontFamily: 'ProductSansRegular' }]}>Forgot Password?</Text>
          </TouchableOpacity>

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
          <Text style={[styles.jwvnvnm, { fontSize: 13, marginTop: 10, fontFamily: 'ProductSansRegular' }]}>Dont have an Account?</Text>
          <TouchableOpacity onPress={() => {

            navigation.navigate('Signup');
          }} >
            <Text style={[styles.jwvnvnm, { fontSize: 13, marginTop: 10, color: '#75cfb8', fontFamily: 'ProductSansRegular' }]}>Sign up</Text>
          </TouchableOpacity>
        </View>



      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  nhjunhjunj:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
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
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: -5,
    marginTop: 0,

  },
  jwvnvnm: {
    fontSize: 18,
    marginLeft: 5,
    color: '#5b5b5b',
    fontFamily: 'ProductSansRegular'
  },
  vsbfbsvhje: {
    height: 50,
    width: '100%',
    borderRadius: 30,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingTop: 13,
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "#000",
    elevation: 4,
    fontSize: 16,
    fontFamily: 'ProductSansRegular'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  button: {
    width: '70%',
    height: 45,
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  njadvsngfn: {
    flex: 1,
    alignItems: 'flex-end',

    marginBottom: 5,
    width: '100%',
    paddingHorizontal: 30
  },
});

export default Login;
