import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson8_4_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 8-4에서 배운 <strong>ML 프로젝트 7단계</strong>(문제 정의→데이터→탐색→전처리→학습→평가→해석)를 오렌지3에서 한 번 따라 해 봅니다. <strong>File</strong>에서 시작해 모델 위젯과 <strong>Test and Score</strong>까지 연결해 "나의 첫 ML 워크플로"를 완성하세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: <strong>File</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러옵니다. 8-2·8-3 오렌지 실습을 먼저 해 보면 도움이 됩니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 문제 정의와 데이터 연결</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>문제</strong>: 예를 들어 "수면 시간·스마트폰 사용으로 학교생활 만족도를 예측할 수 있을까?"로 정합니다.</li>
        <li><strong>File</strong> 위젯으로 <strong>school_survey_200.csv</strong>를 불러옵니다. (1~2단계: 문제 정의, 데이터 수집·탐색)</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Test and Score로 평가 준비</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Evaluate</strong> 그룹에서 <strong>Test and Score</strong> 위젯을 캔버스에 놓습니다. 오렌지3가 데이터를 학습용·평가용으로 나누고 점수를 내 주는 흐름으로 사용합니다.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 모델 학습과 평가</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>분류를 할 때: <strong>Tree</strong> 위젯을 캔버스에 놓고 <strong>File → Tree</strong>로 연결합니다.</li>
        <li>수치를 예측할 때: <strong>Linear Regression</strong> 위젯을 캔버스에 놓고 <strong>File → Linear Regression</strong>으로 연결합니다.</li>
        <li><strong>Test and Score</strong> 위젯의 입력 포트에 맞게 <strong>File</strong>에서 온 데이터와 모델 위젯을 연결합니다. (캔버스에 표시되는 연결 안내를 따라 맞춥니다.)</li>
        <li>Test and Score를 더블 클릭하면 <strong>정확도(분류)</strong>나 <strong>R²·RMSE(회귀)</strong> 같은 점수가 나옵니다. (6단계: 모델 평가)</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">4단계: 해석하기</h2>
      <p className="text-sm">
        Tree를 썼다면 트리 구조를 보고 "어떤 변수가 결정에 중요한가"를 말로 정리해 보세요. Linear Regression을 썼다면 회귀식의 부호와 크기를 해석해 보세요. (7단계: 해석 및 활용)
      </p>

      <ExerciseBlock title="정리">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>오늘 "이걸 예측해 보자"고 정한 게 뭐였는지 한 문장으로 적어 보세요. (무엇을, 어떤 정보로 예측했는지)</li>
          <li>쓴 모델 이름(Tree, Linear Regression 등)과 Test and Score에서 나온 점수(정확도나 R² 등)를 적어 보세요.</li>
          <li>7단계 중에서 제일 중요하다고 느낀 단계 하나와, 그 이유를 적어 보세요.</li>
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
