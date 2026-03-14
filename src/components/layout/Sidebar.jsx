import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { modules } from '../../data/lessonRegistry';
import useProgressStore from '../../stores/progressStore';
import Icon from '../common/Icon';

const iconColorMap = {
  primary: 'text-primary-500',
  accent: 'text-accent-500',
  warm: 'text-warm-600',
};

// 오렌지3 실습이 포함된 레슨 ID (사이드바에서 🍊 표시)
const lessonsWithOrange = new Set(['4-1', '4-2', '4-3', '4-4', '5-2', '5-3', '6-1', '6-3', '6-4', '8-2', '8-3', '8-4']);

// 오렌지 실습 모아두기 링크 목록 (lessonId-orange, 표시 제목)
const orangePracticeLinks = [
  { id: '4-1-orange', title: '4-1 데이터 읽기 기초' },
  { id: '4-2-orange', title: '4-2 기초 통계 이해하기' },
  { id: '4-3-orange', title: '4-3 패턴 찾기' },
  { id: '4-4-orange', title: '4-4 이상치 탐정' },
  { id: '5-2-orange', title: '5-2 올바른 차트 선택하기' },
  { id: '5-3-orange', title: '5-3 나만의 차트 만들기' },
  { id: '6-1-orange', title: '6-1 상관관계 놀이터' },
  { id: '6-3-orange', title: '6-3 비교 분석' },
  { id: '6-4-orange', title: '6-4 분석 결과 검증 5단계' },
  { id: '8-2-orange', title: '8-2 분류 체험' },
  { id: '8-3-orange', title: '8-3 회귀 체험' },
  { id: '8-4-orange', title: '8-4 나의 첫 ML 프로젝트' },
];

export default function Sidebar({ open, onClose }) {
  const { lessonId } = useParams();
  const { isLessonCompleted, getModuleProgress } = useProgressStore();
  const [orangeFolderOpen, setOrangeFolderOpen] = useState(false);

  return (
    <>
      {/* 모바일 오버레이 */}
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200 overflow-y-auto transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* 로고 */}
        <NavLink to="/" className="flex items-center gap-2 px-5 py-4 border-b border-slate-100" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-7 h-7 shrink-0">
            <defs>
              <linearGradient id="sb-g1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#2563eb"/><stop offset="100%" stopColor="#60a5fa"/></linearGradient>
              <linearGradient id="sb-g2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#16a34a"/><stop offset="100%" stopColor="#4ade80"/></linearGradient>
              <linearGradient id="sb-g3" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#d97706"/><stop offset="100%" stopColor="#fbbf24"/></linearGradient>
            </defs>
            <circle cx="32" cy="32" r="30" fill="#f0f9ff" stroke="#bfdbfe" strokeWidth="1.5"/>
            <rect x="12" y="34" width="8" height="16" rx="2" fill="url(#sb-g3)"/>
            <rect x="23" y="24" width="8" height="26" rx="2" fill="url(#sb-g2)"/>
            <rect x="34" y="16" width="8" height="34" rx="2" fill="url(#sb-g1)"/>
            <path d="M16 33 L27 23 L38 15 L52 10" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="33" r="2.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/>
            <circle cx="27" cy="23" r="2.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/>
            <circle cx="38" cy="15" r="2.5" fill="#fff" stroke="#2563eb" strokeWidth="1.5"/>
            <circle cx="52" cy="10" r="3" fill="#2563eb"/>
            <circle cx="48" cy="40" r="8" fill="none" stroke="#1e40af" strokeWidth="2.5"/>
            <circle cx="48" cy="40" r="5" fill="#dbeafe" opacity="0.5"/>
            <line x1="54" y1="46" x2="59" y2="51" stroke="#1e40af" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <span className="font-bold text-lg text-slate-800">GOO's 데이터 분석 with 오렌지3</span>
        </NavLink>

        {/* 챕터 목록 */}
        <nav className="p-3">
          {modules.map((mod) => {
            const progress = getModuleProgress(mod.id);
            const progressPct = Math.round(progress * 100);

            return (
              <div key={mod.id} className="mb-2">
                {/* 챕터 헤더 */}
                <div className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-600 uppercase tracking-wide">
                  <Icon name={mod.icon} size={16} className={iconColorMap[mod.color] || 'text-slate-500'} />
                  <span className="flex-1 truncate">{mod.title}</span>
                  {progressPct > 0 && (
                    <span className="text-xs font-normal text-primary-500">{progressPct}%</span>
                  )}
                </div>

                {/* 진행률 바 */}
                {progressPct > 0 && (
                  <div className="mx-3 mb-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 rounded-full transition-all duration-500"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                )}

                {/* 레슨 목록 */}
                <ul className="space-y-0.5">
                  {mod.lessons.map((lesson) => {
                    const isActive = lessonId === lesson.id;
                    const completed = isLessonCompleted(lesson.id);

                    return (
                      <li key={lesson.id}>
                        <NavLink
                          to={`/lesson/${lesson.id}`}
                          onClick={onClose}
                          className={`flex items-center gap-2 px-3 py-2 mx-1 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-primary-50 text-primary-700 font-medium'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          {/* 완료 체크 */}
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            completed
                              ? 'bg-accent-500 border-accent-500 text-white'
                              : isActive
                                ? 'border-primary-400'
                                : 'border-slate-300'
                          }`}>
                            {completed && <Icon name="check" size={12} className="text-white" />}
                          </span>
                          <span className="truncate flex-1 min-w-0">
                            <span className="text-slate-400 font-medium shrink-0 mr-1.5">{lesson.id}</span>
                            {lesson.title}
                          </span>
                          {lessonsWithOrange.has(lesson.id) && (
                            <span className="shrink-0" title="오렌지3 실습 포함">🍊</span>
                          )}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* 오렌지 실습 모아두기 폴더 */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={() => setOrangeFolderOpen((v) => !v)}
              className="flex items-center gap-2 w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors text-left"
            >
              <span className="shrink-0">🍊</span>
              <span className="flex-1 truncate">오렌지 실습 모아두기</span>
              <span className="shrink-0 text-amber-500 text-xs">
                {orangeFolderOpen ? '▼' : '▶'}
              </span>
            </button>
            {orangeFolderOpen && (
              <ul className="mt-1 space-y-0.5 pl-1">
                {orangePracticeLinks.map((item) => {
                  const isActive = lessonId === item.id;
                  return (
                    <li key={item.id}>
                      <NavLink
                        to={`/lesson/${item.id}`}
                        onClick={onClose}
                        className={`flex items-center gap-2 px-3 py-2 mx-1 rounded-lg text-sm transition-colors ${
                          isActive ? 'bg-amber-100 text-amber-800 font-medium' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span className="truncate flex-1 min-w-0">{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
}
