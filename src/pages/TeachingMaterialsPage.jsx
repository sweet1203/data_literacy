import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

// 인쇄·화면 모두 보기 좋은 마크다운 스타일
const markdownComponents = {
  h1: ({ children }) => (
    <h1 className="text-xl font-bold text-slate-900 mt-0 mb-4 pb-2 border-b border-slate-200 print:text-lg print:mb-3">
      {children}
    </h1>
  ),
  h2: ({ children }) => {
    const isAssignment = String(children).includes('레슨 과제');
    return (
      <h2
        data-section={isAssignment ? 'assignment' : undefined}
        className="text-lg font-bold text-slate-800 mt-8 mb-3 print:mt-6 print:mb-2 print:text-base print:break-after-avoid"
      >
        {children}
      </h2>
    );
  },
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-slate-800 mt-5 mb-2 print:mt-4 print:mb-1 print:text-sm print:break-after-avoid">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-slate-700 text-sm leading-relaxed mb-3 print:text-sm print:mb-2">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-700 text-sm print:mb-3 print:pl-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 mb-4 space-y-1 text-slate-700 text-sm print:mb-3 print:pl-4">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed print:leading-snug">{children}</li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-slate-800">{children}</strong>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-4 print:my-3">
      <table className="w-full border-collapse text-sm print:text-xs">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-slate-100 print:bg-slate-100">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => (
    <tr className="border-b border-slate-200 print:border-slate-300">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800 print:px-2 print:py-1.5">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-slate-200 px-3 py-2 text-slate-700 print:px-2 print:py-1.5">
      {children}
    </td>
  ),
  hr: () => <hr className="my-6 border-slate-200 print:my-4 print:break-before-auto" />,
  blockquote: ({ children }) => (
    <blockquote className="pl-4 border-l-4 border-primary-300 text-slate-600 text-sm my-3 print:my-2">
      {children}
    </blockquote>
  ),
};

export default function TeachingMaterialsPage() {
  const [selectedId, setSelectedId] = useState('1');
  const selected = MODULES.find((m) => m.id === selectedId) || MODULES[0];

  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
          .print-content { padding: 0; max-width: 100%; }
          .print-content h2 { page-break-after: avoid; }
          .print-content h2[data-section="assignment"] { page-break-before: page; }
          .print-content h3 { page-break-after: avoid; }
          .print-content table { page-break-inside: avoid; }
          .print-content tr { page-break-inside: avoid; }
        }
      `}</style>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between print:hidden">
          <h1 className="text-lg font-semibold text-slate-800">레슨 요약 수업자료 (비공개)</h1>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
            >
              인쇄 / PDF
            </button>
            <a href="/" className="text-sm text-slate-500 hover:text-slate-700">
              메인으로
            </a>
          </div>
        </header>
        <div className="flex-1 flex overflow-hidden">
          <aside className="w-56 bg-white border-r border-slate-200 overflow-y-auto p-2 print:hidden shrink-0">
            {MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
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
          <main className="flex-1 overflow-y-auto p-6 print:p-0 print:overflow-visible">
            <div className="max-w-4xl mx-auto print:max-w-none print-content">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 print:shadow-none print:border-0 print:rounded-none print:bg-white">
                <h2 className="text-xl font-bold text-slate-800 mb-6 print:mb-4 print:text-lg">
                  {selected.title}
                </h2>
                <div className="lesson-markdown text-slate-700">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                    {selected.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
