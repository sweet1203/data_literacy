import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson8_4_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 8-4에서 배운 <strong>ML 프로젝트 7단계</strong>(문제 정의→데이터→탐색→전처리→학습→평가→해석)를 오렌지3에서 한 번 따라 해 봅니다. File부터 Tree 또는 Linear Regression, <strong>Test and Score</strong>까지 연결해 "나의 첫 ML 워크플로"를 완성하세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기. 가능하면 8-2 또는 8-3 오렌지 실습을 먼저 해 보면 좋습니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 문제 정의와 데이터 연결</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>문제</strong>: 예를 들어 "수면 시간·스마트폰 사용으로 성적 만족도(또는 학년)를 예측할 수 있을까?"로 정합니다.</li>
        <li>File → Data Table로 <strong>school_survey_200.csv</strong>를 불러와 연결합니다. (1~2단계: 문제 정의, 데이터 수집·탐색)</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Train/Test 나누기 (선택)</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Data</strong> 그룹에서 <strong>Data Sampler</strong> 또는 <strong>Test and Score</strong>를 사용해 데이터의 일부만 학습에 쓰고, 나머지는 평가에 쓰도록 할 수 있습니다. Test and Score를 쓰면 자동으로 나누고 평가합니다.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 모델 학습과 평가</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Tree</strong> 또는 <strong>Linear Regression</strong> 위젯을 놓고, Data Table(또는 Sampler 출력)과 연결합니다.</li>
        <li><strong>Test and Score</strong> 위젯을 놓습니다. Data Table(또는 Sampler)을 Test and Score에 연결하고, Tree(또는 Linear Regression) 모델도 Test and Score에 연결합니다. Test and Score는 학습·평가를 한 번에 해 줍니다.</li>
        <li>Test and Score를 더블 클릭하면 <strong>정확도(분류)</strong> 또는 <strong>R²·RMSE(회귀)</strong> 같은 점수가 나옵니다. (6단계: 모델 평가)</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">4단계: 해석하기</h2>
      <p className="text-sm">
        Tree를 썼다면 트리 구조를 보고 "어떤 변수가 결정에 중요한가"를 말로 정리해 보세요. Linear Regression을 썼다면 회귀식의 부호와 크기를 해석해 보세요. (7단계: 해석 및 활용)
      </p>

      <ExerciseBlock title="과제: 오렌지3에서 나의 첫 ML 워크플로 정리하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>본인이 정한 <strong>예측 문제 한 문장</strong>(무엇을 무엇으로 예측했는지)을 써 보세요.</li>
          <li>사용한 <strong>모델 이름</strong>(Tree / Linear Regression 중 하나)과, Test and Score에서 본 <strong>평가 점수</strong>(정확도 또는 R² 등)를 적어 보세요.</li>
          <li>ML 프로젝트 7단계 중에서, 이 실습에서 가장 시간을 많이 쓴 단계(또는 가장 중요하다고 느낀 단계) 하나와 그 이유를 한 줄로 써 보세요.</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/8-4" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 8-4 (나의 첫 ML 프로젝트)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
