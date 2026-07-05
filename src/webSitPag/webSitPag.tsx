import { useMemo, useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import './webSitPag.css';

// تم تعريف البيانات هنا لضمان السرعة والـ Type Safety
interface WebsiteCard {
    id: string;
    mediaUrl: string;
    title: string;
    category: string;
    isMedia: 'image' | 'video';
}

const WEBSITE_ITEMS: WebsiteCard[] = [
    { id: '1', mediaUrl: 'https://cdn.recent.design/items/a5gma5e/0/small.jpg', title: 'A Fistful of Dollars', category: 'Art', isMedia: 'image' },
    { id: '2', mediaUrl: 'https://cdn.recent.design/items/dueyvnn/0/medium.jpg', title: 'Beyond Humanoids', category: 'AI', isMedia: 'image' },
    { id: '3', mediaUrl: 'https://cdn.recent.design/items/m51ac3f/0/small.jpg', title: 'Why advertise on X', category: 'Technology', isMedia: 'image' },
    { id: '4', mediaUrl: 'https://cdn.recent.design/items/slwg0ri/0/small.jpg', title: 'The Renaissance Edition', category: 'Art', isMedia: 'image' },
    { id: '5', mediaUrl: 'https://cdn.recent.design/items/x97ktju/0/480x360.mp4', title: 'UI Design Assets Grid', category: 'SaaS', isMedia: 'video' },
];

const CATEGORIES = ['All', 'AI', 'Agency', 'Portfolio', 'SaaS', 'Ecommerce', 'Technology', 'Finance', 'Art', 'Entertainment', 'Web3'];

export function WebSitPag() {
    const [activeFilter, setActiveFilter] = useState('All');

    // استخدام useMemo لتحسين الأداء ومنع إعادة الحساب غير الضرورية
    const filteredItems = useMemo(() => {
        return activeFilter === 'All'
            ? WEBSITE_ITEMS
            : WEBSITE_ITEMS.filter(item => item.category === activeFilter);
    }, [activeFilter]);

    return (
        <div className="websites-page-container">
            <header className="websites-header">
                <div className="header-left">
                    <h1 className="header-title">Websites</h1>
                    <p className="header-subtitle">The best website inspiration on the Internet.</p>
                </div>
            </header>

            <div className="filter-sorting-bar">
                <div className="filter-buttons-scroll">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <main className="websites-grid">
                {filteredItems.map((item) => (
                    <div key={item.id} className="website-card-wrapper">
                        <div className="image-container">
                            {item.isMedia === 'video' ? (
                                <video
                                    src={item.mediaUrl}
                                    className="website-display-img"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    // خصائص لمنع تحكم المستخدم وجعله ثابتاً كما طلبت
                                    style={{ pointerEvents: 'none' }}
                                />
                            ) : (
                                <img
                                    src={item.mediaUrl}
                                    alt={item.title}
                                    className="website-display-img"
                                    loading="lazy"
                                />
                            )}
                            <div className="arrow-diagonal-btn">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            <Sidebar />
        </div>
    );
}