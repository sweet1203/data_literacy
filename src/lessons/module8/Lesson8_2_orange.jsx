import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson8_2_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 8-2에서 배운 <strong>분류(Classification)</strong>와 <strong>의사결정 트리</strong>를 오렌지3 <strong>Tree</strong> 위젯으로 체험합니다. 학교 설문 데이터로 "학교생활 만족도(높음/낮음)"를 분류하는 트리 모델을 만들어 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: <strong>File</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러옵니다. <strong>satisfaction</strong>(1~10)을 "높음/낮음" 두 범주로 나눈 뒤, <strong>grade</strong>·<strong>smartphone_hours</strong>·<strong>sleep_hours</strong>로 만족도 범주를 예측하는 트리를 만듭니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 목표 변수(클래스) 준비하기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Preprocess</strong> 그룹의 <strong>Discretize</strong> 위젯을 캔버스에 놓습니다.</li>
        <li><strong>File → Discretize</strong>로 연결합니다.</li>
        <li>Discretize를 더블 클릭해 <strong>satisfaction</strong> 변수를 선택하고, 구간을 2개로 나눕니다 (예: 1~6 → "낮음", 7~10 → "높음").</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Tree 위젯으로 분류 모델 만들기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Model</strong> 그룹에서 <strong>Tree</strong> 위젯을 찾아 캔버스에 놓습니다.</li>
        <li><strong>Discretize → Tree</strong>로 연결합니다. Tree는 자동으로 <strong>클래스(목표 변수)</strong>를 인식합니다. 목표가 범주형이어야 합니다.</li>
        <li>Tree 위젯을 더블 클릭하면 <strong>의사결정 트리</strong> 그림이 나옵니다. "첫 번째 질문(루트)"이 어떤 변수인지, Yes/No로 어떻게 나뉘는지 확인하세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 트리 해석해 보기</h2>
      <p className="text-sm">
        트리의 각 노드는 "변수 &gt; 값" 같은 조건입니다. 맨 위에서부터 따라가면 "수면 시간이 7시간 이상이면 만족도 높음" 같은 규칙이 보일 수 있습니다. 레슨 8-2에서 배운 "스무고개"처럼 순서대로 질문하는 구조임을 확인하세요.
      </p>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>트리 그림 맨 위에 적힌 변수 이름이 뭔가요? (첫 번째로 묻는 질문이에요)</li>
          <li>트리를 위에서 아래로 따라가면 "만족도 높음"으로 가는 쪽에는 어떤 조건이 있나요? (예: 수면 6시간 넘고 …)</li>
          <li>이 트리를 보니까 "스무고개처럼 이해하기 쉬웠다" 같은 느낌이 들었나요? 어떻게 느껴졌는지 한 줄로 적어 보세요.</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/8-2" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 8-2 (분류 체험)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
