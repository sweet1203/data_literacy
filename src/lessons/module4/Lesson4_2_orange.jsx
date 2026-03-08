import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_2_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 4-2에서 배운 <strong>평균, 중앙값, 표준편차</strong>를 오렌지3에서 직접 확인해 봅니다.
        <strong>Statistics</strong> 위젯과 <strong>Distributions</strong>, <strong>Box Plot</strong>으로 데이터의 대표값과 퍼짐을 살펴보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: 4-1 오렌지 실습처럼 <strong>File</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러오고, <strong>Data Table</strong>에 연결해 두세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Statistics 위젯으로 요약 통계 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Data</strong> 그룹을 펼칩니다.</li>
        <li><strong>Statistics</strong> 위젯을 찾아 캔버스에 끌어다 놓습니다.</li>
        <li><strong>Data Table</strong> 위젯의 출력(오른쪽 원)을 <strong>Statistics</strong>의 입력(왼쪽 원)에 선으로 연결합니다.</li>
        <li><strong>Statistics</strong> 위젯을 더블 클릭하면 요약 통계 창이 열립니다. 각 변수별로 <strong>Mean(평균), Median(중앙값), Std dev(표준편차)</strong> 등이 표로 나옵니다.</li>
        <li><strong>sleep_hours</strong>(수면 시간), <strong>smartphone_hours</strong>(스마트폰 사용 시간)의 평균·중앙값·표준편차를 확인해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Distributions로 분포 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Distributions</strong> 위젯을 캔버스에 놓습니다.</li>
        <li>Data Table → Distributions로 연결합니다.</li>
        <li>Distributions를 더블 클릭한 뒤, 왼쪽에서 변수(예: sleep_hours)를 선택하면 <strong>히스토그램(분포)</strong>이 나타납니다. 값이 어떻게 퍼져 있는지 확인하세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: Box Plot으로 대표값·이상치 확인</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Box Plot</strong> 위젯을 캔버스에 놓습니다.</li>
        <li>Data Table → Box Plot으로 연결합니다.</li>
        <li>Box Plot을 더블 클릭하고, 표시할 변수를 선택합니다. 박스 안의 선이 <strong>중앙값</strong>, 박스가 사분위 범위, 점이 <strong>이상치</strong> 후보임을 확인하세요.</li>
      </ol>

      <ExerciseBlock title="과제: 오렌지3에서 아래 질문에 답하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>Statistics에서 <strong>sleep_hours</strong>의 <strong>평균(Mean)</strong>과 <strong>중앙값(Median)</strong>을 적어 보세요. 두 값이 비슷한가요?</li>
          <li><strong>smartphone_hours</strong>의 <strong>표준편차(Std dev)</strong>는 얼마인가요? 이 숫자가 "퍼짐"을 어떻게 말해 주나요?</li>
          <li>Box Plot에서 <strong>satisfaction</strong>(만족도)을 선택했을 때, 이상치로 보이는 값이 있나요? 있다면 대략 몇 개인지 적어 보세요.</li>
        </ol>
        <p className="mt-4 pt-4 border-t border-slate-200 text-sm font-medium text-primary-700">
          📌 질문의 답변을 리로스쿨에 제출하세요.
        </p>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/4-2" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 4-2 (기초 통계 이해하기)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
