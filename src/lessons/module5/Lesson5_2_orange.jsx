import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson5_2_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 5-2에서 배운 <strong>데이터에 맞는 차트 선택</strong>을 오렌지3에서 연습합니다. 같은 데이터를 <strong>막대·박스·산점도·분포</strong> 등으로 그려 보며 "어떤 질문에는 어떤 차트가 맞는지" 체험해 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: <strong>File</strong> → <strong>데이터 불러오기(Load data)</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 선택합니다. File 위젯 아래쪽 <strong>변수 설정(Variables)</strong> 목록에서 <strong>grade</strong> 행의 <strong>type</strong>을 <strong>Categorical</strong>(범주형)로 지정합니다. 숫자만 있어도 학년은 범주로 다루는 것이 맞고, 이렇게 해 두어야 막대·박스 등에서 범주 축으로 쓰기 쉽습니다. <strong>Data Table</strong>을 연결한 뒤 아래를 진행하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 학년과 스마트폰 사용 시간 → 막대/박스 차트</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong>에서 <strong>Bar Chart</strong> 위젯을 놓고 Data Table과 연결합니다.</li>
        <li>위젯에서 <strong>통계량(평균·합계 등)을 고르는 항목에 집중하지 말고</strong>, 데이터 테이블에 있는 <strong>변수(열 이름)</strong>를 축에 직접 지정해 봅니다. <strong>범주(X축)</strong>에는 <strong>grade</strong>, <strong>값(Y축)</strong>에는 <strong>smartphone_hours</strong> 변수를 선택해 학년과 스마트폰 사용 시간이 어떻게 연결되는지 막대로 확인합니다.</li>
        <li>같은 두 변수를 <strong>Box Plot</strong>으로 그려 보세요. <strong>Subgroups</strong>에 <strong>grade</strong>, <strong>연속 변수</strong>에 <strong>smartphone_hours</strong>를 넣으면, 집계한 하나의 숫자가 아니라 <strong>각 행의 관측값(변수 값)</strong>이 학년별로 어떻게 퍼지는지 박스로 볼 수 있습니다. 막대와 박스 중 어떤 쪽이 “변수 값 자체의 퍼짐”을 보기에 나은지 비교해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 두 수치 변수의 관계 → 산점도</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Scatter Plot</strong>을 놓고 Data Table과 연결합니다.</li>
        <li>요약 통계가 아니라 <strong>변수 두 개를 그대로</strong> 축에 올립니다. X축에 <strong>sleep_hours</strong>, Y축에 <strong>satisfaction</strong>을 선택해 각 학생(각 행)의 수면 시간과 만족도가 점으로 어떻게 찍히는지 확인합니다. 레슨 5-2에서 배운 대로 “두 수치형 변수의 관계”에는 산점도가 맞습니다.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 한 변수의 값 분포 → Distributions</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Distributions</strong> 위젯에서 분석할 변수로 <strong>satisfaction</strong>(만족도) <strong>열 자체</strong>를 선택해 히스토그램으로 그립니다. 범주별 평균 같은 요약이 아니라, <strong>그 변수에 저장된 값들</strong>이 어떤 구간에 얼마나 있는지 보는 실습입니다.</li>
      </ol>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>막대 차트와 박스 차트를 둘 다 그려 봤을 때, 학년별로 “한 줄로 요약된 크기”만 보고 싶을 때와 “같은 변수의 관측값이 학년마다 어떻게 퍼지는지”를 보고 싶을 때, 각각 어떤 차트가 더 잘 맞았나요?</li>
          <li>수면 시간과 만족도 관계를 볼 때 왜 막대 차트보다 산점도(점 찍힌 차트)가 더 맞는 것 같았나요?</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/5-2" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 5-2 (올바른 차트 선택하기)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
