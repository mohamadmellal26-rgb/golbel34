import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // استيراد أدوات التوجيه القياسية
import './App.css';
import { HomePage } from './homePag/homePag';
import { WebSitPag } from './webSitPag/webSitPag';
import { OgImagesPag } from './OgImagesPag/OgImagesPag';
import { AppScreenshots } from './AppScreenshotsPag/AppScreenshotsPag';
import { Sidebar } from './compoents/Sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. الامتداد الرئيسي (/) يعرض لك الصفحة الرئيسية التي تحتوي على شبكة الكروت */}
        <Route path="/" element={<HomePage />} />

        {/* 2. عند الانتقال للامتداد المحدد (/website-page)، يختفي الهوم بيج ويظهر الـ WebSitPag فوراً */}
        <Route path="/website-page" element={<WebSitPag />} />
        <Route path="/OgImages-page" element={<OgImagesPag />} />
        <Route path="/AppScreenshots-page" element={<AppScreenshots />} />

        {/* 3. حماية برمجية: إذا دخل المستخدم على أي امتداد عشوائي غير موجود، يتم توجيهه تلقائياً للرئيسية */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Sidebar />
    </Router>
  );
}

export default App;