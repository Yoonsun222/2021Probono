import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Alert, Image } from 'react-native';
import { Container, Content, Text, Form, Button } from 'native-base';
import ItemInput from '../components/ItemInput';
import { signIn } from '../config/firebaseFunctions';

export default function SignInPage({ navigation, authState }) {
  console.disableYellowBox = true;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const doSignIn = () => {
    //Email 로그인 버튼을 누를 때 실행되는 함수
    if (email == '') {
      setEmailError('이메일을 입력해주세요');
      return false;
    } else {
      setEmailError('');
    }

    if (password == '') {
      setPasswordError('비밀번호를 입력해주세요');
      return false;
    } else {
      setPasswordError('');
    }

    signIn(email, password, navigation);
  };
  const setEmailFunc = (itemInputEmail) => {
    //이메일 상태값을 관리하는 함수
    setEmail(itemInputEmail);
  };
  const setPasswordFunc = (itemInputPassword) => {
    //패스워드 상태값을 관리하는 함수
    setPassword(itemInputPassword);
  };

  const goSignUp = () => {
    navigation.navigate('SignUpPage');
  };

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content} scrollEnabled={false}>
        <Text style={styles.title}>
          <Image
            style={styles.loginImage}
            source={{
              uri: 'https://www.hanium.or.kr/2020/images/icon_logo.jpg',
            }}
          />
          <Text style={styles.highlite}>독거노인 비대면 일일 안부 서비스</Text>
        </Text>
        <Form style={styles.form}>
          <ItemInput
            title={'이메일'}
            type={'email'}
            setFunc={setEmailFunc}
            error={emailError}
          />
          <ItemInput
            title={'비밀번호'}
            type={'password'}
            setFunc={setPasswordFunc}
            error={passwordError}
          />
        </Form>
        <Button full style={styles.emailSignIn} onPress={doSignIn}>
          <Text>로그인</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  highlite: {
    fontSize: 23,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  form: {
    width: 250,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  loginImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  snsSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#4667A5',
  },
  emailSignIn: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#333',
  },
  emailSignUp: {
    alignSelf: 'center',
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#333',
  },
});
