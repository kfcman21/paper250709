// Firebase 설정
// 실제 Firebase 프로젝트에서 가져온 설정으로 교체하세요
const firebaseConfig = {
    apiKey: "AIzaSyBh8j27lTXU3h98eNGb2JvciOHBo-YsyDU",
    authDomain: "paper250709.firebaseapp.com",
    databaseURL: "https://paper250709-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "paper250709",
    storageBucket: "paper250709.firebasestorage.app",
    messagingSenderId: "371218682184",
    appId: "1:371218682184:web:73787a138cec5792f1a37d",
    measurementId: "G-8PJG1CSRH1"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// 데이터베이스 참조
const database = firebase.database(); 