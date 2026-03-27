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
        <strong>준비</strong>: <strong>File</strong> → <strong>데이터 불러오기(Load data)</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 선택합니다. File 위젯 아래쪽 <strong>변수 설정(Variables)</strong> 목록에서 <strong>grade</strong> 행의 <strong>type</strong>을 <strong>Categorical</strong>(범주형)로 지정합니다. 숫자만 있어도 학년은 범주로 다루는 것이 맞고, 이렇게 해 두어야 막대·박스 등에서 범주 축으로 쓰기 쉽습니다. 아래 시각화 위젯은 <strong>File</strong>에 직접 연결해 진행합니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 학년별 비교 → 막대/박스 차트</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong>에서 <strong>Bar Plot</strong>(막대 그래프) 위젯을 놓고 <strong>File</strong>과 연결합니다.</li>
        <li><strong>Bar Plot</strong> 설정에서 <strong>Group by</strong>에 <strong>grade</strong>, <strong>Values</strong>에 <strong>smartphone_hours</strong>, <strong>Color</strong>에 <strong>grade</strong>를 선택해 학년별 스마트폰 사용 시간을 막대로 그려 보세요.</li>
        <li><strong>Box Plot</strong>(박스플롯) 위젯을 놓고 <strong>File</strong>과 연결한 뒤, 같은 비교를 그려 보세요. <strong>Subgroups</strong>에 <strong>grade</strong>, <strong>연속 변수</strong>에 <strong>smartphone_hours</strong>를 선택합니다. 막대와 박스 중 어떤 것이 “분포까지 보고 싶을 때” 유리한지 느껴 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 두 수치 관계 → 산점도</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Scatter Plot</strong>을 놓고 <strong>File</strong>과 연결합니다.</li>
        <li>X축에 <strong>sleep_hours</strong>, Y축에 <strong>satisfaction</strong>을 선택해 “수면 시간과 만족도의 관계”를 점으로 확인해 보세요. 레슨 5-2에서 배운 대로 “두 수치형 변수 관계”에는 산점도가 맞습니다.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 한 변수 분포 → Distributions</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Distributions</strong> 위젯을 놓고 <strong>File</strong>과 연결한 뒤, <strong>satisfaction</strong>(만족도) 분포를 히스토그램으로 그려 보세요. “만족도가 어떻게 퍼져 있는가”를 보는 데는 분포 차트가 적합합니다.</li>
      </ol>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>막대 차트와 박스 차트 둘 다 그려 봤을 때, “학년별 크기만 비교하고 싶을 때”는 어떤 게 더 보기 좋았나요? “학년별로 값이 어떻게 퍼져 있는지까지 보고 싶을 때”는 어떤 게 더 도움이 됐나요?</li>
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
