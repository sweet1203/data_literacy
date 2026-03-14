import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson8_3_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 8-3에서 배운 <strong>회귀(Regression)</strong>와 <strong>선형 회귀</strong>를 오렌지3 <strong>Linear Regression</strong> 위젯으로 체험합니다. 수치형 변수(예: 수면 시간)로 다른 수치(예: 만족도)를 예측하는 직선을 만들어 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Linear Regression 위젯 연결하기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Model</strong> 그룹을 펼칩니다.</li>
        <li><strong>Linear Regression</strong> 위젯을 찾아 캔버스에 놓습니다.</li>
        <li>Data Table → Linear Regression으로 연결합니다. 오렌지3가 자동으로 변수 중 하나를 <strong>목표 변수(Target)</strong>로 둘 수 있습니다. 목표를 "연속형 수치"(예: satisfaction, sleep_hours)로 두세요.</li>
        <li>Linear Regression 위젯을 더블 클릭하면, 어떤 변수가 사용되었는지와 <strong>회귀식(계수)</strong>이 나옵니다. "y = ax + b" 형태의 식을 확인하세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Scatter Plot에 회귀선 겹쳐 보기 (선택)</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>일부 버전에서는 Linear Regression의 출력을 <strong>Scatter Plot</strong>에 연결하면 회귀선이 겹쳐 보입니다. 가능하면 "수면 시간(X) → 만족도(Y)" 같은 한 쌍을 선택해 Scatter Plot과 함께 보면서 직선이 어떻게 맞는지 확인해 보세요.</li>
      </ol>

      <InfoBox type="tip">
        회귀의 "기울기(a)"가 양수면 X가 커질수록 Y가 커지는 경향, 음수면 X가 커질수록 Y가 줄어드는 경향입니다. 레슨 8-3의 직선 피팅과 같은 개념입니다.
      </InfoBox>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>Linear Regression에서 "맞추고 싶은 값(목표)"이 뭐였고, "그걸 설명하는 변수"로 뭘 넣었나요?</li>
          <li>나온 식에서 기울기가 양수인가요, 음수인가요? 그게 "X가 커지면 Y가 커지는지, 줄어드는지"랑 어떻게 맞는지 적어 보세요.</li>
          <li>수면 8시간인 친구의 만족도를 이 모델로 예측하면 대략 몇 점쯤 나오나요? (식에 8 넣어 보거나 위젯에서 확인해 보세요.)</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/8-3" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 8-3 (회귀 체험)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
