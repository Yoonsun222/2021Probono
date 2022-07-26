import * as firebase from 'firebase';
import 'firebase/firestore';
import { Alert, AsyncStorage } from 'react-native';
import 'firebase/database';

export async function signIn(email, password, navigation) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
    });

    navigation.replace('TabNavigator');
  } catch (err) {
    Alert.alert('로그인에 문제가 있습니다! ', err.message);
  }
}

export async function logout(navigation) {
  try {
    console.log('로그아웃!!');
    const currentUser = firebase.auth().currentUser;
    await AsyncStorage.removeItem('session');
    await firebase.auth().signOut();
    navigation.push('SignInPage');
  } catch (err) {
    Alert.alert('로그 아웃에 문제가 있습니다! ', err.message);
  }
}

export async function addDiary(content) {
  try {
    const db = firebase.firestore();
    await db
      .collection('diary')
      .doc(content.date + 'D')
      .set(content);
    return true;
  } catch (err) {
    Alert.alert('글 작성에 문제가 있습니다! ', err.message);
    return false;
  }
}

export async function change(content) {
  try {
    const db = firebase.firestore();
    await db
      .collection('change')
      .doc(content.date + 'D')
      .set(content);
    return true;
  } catch (err) {
    Alert.alert('글 작성에 문제가 있습니다! ', err.message);
    return false;
  }
}

export async function getData(setNext) {
  try {
    let data = [];
    const db = firebase.firestore();
    const first = db.collection('diary').orderBy('date', 'desc').limit(5);

    const snapshot = await first.get();
    snapshot.docs.map((doc) => {
      console.log('');
      data.push(doc.data());
    });
    let last;
    if (snapshot.docs.length !== 0) {
      last = snapshot.docs[snapshot.docs.length - 1];
    }
    setNext(last.data().date);
    console.log(last.data().date);

    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getNextData(nextDate, setNext) {
  try {
    console.log('불러올 다음 date: ' + nextDate);
    let data = [];
    const db = firebase.firestore();
    const next = db
      .collection('diary')
      .orderBy('date', 'desc')
      .startAfter(nextDate)
      .limit(5);
    const snapshot = await next.get();
    snapshot.docs.map((doc) => {
      console.log('[페이지네이션 Next]');
      doc.data();
      data.push(doc.data());
    });

    let last;
    if (snapshot.docs.length !== 0) {
      last = snapshot.docs[snapshot.docs.length - 1];
      setNext(last.data().date);
      return data;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function getOld() {
  try {
    let data;
    const db = firebase.firestore();

    //let userRef = await db.collection('old').doc(content.uid);

    const first = db
      .collection('old')
      .orderBy(
        'name',
        'focus',
        'gender',
        'birth',
        'phone',
        'region',
        'home',
        'emergency1',
        'emergency2'
      );

    const snapshot = await first.name;
    /*
    snapshot.docs.map((doc) => {
      data.push(doc.name);
    });

    console.log(data.name);

    return data;*/

    //return first['name'];
    return first.name;
  } catch (err) {
    console.log(err);
    return false;
  }
}
