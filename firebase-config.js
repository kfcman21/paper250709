// Firebase 설정
// 실제 Firebase 프로젝트에서 가져온 설정으로 교체하세요
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
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