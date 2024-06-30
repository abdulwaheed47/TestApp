import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Images from '../assets/Images';
import TextField from '../components/TextInput';
import Button from '../components/Button';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
      <Text style={{color: '#129D49', fontSize: 26, fontWeight: '600'}}>
        Forget Password
      </Text>
      <Text style={{color: '#323232', fontSize: 14, fontWeight: '400'}}>
        In order to reset your password you need to enter your email address.
      </Text>
      <View style={{marginTop: 30, marginVertical: 5}}>
        <TextField placeholder="Email Address" />
        <View
          style={{
            marginTop: 100,
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Text style={{color: '#323232', fontSize: 14, fontWeight: '400'}}>
            Don’t have email? Verify by 
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
            Number
            </Text>
          </TouchableOpacity>
        </View>

        <Button btnStyle={{marginTop: 40}} buttonText="Continue" />
      </View>
    </View>
  );
};
export default ForgotPassword;
