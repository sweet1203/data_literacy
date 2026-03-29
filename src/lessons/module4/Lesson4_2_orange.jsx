import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_2_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        레슨 4-2에서 배운 <strong>평균, 중앙값, 퍼짐(Dispersion)</strong>을 오렌지3에서 직접 확인해 봅니다.
        <strong>Feature Statistics</strong> 위젯과 <strong>Distribution</strong>, <strong>Box Plot</strong>으로 데이터의 대표값과 퍼짐을 살펴 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비</strong>: 4-1 오렌지 실습처럼 <strong>File</strong>로 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code>를 불러오고, <strong>Data Table</strong>에 연결해 두세요. 아래 시각화(Distribution, Box Plot)는 <strong>File</strong>에서 직접 연결해도 됩니다.
      </InfoBox>

      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: Feature Statistics 위젯으로 요약 통계 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Data</strong> 그룹을 펼칩니다.</li>
        <li><strong>Feature Statistics</strong> 위젯을 찾아 캔버스에 끌어다 놓습니다.</li>
        <li><strong>Data Table</strong> 위젯의 출력(오른쪽 원)을 <strong>Feature Statistics</strong>의 입력(왼쪽 원)에 선으로 연결합니다.</li>
        <li><strong>Feature Statistics</strong> 위젯을 더블 클릭하면 요약 통계 창이 열립니다. 각 변수별로 <strong>Mean(평균), Median(중앙값), Dispersion(퍼짐)</strong> 등이 표로 나옵니다.</li>
        <li><strong>sleep_hours</strong>(수면 시간), <strong>smartphone_hours</strong>(스마트폰 사용 시간)의 평균·중앙값·Dispersion을 확인해 보세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: Distribution으로 분포 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Distribution</strong> 위젯을 캔버스에 놓습니다.</li>
        <li><strong>Data Table → Distribution</strong>으로 연결합니다. (<strong>File → Distribution</strong>도 가능합니다.)</li>
        <li>Distribution을 더블 클릭한 뒤, 왼쪽에서 변수(예: sleep_hours)를 선택하면 <strong>히스토그램(분포)</strong>이 나타납니다. 값이 어떻게 퍼져 있는지 확인하세요.</li>
      </ol>

      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: Box Plot으로 대표값·퍼짐 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>Visualize</strong> 그룹에서 <strong>Box Plot</strong> 위젯을 캔버스에 놓습니다.</li>
        <li><strong>Data Table → Box Plot</strong>으로 연결합니다. (<strong>File → Box Plot</strong>도 가능합니다.)</li>
        <li>Box Plot을 더블 클릭하고, 표시할 변수를 바꿔 가며 선택해 보세요. 박스 안의 세로선이 <strong>중앙값</strong>, 박스가 값이 몰려 있는 구간(사분위 범위)입니다. 이 데이터에서는 박스 밖에 떨어진 점이 거의 없을 수 있어요.</li>
      </ol>

      <ExerciseBlock title="확인">
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>Feature Statistics에서 <strong>수면 시간(sleep_hours)</strong>의 평균(Mean)과 중앙값(Median)을 보세요. 두 값이 비슷한가요, 아니면 차이가 나나요?</li>
          <li>Box Plot에서 <strong>수면 시간</strong>과 <strong>스마트폰 사용 시간</strong>을 각각 선택해 보세요. 박스 안 세로선(중앙값)이 더 큰 쪽은 어느 변수인가요? 박스(몸통)가 더 넓게 퍼져 보이는 쪽은 어느 변수인가요?</li>
        </ol>
      </ExerciseBlock>

      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link to="/lesson/4-2" className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700">
          ← 레슨 4-2 (기초 통계 이해하기)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
