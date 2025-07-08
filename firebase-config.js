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

// 연결 상태 모니터링
const connectedRef = database.ref(".info/connected");
connectedRef.on("value", (snap) => {
    const statusIndicator = document.getElementById('status-indicator');
    const statusText = document.getElementById('status-text');
    
    if (snap.val() === true) {
        statusIndicator.classList.add('connected');
        statusText.textContent = '서버 연결됨';
    } else {
        statusIndicator.classList.remove('connected');
        statusText.textContent = '서버 연결 중...';
    }
}); 