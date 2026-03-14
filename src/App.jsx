import { Routes, Route } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Home from './pages/Home';
import LessonPage from './pages/LessonPage';
import TeachingMaterialsPage from './pages/TeachingMaterialsPage';

export default function App() {
  return (
    <Routes>
      {/* 레슨 요약 수업자료 (메뉴에 링크 없음 → /goo-teaching 으로만 접근) */}
      <Route path="goo-teaching" element={<TeachingMaterialsPage />} />
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="lesson/:lessonId" element={<LessonPage />} />
      </Route>
    </Routes>
  );
}
