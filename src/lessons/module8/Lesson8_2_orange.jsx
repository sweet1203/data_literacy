import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson8_2_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 8-2에서 배운 <strong>분류(Classification)</strong>와 <strong>의사결정 트리</strong>를 오렌지3 <strong>Tree</strong> 위젯으로 체험합니다. 학교 설문 데이터로 "성적만족도(높음/낮음)"를 분류하는 트리 모델을 만들어 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: File로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 불러오기, Data Table 연결. 만족도를 "높음/낮음"처럼 범주로 쓰려면, 오렌지3에서 <strong>Discretize</strong> 등으로 구간을 나누거나, 이미 범주형인 변수(예: grade)를 사용할 수 있습니다. 여기서는 <strong>grade</strong>, <strong>smartphone_hours</strong>, <strong>sleep_hours</strong>를 사용해 <strong>satisfaction</strong>을 예측해 보는 흐름을 안내합니다. (satisfaction이 1~10 수치이면, 7 이상을 "높음", 미만을 "낮음"으로 구간 나누기 가능)
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 목표 변수(클래스) 준비하기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>오렌지3에서 <strong>satisfaction</strong>을 "높음/낮음" 두 범주로 쓰려면, <strong>Preprocess</strong> 그룹의 <strong>Discretize</strong> 위젯을 씁니다. Data Table → Discretize 연결 후, Discretize에서 <strong>satisfaction</strong> 변수를 선택하고, 구간을 2개로 나눕니다 (예: 1~6 → "낮음", 7~10 → "높음"). 출력을 새 Data Table처럼 사용할 수 있게 합니다.</li>
        <li>또는 기존 데이터에서 <strong>grade</strong>(학년)를 예측 대상으로 두고, <strong>smartphone_hours</strong>, <strong>sleep_hours</strong>를 입력 변수로 쓸 수도 있습니다. (학년이 범주형이므로 분류 문제가 됩니다.)</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Tree 위젯으로 분류 모델 만들기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Model</strong> 그룹에서 <strong>Tree</strong> 위젯을 찾아 캔버스에 놓습니다.</li>
        <li>Data Table(또는 Discretize 출력) → Tree로 연결합니다. Tree는 자동으로 <strong>클래스(목표 변수)</strong>를 인식합니다. 목표가 범주형이어야 합니다.</li>
        <li>Tree 위젯을 더블 클릭하면 <strong>의사결정 트리</strong> 그림이 나옵니다. "첫 번째 질문(루트)"이 어떤 변수인지, Yes/No로 어떻게 나뉘는지 확인하세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: 트리 해석해 보기</h2>
      <p className="text-sm">
        트리의 각 노드는 "변수 &gt; 값" 같은 조건입니다. 맨 위에서부터 따라가면 "수면 시간이 7시간 이상이면 만족도 높음" 같은 규칙이 보일 수 있습니다. 레슨 8-2에서 배운 "스무고개"처럼 순서대로 질문하는 구조임을 확인하세요.
      </p>

      <ExerciseBlock title="과제: 오렌지3에서 아래 질문에 답하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>Tree 위젯에서 만든 트리의 <strong>맨 위(루트) 노드</strong>에 적힌 변수 이름은 무엇인가요?</li>
          <li>그 트리를 따라갈 때, "만족도 높음"으로 결론 나오는 쪽의 조건을 한 줄로 써 보세요. (예: "sleep_hours &gt; 6.5 이고 ...")</li>
          <li>의사결정 트리의 장점인 "해석이 쉽다"가 이 실습에서 어떻게 느껴졌는지 한 문장으로 써 보세요.</li>
        </ol>
        <p className="mt-4 pt-4 border-t border-slate-200 text-sm font-medium text-primary-700">
          📌 질문의 답변을 리로스쿨에 제출하세요.
        </p>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/8-2" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 8-2 (분류 체험)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
