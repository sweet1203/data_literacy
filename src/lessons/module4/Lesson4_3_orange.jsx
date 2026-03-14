import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_3_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 4-3에서 배운 <strong>추세, 비교, 상관관계</strong> 패턴을 오렌지3 시각화로 찾아 봅니다.
        <strong>Scatter Plot</strong>, <strong>Box Plot</strong>, <strong>Bar Chart</strong>를 사용해 같은 데이터를 다각도로 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결까지 완료된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 산점도(Scatter Plot)로 두 변수 관계 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Scatter Plot</strong> 위젯을 캔버스에 놓습니다.</li>
        <li>Data Table → Scatter Plot으로 연결합니다.</li>
        <li>Scatter Plot을 더블 클릭합니다. 아래쪽 <strong>X axis</strong>에 <strong>smartphone_hours</strong>, <strong>Y axis</strong>에 <strong>sleep_hours</strong>를 선택해 보세요. 점들이 어떤 방향으로 나열되는지(상관 패턴)를 관찰하세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Box Plot으로 그룹 간 비교</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Box Plot</strong> 위젯을 하나 더 캔버스에 놓고 Data Table과 연결합니다.</li>
        <li>Box Plot 설정에서 <strong>그룹으로 나눌 변수(Subgroups)</strong>에 <strong>grade</strong>(학년)를 선택합니다. <strong>연속 변수</strong>에는 <strong>smartphone_hours</strong> 또는 <strong>sleep_hours</strong>를 선택합니다.</li>
        <li>1학년·2학년·3학년별로 스마트폰 사용 시간(또는 수면 시간) 분포가 어떻게 다른지 비교해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: Bar Chart로 범주별 비교 (선택)</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong>에서 <strong>Bar Chart</strong> 위젯을 놓고 Data Table과 연결합니다.</li>
        <li>Bar Chart에서 <strong>grade</strong>를 X축, 평균 <strong>sleep_hours</strong> 등을 Y축으로 설정해 학년별 평균을 막대로 비교해 보세요.</li>
      </ol>

      <ExerciseBlock title="과제: 오렌지3에서 아래 질문에 답하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>산점도에서 스마트폰 사용 시간(X)과 수면 시간(Y)을 보면, 점들이 어떻게 나열돼 있나요? (폰 많이 쓸수록 잠은 적어 보이나요, 많아 보이나요, 별 관계 없나요?)</li>
          <li>학년별 스마트폰 사용 시간 Box Plot에서, 박스 안 세로선(중앙값)이 가장 큰 학년은 1, 2, 3학년 중 어디인가요?</li>
          <li>오늘 본 차트들에서 "이런 느낌이 들었다"를 한 문장으로 써 보세요. (예: "학년이 올라갈수록 스마트폰 쓰는 시간이 늘어나는 것 같다.")</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/4-3" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 4-3 (패턴 찾기)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
