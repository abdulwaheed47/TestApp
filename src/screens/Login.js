import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../assets/Images';
import TextField from '../components/TextInput';
import Button from '../components/Button';

const Login = ({navigation}) => {
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
        Welcome back
      </Text>
      <View style={{marginTop: 20, marginVertical: 5}}>
        <TextField placeholder="Email Address" />
        <TextField placeholder="Password" />
        <TouchableOpacity
          style={{alignSelf: 'flex-end', padding: 5}}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{color: '#323232', fontSize: 14, fontWeight: '400'}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Button btnStyle={{marginTop: 40}} buttonText="Login" />
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#9DA1A1',
            width: 67,
            right: 8,
          }}></View>
        <Text style={{color: '#323232', fontSize: 14, fontWeight: '800'}}>
          Or continue with
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#9DA1A1',
            width: 67,
            left: 8,
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity>
          <Image
            source={Images.google}
            style={{height: 80, width: 80}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.apple}
            style={{height: 80, width: 80}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.facebook}
            style={{height: 80, width: 80}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text style={{color: '#323232', fontSize: 12, fontWeight: '400'}}>
          Continue with Google, Apple or Facebook, you agree to Recess go
        </Text>
        <Text
          style={{
            color: '#323232',
            fontSize: 12,
            fontWeight: '800',
            bottom: 14,
            left: 65,
          }}>
          Terms and Conditions & Privacy Policy
        </Text>
      </View>
      <View
        style={{
          marginBottom: 10,
          justifyContent: 'center',
          alignSelf: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <Text style={{color: '#323232', fontSize: 14, fontWeight: '400'}}>
            Not a member?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text
            style={{
              color: '#129D49',
              fontSize: 14,
              fontWeight: '800',
              left: 5,
            }}>
            Sign up now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Login;
