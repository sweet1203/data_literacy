import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_4_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 4-4에서 배운 <strong>이상치(Outlier)</strong>를 오렌지3 <strong>Box Plot</strong>으로 찾고, 어떻게 보이는지 확인해 봅니다. 이상치는 박스 밖에 떨어진 점으로 나타납니다.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Box Plot으로 이상치 확인하기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Box Plot</strong> 위젯을 캔버스에 놓고 Data Table과 연결합니다.</li>
        <li>Box Plot을 더블 클릭합니다. 표시할 변수로 <strong>smartphone_hours</strong>를 선택하세요.</li>
        <li>박스 위·아래로 <strong>쭉 뻗은 선(whisker)</strong> 바깥에 있는 <strong>점</strong>들이 통계적으로 판별된 이상치 후보입니다. 몇 개의 점이 보이나요?</li>
        <li>같은 방법으로 <strong>sleep_hours</strong>, <strong>study_hours</strong>도 Box Plot으로 열어 이상치가 있는지 확인해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Scatter Plot에서 이상치 점 찍어보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Scatter Plot</strong> 위젯을 놓고 Data Table과 연결합니다.</li>
        <li>X축 <strong>smartphone_hours</strong>, Y축 <strong>sleep_hours</strong>로 설정합니다.</li>
        <li>대부분의 점들과 <strong>멀리 떨어져 있는 점</strong>이 있는지 찾아 보세요. 그 점이 이상치일 가능성이 있습니다. (단, "이상"하다고 무조건 지우면 안 되고, 원인을 생각해 보는 것이 중요합니다.)</li>
      </ol>

      <InfoBox type="tip">
        오렌지3의 Box Plot은 보통 IQR×1.5 기준으로 이상치를 표시합니다. 레슨 4-4에서 배운 IQR 방법과 같은 개념입니다.
      </InfoBox>

      <ExerciseBlock title="과제: 오렌지3에서 아래 질문에 답하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>스마트폰 사용 시간 Box Plot에서 박스 밖에 떨어진 점이 대략 몇 개 보이나요?</li>
          <li>그 점 중 하나에 해당하는 학생을 Data Table에서 찾아보세요. 그 친구의 수면 시간이랑 만족도는 얼마인가요?</li>
          <li>그 학생이 "실수로 잘못 적었을 수도 있다"와 "진짜 특이한 케이스일 수도 있다" 중 어떤 생각이 더 드나요? 이유를 한 줄로 써 보세요.</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/4-4" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 4-4 (이상치 탐정)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
