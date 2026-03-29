import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson5_3_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 5-3처럼 <strong>나만의 차트</strong>를 오렌지3에서 만듭니다. 학교 설문 데이터로 <strong>Scatter Plot</strong>과 <strong>Bar Plot</strong> 중 질문에 맞는 하나를 골라, 제목과 축을 정해 한 장의 차트를 완성해 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: <strong>File</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러온 뒤, 골라 쓸 차트 위젯(<strong>Scatter Plot</strong> / <strong>Bar Plot</strong>)에 <strong>File에서 연결</strong>하고 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 만들고 싶은 질문 정하기</h2>
      <p className="text-sm">
        예: "학년이 올라갈수록 스마트폰 사용 시간이 늘어날까?", "수면 시간과 만족도는 관계가 있을까?", "성별로 운동 일수에 차이가 있을까?" 중 하나를 고르거나, 직접 질문을 정하세요.
      </p>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 질문에 맞는 차트 선택하고 그리기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>
          <strong>먼저 질문의 형태를 확인하세요.</strong> 질문이 "A와 B가 함께 변하나?"처럼 두 수치의 관계를 묻는지, "집단끼리 비교하면 어떤가?"처럼 범주별 비교를 묻는지 구분합니다.
        </li>
        <li>
          <strong>두 수치의 관계를 묻는 질문</strong>은 <strong>Scatter Plot</strong>을 선택합니다. 예: "수면 시간이 길수록 만족도가 높아질까?" X축에는 원인처럼 보고 싶은 수치(수면 시간), Y축에는 결과처럼 보고 싶은 수치(만족도)를 넣습니다.
        </li>
        <li>
          <strong>집단(범주)별 크기 비교 질문</strong>은 <strong>Bar Plot</strong>을 선택합니다. 예: "학년별 평균 스마트폰 사용 시간은 다를까?" X축에는 범주(학년, 성별), Y축에는 비교할 수치(스마트폰 사용 시간)를 넣습니다.
        </li>
        <li>
          같은 질문이라도 변수 선택이 모호하면, "내 질문에 답하려면 어떤 값을 서로 비교해야 하지?"를 먼저 쓰고 그 값에 맞춰 축을 정하세요. 축이 질문 문장과 1:1로 대응되면 적절한 차트를 고른 것입니다.
        </li>
        <li>
          선택한 위젯을 캔버스에 놓고 <strong>File → 위젯</strong>으로 연결한 뒤 축과 변수를 설정합니다.
        </li>
        <li>
          차트 제목은 질문이 바로 드러나게 작성하세요. (예: "수면 시간과 만족도의 관계", "학년별 평균 스마트폰 사용 시간")
        </li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 결과 해석해 보기</h2>
      <p className="text-sm">
        그린 차트를 보고 "무엇이 보이나요?"를 한두 문장으로 정리해 보세요. (예: "3학년이 1학년보다 평균 스마트폰 사용 시간이 더 길다.")
      </p>

      <ExerciseBlock title="정리">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>궁금해서 알아보고 싶었던 질문이 뭐였는지 한 줄로 적어 보세요. (예: 학년 올라갈수록 폰 사용 늘어날까?)</li>
          <li>그 질문에 맞게 어떤 차트를 골랐고, 가로축·세로축에는 뭘 넣었는지 적어 보세요.</li>
          <li>차트를 보니까 "이런 게 보인다" 하는 걸 한 줄로 정리해 보세요.</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/5-3" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 5-3 (나만의 차트 만들기)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
