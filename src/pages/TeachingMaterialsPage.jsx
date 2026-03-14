import { useState } from 'react';

// 레슨 요약 md를 raw 텍스트로 불러옵니다.
import module1 from '@docs/module1_lesson_materials.md?raw';
import module2 from '@docs/module2_lesson_materials.md?raw';
import module3 from '@docs/module3_lesson_materials.md?raw';
import module4 from '@docs/module4_lesson_materials.md?raw';
import module5 from '@docs/module5_lesson_materials.md?raw';
import module6 from '@docs/module6_lesson_materials.md?raw';
import module7 from '@docs/module7_lesson_materials.md?raw';
import module8 from '@docs/module8_lesson_materials.md?raw';

const MODULES = [
  { id: '1', title: '모듈 1: 데이터란 무엇인가', content: module1 },
  { id: '2', title: '모듈 2: 질문을 설계하라', content: module2 },
  { id: '3', title: '모듈 3: 데이터는 어디서 오는가', content: module3 },
  { id: '4', title: '모듈 4: 데이터 탐색하기', content: module4 },
  { id: '5', title: '모듈 5: 시각화로 이야기하기', content: module5 },
  { id: '6', title: '모듈 6: 분석하고 검증하기', content: module6 },
  { id: '7', title: '모듈 7: AI 활용과 데이터 윤리', content: module7 },
  { id: '8', title: '모듈 8: 미니 ML 실험실', content: module8 },
];

export default function TeachingMaterialsPage() {
  const [selectedId, setSelectedId] = useState('1');
  const selected = MODULES.find((m) => m.id === selectedId) || MODULES[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-slate-800">레슨 요약 수업자료 (비공개)</h1>
        <a
          href="/"
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          메인으로
        </a>
      </header>
      <div className="flex-1 flex overflow-hidden">
        <aside className="w-56 bg-white border-r border-slate-200 overflow-y-auto p-2">
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedId(m.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedId === m.id
                  ? 'bg-primary-100 text-primary-800 font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              모듈 {m.id}
            </button>
          ))}
        </aside>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-slate-800 mb-4">{selected.title}</h2>
            <pre className="whitespace-pre-wrap font-sans text-sm text-slate-700 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              {selected.content}
            </pre>
          </div>
        </main>
      </div>
    </div>
  );
}
