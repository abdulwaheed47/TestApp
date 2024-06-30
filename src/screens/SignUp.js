import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../assets/Images';
import TextField from '../components/TextInput';
import Button from '../components/Button';
import PhoneInput from 'react-native-phone-number-input';

const SignUp = ({navigation}) => {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
      <Image
        resizeMode="contain"
        source={Images.logo}
        style={{
          height: 85,
          width: 283,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
      <Text style={{color: '#323232', fontSize: 14, fontWeight: '400'}}>
        Hello there,
      </Text>
      <Text style={{color: '#129D49', fontSize: 26, fontWeight: '600'}}>
        Please Register
      </Text>
      <View style={{marginTop: 20, marginVertical: 5}}>
        <TextField placeholder="First Name" />
        <TextField placeholder="Last Name" />
        <TextField placeholder="Email Address" />
        <PhoneInput
          defaultCode="DM"
          layout="first"
          containerStyle={{
            marginTop: 10,
            width: '100%',
            height: 48,
            fontSize: 12,
            padding: 5,
            paddingLeft: 10,
            color: 'black',
            borderRadius: 10,
            borderColor: '#D6D6D6',
            borderWidth: 1,
            backgroundColor: '#F3F3F3',
          }}
        />
        <TextField placeholder="New Password" />
        <TextField placeholder="Confirm Password" />
        <Button btnStyle={{marginTop: 40}} buttonText="Register" />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: 'gray',
            marginRight: 5,
          }}></View>
        <Text style={{}}>
          Agree to Recess Go Terms and Conditions & Privacy Policy
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Text style={{color: '#323232', fontSize: 14, fontWeight: '400'}}>
            Already a member?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text
            style={{
              color: '#129D49',
              fontSize: 14,
              fontWeight: '800',
              left: 5,
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default SignUp;
