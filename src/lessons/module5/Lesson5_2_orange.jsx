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
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 학년별 비교 → 막대/박스 차트</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong>에서 <strong>Bar Chart</strong> 위젯을 놓고 Data Table과 연결합니다.</li>
        <li>Bar Chart 설정에서 <strong>범주(X축)</strong>에 <strong>grade</strong>, <strong>값(Y축)</strong>에 <strong>smartphone_hours</strong>의 평균(Mean)을 선택해 "학년별 평균 스마트폰 사용 시간"을 막대로 그려 보세요.</li>
        <li>같은 비교(학년별 스마트폰 사용)를 <strong>Box Plot</strong>으로도 그려 보세요. Subgroups에 grade, 연속 변수에 smartphone_hours를 선택합니다. 막대와 박스 중 어떤 것이 "분포까지 보고 싶을 때" 유리한지 느껴 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 두 수치 관계 → 산점도</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Scatter Plot</strong>을 놓고 Data Table과 연결합니다.</li>
        <li>X축 <strong>sleep_hours</strong>, Y축 <strong>satisfaction</strong>을 선택해 "수면 시간과 만족도의 관계"를 점으로 확인해 보세요. 레슨 5-2에서 배운 대로 "두 수치형 변수 관계"에는 산점도가 맞습니다.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 한 변수 분포 → Distributions</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Distributions</strong> 위젯으로 <strong>satisfaction</strong>(만족도) 분포를 히스토그램으로 그려 보세요. "만족도가 어떻게 퍼져 있는가"를 보는 데는 분포 차트가 적합합니다.</li>
      </ol>

      <ExerciseBlock title="생각해보기: 오렌지3에서 아래를 살펴 보기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>막대 차트와 박스 차트 둘 다 그려 봤을 때, "학년별 평균만 비교하고 싶을 때"는 어떤 게 더 보기 좋았나요? "학년별로 값이 어떻게 퍼져 있는지까지 보고 싶을 때"는 어떤 게 더 도움이 됐나요?</li>
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
