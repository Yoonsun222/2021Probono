import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
  Thumbnail,
  Item,
  Input,
  Form,
  Textarea,
} from 'native-base';
import style from 'react-native-image-blur-loading/src/style';
const imageWidth = Dimensions.get('window').width / 3;

import * as firebase from 'firebase';
import 'firebase/firestore';
import HeadPage from './HeadPage';

import { addDiary } from '../config/firebaseFunctions';

const tempImage =
  'https://firebasestorage.googleapis.com/v0/b/sparta-study-plus.appspot.com/o/lecture%2F6-min.png?alt=media&token=bbc87679-4084-40ad-b6cd-01e808983fa4';

export default function VistedPage({ navigation }) {
  console.disableYellowBox = true;

  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');

  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');

  const [image, setImage] = useState(tempImage);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('게시글을 업로드하려면 사진첩 권한이 필요합니다.');
      }
    }
  };

  const upload = async () => {
    console.log('업로드 준비중!');
    const currentUser = firebase.auth().currentUser;
    let date = new Date();
    let data = {
      title: title,
      author: currentUser.email,
      desc: content,
      image: image,
      date: date.getTime(),
      uid: currentUser.uid,
    };

    let result = addDiary(data);
    if (result) {
      Alert('글이 성공적으로 등록되었습니다!');
    }
  };

  return (
    <Container>
      <HeadPage></HeadPage>
      <Content>
        <Text
          style={{
            margin: 20,
            padding: 10,
            alignSelf: 'center',
            color: 'grey',
            fontSize: 20,
            borderBottomWidth: 2,
            borderColor: 'grey',
            marginLeft: 1,
          }}
        >
          방문일지 기록
        </Text>
        <Item regular style={styles.title}>
          <Input
            placeholder="날짜를 입력해 주세요!! ( 20XX.XX.XX )"
            style={{ fontSize: 13 }}
            onChangeText={(text) => setTitle(text)}
          />
        </Item>
        <Form style={styles.contentLayout}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="내용을 입력해주세요"
            style={styles.content}
            onChangeText={(text) => setContent(text)}
          />
        </Form>
        <Button full style={styles.uploadButton} onPress={() => upload()}>
          <Text>등록</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
    borderStyle: 'dashed',
    width: '90%',
    height: 200,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  imageUploadPlus: {
    textAlign: 'center',
    width: '100%',
    fontSize: 90,
    fontWeight: '300',
    color: 'grey',
  },
  title: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  content: { borderRadius: 10, fontSize: 13 },
  uploadButton: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: 'hotpink',
  },
});
