import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAaCElud0Ife0vkits2BScONMaX_nw--As",
    authDomain: "vicode-media.firebaseapp.com",
    projectId: "vicode-media",
    storageBucket: "vicode-media.appspot.com",
    messagingSenderId: "420658677235",
    appId: "1:420658677235:web:eac7e5990ee0ebe38b7e86"
};

const fire = firebase.initializeApp(config);
export default fire;