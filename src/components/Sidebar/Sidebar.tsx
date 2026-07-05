import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // استيراد أدوات التوجيه لربط الامتدادات
import './sidebar.css';

// 1. تعريف واجهة هندسية صريحة لعناصر القائمة
interface MenuItem {
  name: string;
  path: string;
  hasBadge?: boolean;
}

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // 2. معمارية مصفوفة المسارات: ربط 'Websites' بالامتداد الجديد، وباقي العناصر بالرئيسية
  const menuItems: MenuItem[] = [
    { name: 'Design', path: '/' },
    { name: 'Websites', path: '/website-page' }, // هنا يتم توجيهك لصفحتك الجديدة
    { name: 'OG Images', path: '/OgImages-page' },
    { name: 'App Screenshots', path: '/AppScreenshots-page' },
    { name: 'App Icons', path: '/' },
    { name: 'Tools', path: '/', hasBadge: true },
    { name: 'Skills', path: '/' },
    { name: 'Info', path: '/' }
  ];

  // دالة التعامل مع النقر والانتقال للامتداد المعين
  const handleItemClick = (item: MenuItem) => {
    navigate(item.path);
  };

  return (
    <aside className="sidebar-container">
      
      {/* الجزء العلوي */}
      <div>
        <div className="sidebar-top">
          <div className="sidebar-logo" />
          <div className="online-status">
            <span className="online-dot" />
            <span>44 online</span>
          </div>
        </div>

        {/* قائمة التصفح المباشرة */}
        <nav>
          <ul className="sidebar-menu">
            {menuItems.map((item) => {
              // التحقق من العنصر النشط بناءً على رابط الامتداد الحالي في المتصفح لضمان دقة الواجهة
              const isActive = location.pathname === item.path && (item.name === 'Websites' ? true : location.pathname === '/');

              return (
                <li key={item.name}>
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`menu-item ${isActive ? 'active' : ''}`}
                    style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', width: '100%', textAlign: 'left' }}
                  >
                    {item.name}
                    {item.hasBadge && <span className="badge-new">new</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* الجزء السفلي (الإعلان والاشتراك) */}
      <div className="sidebar-footer">
        
        {/* قسم كارت الإعلان المتواجد بالصورة */}
        <div className="ad-box">
          <div className="ad-header">
            <div className="ad-icon">I</div>
            <div>
              <div className="ad-title">Central Icons</div>
              <div className="ad-subtitle">Assets</div>
            </div>
          </div>
          <p className="ad-description">
            2,000+ icons in 30 variants for any design language
          </p>
          <a href="#try" className="ad-button">
            Try Central Icons
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <hr className="sidebar-divider" />

        {/* نص الاشتراك وحقوق الطبع والنشر */}
        <p className="subscribe-text">
          <a href="#subscribe" className="subscribe-link">Subscribe</a> to a weekly email digest joining 263 people yesterday.
        </p>
        
        <div className="copyright-text">
          © 2026 Recent
        </div>
      </div>

    </aside>
  );
}