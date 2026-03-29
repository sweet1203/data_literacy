import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson6_1_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 6-1에서 배운 <strong>상관계수(r)</strong>와 <strong>Scatter Plot(산점도)</strong>를 오렌지3로 확인해 봅니다. <strong>Correlation</strong> 위젯으로 숫자를 보고, <strong>Scatter Plot</strong>으로 점 분포를 함께 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: <strong>File</strong> 위젯으로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러옵니다. Correlation은 File → <strong>Data Table</strong> → Correlation으로 연결해 보고, 산점도는 아래 단계대로 <strong>File에서 직접</strong> Scatter Plot으로 연결합니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Correlation 위젯으로 상관계수 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Data</strong> 또는 <strong>Unsupervised</strong> 그룹을 펼칩니다. <strong>Correlation</strong> 위젯을 찾아 캔버스에 놓습니다.</li>
        <li>File → Data Table → Correlation 순으로 연결합니다.</li>
        <li>Correlation 위젯을 더블 클릭하면 변수들 사이의 <strong>상관계수 행렬</strong>이 표로 나옵니다. -1~1 사이 값으로, 1에 가까우면 양의 상관, -1에 가까우면 음의 상관, 0에 가까우면 거의 무상관입니다.</li>
        <li><strong>smartphone_hours</strong>와 <strong>sleep_hours</strong>, 그리고 <strong>smartphone_hours</strong>와 <strong>fatigue</strong>가 만나는 칸의 숫자를 각각 확인해 보세요. 레슨 6-1의 r 해석 기준과 비교해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Scatter Plot 2개 — File에서 연결</h2>
      <p className="text-sm text-slate-600">
        산점도는 Data Table이 아니라 <strong>File</strong>에서 직접 연결합니다. 같은 File에서 Scatter Plot 위젯을 <strong>두 개</strong> 캔버스에 놓고 각각 연결하세요.
      </p>
      <ol className="list-decimal list-inside space-y-2 text-sm mt-3">
        <li><strong>Scatter Plot</strong> 위젯을 두 개 캔버스에 놓습니다.</li>
        <li>각 Scatter Plot을 <strong>File</strong>에서 끌어와 연결합니다. (File → Scatter Plot, 두 위젯 모두 같은 File에 연결)</li>
        <li>
          <strong>첫 번째 Scatter Plot</strong>: X축 <strong>smartphone_hours</strong>, Y축 <strong>sleep_hours</strong>를 선택합니다. 점 분포로 음·양·무상관을 눈으로 확인합니다.
        </li>
        <li>
          <strong>두 번째 Scatter Plot</strong>: X축 <strong>smartphone_hours</strong>, Y축 <strong>fatigue</strong>를 선택합니다. 수면과 피로도 각각 스마트폰 시간과 어떤 관계로 보이는지 비교해 보세요.
        </li>
        <li>
          각 Scatter Plot 창에서 <strong>Show regression line</strong>을 클릭해 회귀선을 켭니다. 직선이 점 구름과 얼마나 맞는지 보며 Correlation에서 본 상관계수와 느낌이 맞는지 확인하세요.
        </li>
      </ol>

      <InfoBox type="warning">
        상관계수가 높다고 "원인-결과"가 아닙니다. 레슨 6-2에서 배우는 "상관 ≠ 인과"를 기억하세요.
      </InfoBox>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>Correlation에서 스마트폰 사용 시간과 수면 시간, 스마트폰과 피로도(fatigue)가 만나는 칸의 상관계수는 각각 대략 얼마인가요?</li>
          <li>두 관계 중 어느 쪽이 r의 절댓값이 더 큰가요? "강한 관계 / 보통 / 약한 관계 / 거의 없음" 중 어떤 느낌에 가깝나요?</li>
          <li>File에서 연결한 <strong>두 Scatter Plot</strong>에서 점 분포가 서로 비슷한가요, 다른가요? 각각 <strong>Show regression line</strong>을 클릭한 뒤 직선과 점이 잘 맞는 쪽이 어느 그래프인가요?</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/6-1" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 6-1 (상관관계 놀이터)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
