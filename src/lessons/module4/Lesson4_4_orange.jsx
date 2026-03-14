import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_4_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 4-4에서 배운 <strong>이상치(Outlier)</strong>를 오렌지3 <strong>산점도(Scatter Plot)</strong>로 찾아 봅니다. 박스플롯이 아니라 <strong>산점도에서 전체 추세와 다른 점</strong>을 찾는 방식이에요. 대부분의 점이 이루는 흐름(추세)에서 멀리 떨어진 점이 있다면, 그게 이상치 후보입니다.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 산점도 그리기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Scatter Plot</strong> 위젯을 캔버스에 놓고 Data Table과 연결합니다.</li>
        <li>X축에 <strong>smartphone_hours</strong>, Y축에 <strong>sleep_hours</strong>를 선택합니다.</li>
        <li>점들이 대체로 어떤 방향으로 흐르나요? (예: 스마트폰 사용이 많을수록 수면이 적어지는 추세인지, 구름처럼만 있는지) 이걸 <strong>전체 추세</strong>라고 생각하면 됩니다.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 추세와 다른 점 찾기 (이상치 후보)</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>대부분의 점이 모여 있는 구간을 눈으로 확인한 뒤, <strong>그 추세나 구름 밖에 멀리 떨어진 점</strong>이 있는지 찾아 보세요.</li>
        <li>예: "스마트폰을 많이 쓰는데 수면도 많다"처럼 다른 점들과 다른 위치에 있는 점, 또는 "스마트폰은 적게 쓰는데 수면이 유독 적다" 같은 점이 있나요? 그런 점이 <strong>추세와 다른 점</strong>, 즉 이상치 후보입니다.</li>
        <li>찾은 점이 있다면 Data Table에서 해당 행을 찾아, 그 학생의 다른 변수(만족도, 학년 등)도 살펴 보세요. 입력 오류일 수도 있고, 특이한 사례일 수도 있어요. (이상하다고 무조건 지우면 안 되고, 원인을 생각해 보는 게 중요해요.)</li>
      </ol>

      <InfoBox type="tip">
        산점도에서 "추세와 다른 점"은 숫자 하나만 보는 박스플롯보다 <strong>두 변수의 관계</strong>를 함께 보기 때문에, 이상치를 찾기에 더 직관적일 수 있어요.
      </InfoBox>

      <ExerciseBlock title="생각해보기: 오렌지3에서 아래를 살펴 보기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>산점도(스마트폰 사용 시간 vs 수면 시간)에서 점들이 대체로 어떤 추세(흐름)를 보이나요? 한 줄로 정리해 보세요.</li>
          <li>그 추세와 다른 위치에 있는 점이 있나요? 있다면 대략 몇 개 쯤인지, 어느 쪽(예: 오른쪽 위, 왼쪽 아래)에 있는지 보세요. 없다면 "대부분 점이 비슷한 흐름에 모여 있다"고 정리해도 좋아요.</li>
          <li>추세와 다른 점을 하나 골랐다면, Data Table에서 그 학생의 수면 시간·스마트폰 사용 시간·만족도를 확인해 보세요. 그 점이 이상치 후보라고 생각한 이유를 한 줄로 정리해 보세요.</li>
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
