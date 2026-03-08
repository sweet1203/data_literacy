import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson6_3_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 6-3에서 배운 <strong>그룹 비교(평균 + 분포)</strong>를 오렌지3 <strong>Box Plot</strong>과 <strong>Statistics</strong>로 해 봅니다. 학년별·성별로 변수를 나눠 "평균만 보지 말고 분포를 보자"를 체험하세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 학년별로 나눠 Box Plot 그리기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Box Plot</strong> 위젯을 놓고 Data Table과 연결합니다.</li>
        <li>Box Plot 설정에서 <strong>Subgroups(그룹 변수)</strong>에 <strong>grade</strong>를 선택합니다. <strong>연속 변수</strong>에는 <strong>exercise_days</strong>(주당 운동 일수) 또는 <strong>study_hours</strong>를 선택하세요.</li>
        <li>1학년·2학년·3학년별로 박스(중앙값, 사분위, 이상치)가 어떻게 다른지 비교합니다. "어느 학년의 중앙값이 가장 큰가?", "어느 학년이 가장 퍼져 있는가?"를 답해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 성별 비교도 해 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Box Plot을 하나 더 쓰거나, 같은 Box Plot에서 Subgroups를 <strong>gender</strong>(성별)로 바꿔 봅니다.</li>
        <li>연속 변수는 <strong>sleep_hours</strong> 또는 <strong>satisfaction</strong>으로 선택해 "남·여별 수면 시간(또는 만족도) 분포"를 비교해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: Statistics로 그룹별 요약 확인 (선택)</h2>
      <p className="text-sm">
        오렌지3에서 그룹별 통계를 보려면 <strong>Select Rows</strong> 등으로 특정 학년만 걸러 낸 뒤 Statistics에 넘기는 방법이 있습니다. Box Plot만으로도 "그룹 간 분포 차이"는 충분히 비교할 수 있습니다.
      </p>

      <ExerciseBlock title="과제: 오렌지3에서 아래 질문에 답하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>학년(grade)별 <strong>exercise_days</strong>(운동 일수) Box Plot에서, <strong>중앙값</strong>이 가장 큰 학년과 가장 작은 학년을 써 보세요.</li>
          <li>같은 Box Plot에서 "평균은 비슷한데 분포가 다른" 두 학년이 있나요? 있다면 어떤 학년들이고, 어떻게 다른지 한 줄로 써 보세요.</li>
          <li>레슨 6-3에서 배운 "평균만 보지 말고 분포를 보라"는 말이, 이 실습에서 어떻게 드러났는지 한 문장으로 써 보세요.</li>
        </ol>
        <p className="mt-4 pt-4 border-t border-slate-200 text-sm font-medium text-primary-700">
          📌 질문의 답변을 리로스쿨에 제출하세요.
        </p>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/6-3" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 6-3 (비교 분석)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
