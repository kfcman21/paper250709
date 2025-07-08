# 교육혁신 선언문 웹 애플리케이션

AI·디지털 기반 교육혁신 선도교사 연수에서 제시된 '나의 교육혁신 선언문' 20가지를 실시간 투표 시스템과 함께 제공하는 웹 애플리케이션입니다.

## 주요 기능

### 🎯 핵심 기능
- **20가지 교육혁신 선언문** 표시
- **실시간 투표 시스템** (동의/반대/중립)
- **Firebase 서버 연동**으로 실시간 데이터 동기화
- **관리자 기능** (투표 초기화, 데이터 내보내기)
- **반응형 디자인** (모바일/데스크톱 지원)

### 🔧 기술 스택
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Firebase Realtime Database
- **UI/UX**: Font Awesome, Google Fonts (Noto Sans KR)
- **실시간 통신**: Firebase Realtime Database

## 설치 및 설정

### 1. Firebase 프로젝트 설정

1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Realtime Database 활성화
3. 데이터베이스 규칙 설정:

```json
{
  "rules": {
    "votes": {
      ".read": true,
      ".write": true
    }
  }
}
```

### 2. Firebase 설정 업데이트

`firebase-config.js` 파일에서 Firebase 프로젝트 설정을 업데이트하세요:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project-default-rtdb.firebaseio.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

### 3. 관리자 암호 설정

`app.js` 파일에서 관리자 암호를 변경하세요:

```javascript
const ADMIN_PASSWORD = "your-admin-password";
```

## 사용 방법

### 일반 사용자
1. 웹 브라우저에서 `index.html` 파일을 열기
2. 20가지 교육혁신 선언문 확인
3. 실시간 투표 참여 (동의/반대/중립)

### 관리자
1. 관리자 암호 입력
2. 투표 초기화 또는 데이터 내보내기 기능 사용

## 파일 구조

```
paper/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── app.js             # 메인 JavaScript 로직
├── firebase-config.js # Firebase 설정
└── README.md          # 프로젝트 설명서
```

## 교육혁신 선언문 구성

각 선언문은 다음 형식을 따릅니다:
> "나는 **[주체 선언]**으로서, **[핵심 가치]**을/를 통해 **[실천 다짐]**을/를 만들어갈 것을 선언한다."

### 주요 주체 선언 예시:
- AI 활용가
- 학습 촉진자
- 맞춤형 교육자
- 데이터 기반 학습 진단 전문가
- 관계 형성가
- 성장 기록자
- 피드백 전문가
- 하이터치-하이테크 융합 교육자

## 보안 고려사항

- 관리자 암호는 실제 배포 시 반드시 변경하세요
- Firebase 보안 규칙을 적절히 설정하세요
- HTTPS 환경에서 사용하는 것을 권장합니다

## 브라우저 지원

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

## 문의

프로젝트 관련 문의사항이 있으시면 언제든지 연락주세요. 