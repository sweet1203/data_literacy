import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson6_4_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 6-4에서 배운 <strong>분석 결과 검증 5단계</strong>(숫자→시각화→상식→민감도→대안)를, 오렌지3에서 만든 결과에 적용해 봅니다. Correlation·Box Plot·Statistics 결과 중 하나를 골라 5단계 체크리스트로 점검하세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: 6-1 오렌지 실습처럼 Data Table에 데이터가 연결되어 있고, <strong>Correlation</strong> 또는 <strong>Box Plot</strong>, <strong>Statistics</strong> 중 최소 하나를 이미 연결해 둔 상태에서 시작하세요.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 검증할 "결과" 하나 정하기</h2>
      <p className="text-sm">
        예: "smartphone_hours와 sleep_hours의 상관계수는 -0.3이다", "3학년의 평균 스마트폰 사용 시간이 1학년보다 크다" 등, 오렌지3에서 본 숫자나 비교 결과를 한 문장으로 적어 보세요.
      </p>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: 5단계 검증 체크리스트 적용</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>1단계 숫자 확인</strong>: 표본 수(200명), 사용한 변수 이름이 맞는지 확인했습니다.</li>
        <li><strong>2단계 시각화 확인</strong>: Scatter Plot·Box Plot 등에서 그 숫자/비교가 실제로 보이는지 확인했습니다.</li>
        <li><strong>3단계 상식 검증</strong>: "스마트폰 많이 쓰면 수면이 줄 수 있다" 등 상식과 맞는지, 이상한 결론은 아닌지 생각해 봤습니다.</li>
        <li><strong>4단계 민감도</strong>: (가능하면) 이상치를 제거하거나 다른 변수를 넣었을 때 결론이 크게 바뀌는지 생각해 봤습니다.</li>
        <li><strong>5단계 대안</strong>: "다른 변수(제3변수)의 영향은 없을까?"를 한 번이라도 질문해 봤습니다.</li>
      </ol>

      <ExerciseBlock title="과제: 오렌지3 결과에 5단계 검증 적용하기">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>본인이 오렌지3에서 선택한 <strong>"검증할 결과" 한 문장</strong>을 그대로 써 보세요.</li>
          <li>5단계 중에서 <strong>가장 중요하다고 생각한 단계 하나</strong>와, 그 이유를 한 줄로 써 보세요.</li>
          <li>그 결과를 "믿어도 된다"고 볼 수 있는지, "주의해야 한다"고 볼 수 있는지 판단하고, 그 이유를 한 문장으로 써 보세요.</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/6-4" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 6-4 (분석 결과 검증 5단계)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
