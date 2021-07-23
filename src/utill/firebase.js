import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJByGwTaW0h9sUOrG6oo_S_YUn2PvmcGs",
    authDomain: "reactfbrealtimedb.firebaseapp.com",
    projectId: "reactfbrealtimedb",
    storageBucket: "reactfbrealtimedb.appspot.com",
    messagingSenderId: "20138758357",
    appId: "1:20138758357:web:a58a0ea6a2d359f5fb125c"
};

firebase.initializeApp(firebaseConfig);

export default firebase