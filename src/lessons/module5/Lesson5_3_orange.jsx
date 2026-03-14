import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson5_3_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 5-3처럼 <strong>나만의 차트</strong>를 오렌지3에서 만듭니다. 학교 설문 데이터로 <strong>Scatter Plot</strong>, <strong>Box Plot</strong>, <strong>Bar Chart</strong> 중에서 골라 제목과 축을 정해 한 장의 차트를 완성해 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결된 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 만들고 싶은 질문 정하기</h2>
      <p className="text-sm">
        예: "학년이 올라갈수록 스마트폰 사용 시간이 늘어날까?", "수면 시간과 만족도는 관계가 있을까?", "성별로 운동 일수에 차이가 있을까?" 중 하나를 고르거나, 직접 질문을 정하세요.
      </p>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 질문에 맞는 차트 선택하고 그리기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>비교(범주별 값)</strong> → Bar Chart 또는 Box Plot: X축에 범주(학년, 성별), Y축에 수치 변수를 선택합니다.</li>
        <li><strong>두 수치 관계</strong> → Scatter Plot: X축, Y축에 각각 수치형 변수를 선택합니다.</li>
        <li>선택한 위젯(Scatter Plot / Box Plot / Bar Chart)을 캔버스에 놓고 Data Table과 연결한 뒤, 축과 변수를 설정합니다.</li>
        <li>차트 제목은 위젯 더블 클릭 후 제목 설정이 있으면 "나의 질문"에 맞게 바꿔 보세요. (예: "학년별 평균 스마트폰 사용 시간")</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 결과 해석해 보기</h2>
      <p className="text-sm">
        그린 차트를 보고 "무엇이 보이나요?"를 한두 문장으로 정리해 보세요. (예: "3학년이 1학년보다 평균 스마트폰 사용 시간이 더 길다.")
      </p>

      <ExerciseBlock title="생각해보기: 오렌지3에서 나만의 차트 만들고 정리하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>궁금해서 알아보고 싶었던 질문이 뭐였는지 한번 정리해 보세요. (예: 학년 올라갈수록 폰 사용 늘어날까?)</li>
          <li>그 질문에 맞게 어떤 차트를 골랐고, 가로축·세로축에는 뭘 넣었는지 한번 생각해 보세요.</li>
          <li>차트를 보니까 "이런 게 보인다" 하는 걸 한번 정리해 보세요.</li>
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
