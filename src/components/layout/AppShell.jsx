import { useState, useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef(null);
  const location = useLocation();

  // 레슨/경로가 바뀔 때 메인 스크롤 영역을 맨 위로
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 모바일 헤더 */}
        <header className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-slate-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-600"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-6 h-6 shrink-0">
            <defs>
              <linearGradient id="mh-g1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#2563eb"/><stop offset="100%" stopColor="#60a5fa"/></linearGradient>
              <linearGradient id="mh-g2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#16a34a"/><stop offset="100%" stopColor="#4ade80"/></linearGradient>
              <linearGradient id="mh-g3" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#d97706"/><stop offset="100%" stopColor="#fbbf24"/></linearGradient>
            </defs>
            <circle cx="32" cy="32" r="30" fill="#f0f9ff" stroke="#bfdbfe" strokeWidth="1.5"/>
            <rect x="12" y="34" width="8" height="16" rx="2" fill="url(#mh-g3)"/>
            <rect x="23" y="24" width="8" height="26" rx="2" fill="url(#mh-g2)"/>
            <rect x="34" y="16" width="8" height="34" rx="2" fill="url(#mh-g1)"/>
            <path d="M16 33 L27 23 L38 15 L52 10" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="52" cy="10" r="3" fill="#2563eb"/>
          </svg>
          <span className="font-semibold text-slate-800">GOO's 데이터 분석 with 오렌지3</span>
        </header>

        {/* 메인 콘텐츠 */}
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
