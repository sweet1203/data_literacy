import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson6_1_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 6-1에서 배운 <strong>상관계수(r)</strong>와 <strong>산점도</strong>를 오렌지3로 확인해 봅니다. <strong>Correlation</strong> 위젯으로 숫자를 보고, <strong>Scatter Plot</strong>으로 점 분포를 함께 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Correlation 위젯으로 상관계수 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Data</strong> 또는 <strong>Unsupervised</strong> 그룹을 펼칩니다. <strong>Correlation</strong> 위젯을 찾아 캔버스에 놓습니다.</li>
        <li>Data Table → Correlation으로 연결합니다.</li>
        <li>Correlation 위젯을 더블 클릭하면 변수들 사이의 <strong>상관계수 행렬</strong>이 표로 나옵니다. -1~1 사이 값으로, 1에 가까우면 양의 상관, -1에 가까우면 음의 상관, 0에 가까우면 거의 무상관입니다.</li>
        <li><strong>smartphone_hours</strong>와 <strong>sleep_hours</strong>가 만나는 칸의 숫자를 확인해 보세요. 음수인가요, 양수인가요? 레슨 6-1의 r 해석 기준과 비교해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Scatter Plot으로 같은 관계 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Scatter Plot</strong>을 놓고 Data Table과 연결합니다.</li>
        <li>X축 <strong>smartphone_hours</strong>, Y축 <strong>sleep_hours</strong>를 선택합니다. 점들이 오른쪽 위로 갈수록 줄어드는지(음의 상관), 늘어나는지(양의 상관), 구름처럼만 있는지(무상관)를 눈으로 확인하세요.</li>
        <li>Correlation에서 본 r 값과 Scatter Plot의 모양이 서로 맞는지 확인해 보세요.</li>
      </ol>

      <InfoBox type="warning">
        상관계수가 높다고 "원인-결과"가 아닙니다. 레슨 6-2에서 배우는 "상관 ≠ 인과"를 기억하세요.
      </InfoBox>

      <ExerciseBlock title="생각해보기: 오렌지3에서 아래를 한번 생각해 보기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>Correlation에서 스마트폰 사용 시간과 수면 시간이 만나는 칸의 숫자(상관계수)는 대략 얼마인가요? 한번 확인해 보세요.</li>
          <li>그 숫자를 보면 "강한 관계 / 보통 / 약한 관계 / 거의 없음" 중 어떤 느낌에 가깝나요? 한번 생각해 보세요.</li>
          <li>산점도에서 점들이 대체로 어떻게 나열돼 있나요? (오른쪽으로 갈수록 위로 올라가나요, 내려가나요, 아니면 구름처럼만 있나요?) 한번 생각해 보세요.</li>
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
