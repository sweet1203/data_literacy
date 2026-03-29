import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson6_3_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 6-3에서 배운 <strong>그룹 비교(평균 + 분포)</strong>를 오렌지3 <strong>Box Plot</strong>으로 해 봅니다. 학년별·성별로 변수를 나눠 "평균만 보지 말고 분포를 보자"를 체험하세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: <strong>File</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러옵니다. Box Plot은 <strong>File → Box Plot</strong>으로 연결합니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 학년별로 나눠 Box Plot 그리기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Box Plot</strong> 위젯을 놓고 <strong>File → Box Plot</strong>으로 연결합니다.</li>
        <li>Box Plot 설정에서 <strong>Subgroups(그룹 변수)</strong>에 <strong>grade</strong>를 선택합니다. <strong>연속 변수</strong>에는 <strong>exercise_days</strong>(주당 운동 일수) 또는 <strong>study_hours</strong>를 선택하세요.</li>
        <li>1학년·2학년·3학년별로 박스(중앙값, 사분위)가 어떻게 다른지 비교합니다. "어느 학년의 중앙값이 가장 큰가?", "어느 학년이 가장 퍼져 있는가?"를 비교해 보세요. (이 데이터에서는 박스 밖 점이 거의 없을 수 있어요.)</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 성별 비교도 해 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Box Plot을 하나 더 쓰거나, 같은 Box Plot에서 Subgroups를 <strong>gender</strong>(성별)로 바꿔 봅니다.</li>
        <li>연속 변수는 <strong>sleep_hours</strong> 또는 <strong>satisfaction</strong>으로 선택해 "남·여별 수면 시간(또는 만족도) 분포"를 비교해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 그룹별 비교 정리 (선택)</h2>
      <p className="text-sm">
        Box Plot만으로도 학년별·성별로 "어디가 더 큰지, 어떻게 퍼져 있는지"를 충분히 비교할 수 있어요. 필요하면 <strong>Select Rows</strong>로 특정 학년만 걸러 낸 뒤 <strong>Feature Statistics</strong>에 넘겨서 숫자로도 확인해 보세요.
      </p>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>학년별 운동 일수 Box Plot에서, 박스 안 세로선(중앙값)이 가장 큰 학년이랑 가장 작은 학년이 어디인가요?</li>
          <li>박스 모양이 학년마다 다르게 보이나요? (어떤 학년은 박스가 넓고, 어떤 학년은 좁다 같은 느낌) 있다면 어떻게 다른지 한 줄로 정리해 보세요.</li>
          <li>"평균만 보지 말고 전체 분포를 보자"는 말이, 오늘 Box Plot 보면서 어떤 점에서 와닿았나요?</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/6-3" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 6-3 (비교 분석)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
