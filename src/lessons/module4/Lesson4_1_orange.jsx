import { Link } from 'react-router-dom';
import InfoBox from '../../components/common/InfoBox';
import ExerciseBlock from '../../components/common/ExerciseBlock';

export default function Lesson4_1_orange() {
  return (
    <div className="space-y-6 text-slate-700 leading-relaxed">
      <p className="text-lg">
        이 페이지에서는 <strong>오렌지3(Orange 3)</strong>를 켜고, 데이터 파일을 불러온 뒤
        <strong>표(Data Table)</strong>로 탐색하는 방법을 단계별로 따라 합니다.
        레슨 4-1에서 배운 "행·열·셀"이 오렌지3에서 어떻게 보이는지 확인해 보세요.
      </p>

      <InfoBox type="key">
        <strong>준비물</strong>
        <ul className="mt-1 space-y-0.5">
          <li>• 오렌지3 설치 완료 (공식 사이트에서 다운로드)</li>
          <li>• 학교 설문 데이터 파일: <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code></li>
        </ul>
        데이터 파일은 이 사이트의 <strong>공개 데이터</strong>를 사용하거나, 선생님께 받은 파일을 사용하세요.
        (GOO's 데이터 분석 with 오렌지3 사이트에서 제공하는 CSV를 다운로드해도 됩니다.)
      </InfoBox>

      {/* 1단계 */}
      <h2 className="text-xl font-bold text-slate-800 mt-8">1단계: 오렌지3 실행하고 캔버스 확인하기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>오렌지3 프로그램을 실행합니다.</li>
        <li>가운데 넓은 빈 공간이 <strong>캔버스</strong>입니다. 여기에 위젯(도구)을 올려 놓고 서로 연결합니다.</li>
        <li>왼쪽에 위젯 목록이 보입니다. 찾기 어렵다면 상단 메뉴 <strong>View → Widgets</strong>로 열 수 있습니다.</li>
      </ol>

      {/* 2단계 */}
      <h2 className="text-xl font-bold text-slate-800 mt-8">2단계: File 위젯으로 데이터 불러오기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Data</strong> 그룹을 펼칩니다.</li>
        <li><strong>File</strong> 위젯을 찾아서 <strong>캔버스로 끌어다 놓습니다</strong> (드래그 앤 드롭).</li>
        <li>캔버스에 놓인 <strong>File</strong> 위젯을 <strong>더블 클릭</strong>합니다.</li>
        <li>열리는 창에서 <strong>Browse</strong> 버튼을 누릅니다.</li>
        <li>컴퓨터에서 <code className="bg-slate-100 px-1 rounded">school_survey_200.csv</code> 파일이 있는 폴더로 이동해 해당 파일을 선택한 뒤 <strong>열기</strong>를 누릅니다.</li>
        <li>파일이 선택되면 오렌지3가 자동으로 "행 구분자", "열 구분자"를 맞춥니다. 그대로 <strong>OK</strong> 또는 <strong>Apply</strong>를 누릅니다.</li>
      </ol>
      <InfoBox type="tip">
        CSV 파일이 한글이 깨지면, File 위젯 창에서 <strong>Encoding</strong>을 <strong>UTF-8</strong>로 바꿔 보세요.
      </InfoBox>

      {/* 3단계 */}
      <h2 className="text-xl font-bold text-slate-800 mt-8">3단계: Data Table 위젯으로 표 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>왼쪽 위젯 목록에서 <strong>Data</strong> 그룹 안의 <strong>Data Table</strong> 위젯을 찾습니다.</li>
        <li><strong>Data Table</strong>을 캔버스에 끌어다 놓습니다.</li>
        <li><strong>File</strong> 위젯 오른쪽의 작은 원(출력 포트)을 마우스로 누른 채로 <strong>Data Table</strong> 위젯의 왼쪽 원(입력 포트)까지 끌어서 선으로 연결합니다.</li>
        <li>연결이 되면 Data Table 위젯에 표가 자동으로 나타납니다. <strong>Data Table을 더블 클릭</strong>하면 표가 큰 창으로 열립니다.</li>
      </ol>
      <p className="text-sm text-slate-600 mt-2">
        표에서 <strong>한 행 = 한 명의 학생</strong>, <strong>한 열 = 한 가지 변수</strong>(학년, 성별, 수면 시간 등)입니다. 레슨 4-1에서 배운 "행·열·셀"과 똑같은 구조입니다.
      </p>

      {/* 4단계 */}
      <h2 className="text-xl font-bold text-slate-800 mt-8">4단계: 열 이름과 데이터 확인하기</h2>
      <p className="text-sm">
        Data Table 창 맨 위에는 <strong>열 이름(변수 이름)</strong>이 나옵니다. 이 데이터에는 아래와 같은 열이 있습니다.
      </p>
      <div className="my-3 p-3 bg-slate-50 rounded-lg text-xs font-mono text-slate-700 overflow-x-auto">
        id · grade · gender · smartphone_hours · sleep_hours · fatigue · satisfaction · exercise_days · study_hours
      </div>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li><strong>grade</strong>: 학년(1, 2, 3)</li>
        <li><strong>gender</strong>: 성별(남, 여)</li>
        <li><strong>smartphone_hours</strong>: 하루 스마트폰 사용 시간(숫자)</li>
        <li><strong>sleep_hours</strong>: 하루 수면 시간(숫자)</li>
        <li><strong>satisfaction</strong>: 학교생활 만족도(1~10 등)</li>
        <li>나머지 열도 표를 스크롤하면서 의미를 확인해 보세요.</li>
      </ol>

      {/* 5단계 */}
      <h2 className="text-xl font-bold text-slate-800 mt-8">5단계: 정렬 해 보기</h2>
      <ol className="list-decimal list-inside space-y-2 text-sm">
        <li>Data Table 창에서 <strong>열 이름(예: smartphone_hours)</strong>을 <strong>한 번 클릭</strong>하면 그 열을 기준으로 <strong>오름차순</strong>(작은 값 → 큰 값)으로 정렬됩니다.</li>
        <li>같은 열 이름을 <strong>한 번 더 클릭</strong>하면 <strong>내림차순</strong>(큰 값 → 작은 값)으로 바뀝니다.</li>
        <li><strong>sleep_hours</strong> 열을 클릭해서 수면 시간이 가장 짧은 학생이 맨 위에 오도록 해 보세요.</li>
      </ol>

      {/* 6단계 */}
      <h2 className="text-xl font-bold text-slate-800 mt-8">6단계: 통계 요약 보기 (선택)</h2>
      <p className="text-sm">
        오렌지3 Data Table에서는 열에 대한 간단한 통계도 볼 수 있습니다. (버전에 따라 "Statistics" 버튼이나 열 우클릭 메뉴에 "Statistics"가 있을 수 있습니다.) 있으면 수치형 열의 평균, 최솟값, 최댓값을 확인해 보세요.
      </p>

      {/* 과제 */}
      <ExerciseBlock title="확인">
        <p className="text-sm text-slate-600 mb-4">
          Data Table에서 정렬·스크롤로 찾아 보면서 아래를 확인해 보세요.
        </p>
        <ol className="list-decimal list-inside space-y-3 text-sm">
          <li>1번 학생은 몇 학년이고, 하루에 스마트폰을 몇 시간 쓰나요?</li>
          <li>수면 시간이 가장 많은 학생은 몇 시간을을 자나요? (수면 시간 열 클릭해서 정렬한 뒤 맨 위 값 보기)</li>
          <li>학교생활 만족도가 10점인 친구는 몇 명이나 있나요? (만족도 열 정렬해서 10인 사람 수 세기)</li>
        </ol>
      </ExerciseBlock>

      {/* 돌아가기 */}
      <div className="mt-10 pt-6 border-t border-slate-200">
        <Link
          to="/lesson/4-1"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          ← 레슨 4-1 (데이터 읽기 기초)로 돌아가기
        </Link>
      </div>
    </div>
  );
}
