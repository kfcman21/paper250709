// 교육혁신 선언문 데이터
const declarations = [
    {
        id: 1,
        text: "나는 **AI 활용가**로서, **AI 데이터 분석**을 통해 **창의적 문제해결 역량을 키우는 교실**을 만들어갈 것을 선언한다."
    },
    {
        id: 2,
        text: "나는 **학습 촉진자**로서, **하이터치와 하이테크의 균형적 접근**을 통해 **학생 중심 수업 환경**을 만들어갈 것을 선언한다."
    },
    {
        id: 3,
        text: "나는 **맞춤형 교육자**로서, **개인화된 학습 경로 설계**를 통해 **모두를 위한 개인화된 성장 지원 교육**을 만들어갈 것을 선언한다."
    },
    {
        id: 4,
        text: "나는 **데이터 기반 학습 진단 전문가**로서, **AI 기반 학습 패턴 분석**을 통해 **학생들의 개별 역량 차이를 해소하는 맞춤형 지도**를 만들어갈 것을 선언한다."
    },
    {
        id: 5,
        text: "나는 **맞춤형 학습 경로 큐레이터**로서, **AIDT(Analyze-Implement-Design-Track & Evaluate) 모델 활용**을 통해 **학습 효과가 극대화되는 학생 주도적 수업**을 만들어갈 것을 선언한다."
    },
    {
        id: 6,
        text: "나는 **관계 형성가**로서, **인간 존엄성**을 통해 **학생들의 행위 주체성(Agency)과 웰빙(Well-being)이 보장되는 교실**을 만들어갈 것을 선언한다."
    },
    {
        id: 7,
        text: "나는 **성장 기록자**로서, **과정 중심 평가와 AI 데이터 기반 학습 성과 추적**을 통해 **학생의 장기적 학습 여정과 성장 과정이 시각화되는 포트폴리오 시스템**을 만들어갈 것을 선언한다."
    },
    {
        id: 8,
        text: "나는 **피드백 전문가**로서, **AI 자동 피드백과 교사의 심층 피드백 연계**를 통해 **즉각적이고 개인화된 성장 중심 피드백 환경**을 만들어갈 것을 선언한다."
    },
    {
        id: 9,
        text: "나는 **하이터치-하이테크 융합 교육자**로서, **기술적 부담 해소를 통한 하이터치 시간 확보**를 통해 **인간적 상호작용과 효율성이 조화된 교육**을 만들어갈 것을 선언한다."
    },
    {
        id: 10,
        text: "나는 **학생 중심 교육 실현가**로서, **유연한 학습 환경 제공**을 통해 **시간과 공간의 제약 없이 자기주도적 학습 능력이 향상되는 교실**을 만들어갈 것을 선언한다."
    },
    {
        id: 11,
        text: "나는 **역량 중심 교육 설계자**로서, **'안다'에서 '할 수 있다'로의 전환**을 통해 **실제적 문제해결력과 성취 증거 기반 역량이 강화되는 교육**을 만들어갈 것을 선언한다."
    },
    {
        id: 12,
        text: "나는 **미래 교육 선도 교사**로서, **교사의 전문성 강화**를 통해 **디지털 대전환 시대에 요구되는 교육 패러다임을 이끄는 학교**를 만들어갈 것을 선언한다."
    },
    {
        id: 13,
        text: "나는 **AI 기반 수업 설계자**로서, **학생 실태 분석 기반의 최적 학습 경로 제안**을 통해 **모든 학생에게 최적화된 맞춤형 교육 환경**을 만들어갈 것을 선언한다."
    },
    {
        id: 14,
        text: "나는 **학습 분석가**로서, **AI가 제공하는 학습 데이터를 해석하고 교육적 통찰 도출**을 통해 **개인별 강점과 약점을 발견하여 심층 지도하는 교육**을 만들어갈 것을 선언한다."
    },
    {
        id: 15,
        text: "나는 **디지털 도구 활용 전문가**로서, **하이터치 기반 정서적 지원과 하이테크 기반 디지털 학습환경 조성**을 통해 **학생 참여를 촉진하고 효과적인 상호작용이 이루어지는 교수-학습 환경**을 만들어갈 것을 선언한다."
    },
    {
        id: 16,
        text: "나는 **교육적 의사결정자**로서, **AI 분석 데이터와 교사의 교육적 판단의 균형**을 통해 **학생에게 최상의 학습 경험을 제공하는 하이터치와 하이테크의 조화**를 만들어갈 것을 선언한다."
    },
    {
        id: 17,
        text: "나는 **포용적 교육 실천가**로서, **다양성 존중과 형평성의 가치**를 통해 **모든 학습자가 고유한 가치를 존중받으며 동등하게 배우고 성장하는 교실**을 만들어갈 것을 선언한다."
    },
    {
        id: 18,
        text: "나는 **수업 혁신 동료 그룹의 일원**으로서, **데이터 기반 맞춤형 설계**를 통해 **학교 내 수업 혁신을 함께 이끌어가는 지속 가능한 교육 공동체**를 만들어갈 것을 선언한다."
    },
    {
        id: 19,
        text: "나는 **교사 업무 효율화 지향 전문가**로서, **AI 콘텐츠 생성과 자동 채점 및 학습 분석**을 통해 **교사의 수업 준비 부담을 줄이고 학생에게 집중하는 시간**을 만들어갈 것을 선언한다."
    },
    {
        id: 20,
        text: "나는 **과정 중심 평가 전문가**로서, **AI 분석 기반 맞춤형 개선점 제안 및 성취도 시각화**를 통해 **학생의 역량 중심 성장 과정이 명확히 드러나는 투명한 평가 시스템**을 만들어갈 것을 선언한다."
    }
];

// 투표 데이터 초기화
let voteData = {
    agree: 0,
    disagree: 0,
    neutral: 0
};

// 관리자 암호 (실제 사용시 변경하세요)
const ADMIN_PASSWORD = "education2024";

// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 애플리케이션 초기화
function initializeApp() {
    displayDeclarations();
    loadVoteData();
    setupRealTimeUpdates();
}

// 선언문 표시
function displayDeclarations() {
    const declarationList = document.getElementById('declarationList');
    
    declarations.forEach(declaration => {
        const declarationItem = document.createElement('div');
        declarationItem.className = 'declaration-item';
        
        const declarationNumber = document.createElement('div');
        declarationNumber.className = 'declaration-number';
        declarationNumber.textContent = declaration.id;
        
        const declarationText = document.createElement('div');
        declarationText.className = 'declaration-text';
        declarationText.innerHTML = declaration.text;
        
        declarationItem.appendChild(declarationNumber);
        declarationItem.appendChild(declarationText);
        declarationList.appendChild(declarationItem);
    });
}

// 투표 데이터 로드
function loadVoteData() {
    const votesRef = database.ref('votes');
    votesRef.once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                voteData = snapshot.val();
            } else {
                // 초기 데이터 설정
                database.ref('votes').set(voteData);
            }
            updateVoteDisplay();
        })
        .catch((error) => {
            console.error('투표 데이터 로드 실패:', error);
        });
}

// 실시간 업데이트 설정
function setupRealTimeUpdates() {
    const votesRef = database.ref('votes');
    votesRef.on('value', (snapshot) => {
        if (snapshot.exists()) {
            voteData = snapshot.val();
            updateVoteDisplay();
        }
    });
}

// 투표 표시 업데이트
function updateVoteDisplay() {
    const total = voteData.agree + voteData.disagree + voteData.neutral;
    
    document.getElementById('agreeCount').textContent = voteData.agree;
    document.getElementById('disagreeCount').textContent = voteData.disagree;
    document.getElementById('neutralCount').textContent = voteData.neutral;
    
    // 투표 바 업데이트
    if (total > 0) {
        const agreePercentage = (voteData.agree / total) * 100;
        const disagreePercentage = (voteData.disagree / total) * 100;
        const neutralPercentage = (voteData.neutral / total) * 100;
        
        document.getElementById('agreeBar').style.width = agreePercentage + '%';
        document.getElementById('disagreeBar').style.width = disagreePercentage + '%';
        document.getElementById('neutralBar').style.width = neutralPercentage + '%';
    } else {
        document.getElementById('agreeBar').style.width = '0%';
        document.getElementById('disagreeBar').style.width = '0%';
        document.getElementById('neutralBar').style.width = '0%';
    }
}

// 투표 함수
function vote(type) {
    if (!type || !['agree', 'disagree', 'neutral'].includes(type)) {
        alert('올바르지 않은 투표 유형입니다.');
        return;
    }
    
    // Firebase에 투표 업데이트
    const votesRef = database.ref('votes');
    votesRef.transaction((currentData) => {
        if (currentData === null) {
            return { agree: 0, disagree: 0, neutral: 0, [type]: 1 };
        } else {
            currentData[type] = (currentData[type] || 0) + 1;
            return currentData;
        }
    }).then(() => {
        console.log('투표가 성공적으로 기록되었습니다.');
    }).catch((error) => {
        console.error('투표 기록 실패:', error);
        alert('투표 기록에 실패했습니다. 다시 시도해주세요.');
    });
}

// 투표 초기화
function resetVotes() {
    const password = document.getElementById('250709').value;
    
    if (password !== ADMIN_PASSWORD) {
        alert('관리자 암호가 올바르지 않습니다.');
        return;
    }
    
    if (confirm('정말로 모든 투표를 초기화하시겠습니까?')) {
        database.ref('votes').set({
            agree: 0,
            disagree: 0,
            neutral: 0
        }).then(() => {
            alert('투표가 성공적으로 초기화되었습니다.');
            document.getElementById('adminPassword').value = '';
        }).catch((error) => {
            console.error('투표 초기화 실패:', error);
            alert('투표 초기화에 실패했습니다.');
        });
    }
}

// 데이터 내보내기
function exportData() {
    const password = document.getElementById('250709').value;
    
    if (password !== ADMIN_PASSWORD) {
        alert('관리자 암호가 올바르지 않습니다.');
        return;
    }
    
    const exportData = {
        timestamp: new Date().toISOString(),
        declarations: declarations,
        votes: voteData,
        totalVotes: voteData.agree + voteData.disagree + voteData.neutral
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `교육혁신선언문_데이터_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    document.getElementById('adminPassword').value = '';
    alert('데이터가 성공적으로 내보내졌습니다.');
}

// 전역 함수로 노출 (HTML에서 호출하기 위해)
window.vote = vote;
window.resetVotes = resetVotes;
window.exportData = exportData; 