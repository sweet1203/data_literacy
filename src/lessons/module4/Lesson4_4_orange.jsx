import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_4_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 4-4에서 배운 <strong>이상치(Outlier)</strong>를 오렌지3 <strong>Box Plot</strong>과 <strong>산점도</strong>로 확인해 봅니다. 이 설문 데이터에서는 대부분 변수에 박스 밖 이상치가 잘 안 나올 수 있어요. 그래도 "박스 밖 점"이 어떻게 보이는지, 산점도에서 멀리 떨어진 점이 있는지는 찾아 보며 개념을 익혀요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Box Plot으로 박스 밖 점 확인하기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Box Plot</strong> 위젯을 캔버스에 놓고 Data Table과 연결합니다.</li>
        <li>Box Plot을 더블 클릭한 뒤, <strong>smartphone_hours</strong>, <strong>sleep_hours</strong>, <strong>satisfaction</strong> 등 변수를 바꿔 가며 선택해 보세요.</li>
        <li>박스 위·아래로 쭉 뻗은 선(whisker) 바깥에 <strong>점</strong>이 있으면 그게 통계상 이상치 후보예요. 이 데이터에서는 대부분 변수에 그런 점이 없거나 매우 적을 수 있어요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Scatter Plot에서 멀리 떨어진 점 찾기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Scatter Plot</strong> 위젯을 놓고 Data Table과 연결합니다.</li>
        <li>X축 <strong>smartphone_hours</strong>, Y축 <strong>sleep_hours</strong>로 설정합니다.</li>
        <li>점들이 대체로 모여 있는지, 아니면 <strong>멀리 떨어진 점</strong>이 있는지 살펴 보세요. 멀리 떨어진 점이 있으면 나중에 "이상치일 수 있나?"를 생각해 보면 좋아요. (이상하다고 무조건 지우면 안 되고, 원인을 생각해 보는 게 중요해요.)</li>
      </ol>

      <InfoBox type="tip">
        오렌지3의 Box Plot은 보통 IQR×1.5 기준으로 이상치를 표시합니다. 레슨 4-4에서 배운 IQR 방법과 같은 개념입니다.
      </InfoBox>

      <ExerciseBlock title="생각해보기: 오렌지3에서 아래를 한번 생각해 보기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>여러 변수를 Box Plot으로 바꿔 보면서, 박스 밖에 떨어진 점이 보이는 변수가 있나요? 있으면 어떤 변수인지, 대략 몇 개인지 한번 생각해 보세요. 없으면 "없다"고 정리해도 좋아요.</li>
          <li>산점도(스마트폰 사용 시간 vs 수면 시간)에서 대부분의 점들과 조금 멀리 떨어진 점이 있나요? 있다면 그 점이 있는 대략적인 위치(예: 오른쪽 아래 쪽)를, 없다면 "점들이 고르게 모여 있다"처럼 한번 생각해 보세요.</li>
          <li>박스 밖 점이나 산점도에서 멀리 떨어진 점이 있었다면, Data Table에서 그 학생의 수면 시간·만족도를 찾아 보세요. 없었다면 "이 데이터에서는 이상치로 보이는 값이 거의 없었다"를 한번 정리해 보세요.</li>
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
