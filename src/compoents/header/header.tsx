import { useState } from 'react';
import './header.css';

type CategoryType =
    | 'All' | 'Web' | 'Interface' | 'Branding' | 'Product'
    | 'Typography' | 'Motion' | 'Illustration' | '3D'
    | 'Editorial' | 'Print' | 'Packaging';

const DESIGN_CATEGORIES: CategoryType[] = [
    'All', 'Web', 'Interface', 'Branding', 'Product',
    'Typography', 'Motion', 'Illustration', '3D',
    'Editorial', 'Print', 'Packaging'
];

export function Header() {
    const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
    const [sortBy, setSortBy] = useState<string>('Recent');

    return (
        <header className="main-header">

            {/* الجزء العلوي */}
            <div className="header-top">
                <div className="header-title-box">
                    <h1 className="header-title">Design</h1>
                    <p className="header-subtitle">The best design inspiration on the Internet.</p>
                </div>

                <div className="header-meta">
                    <span className="last-updated">Last updated 12h ago</span>

                    <div className="select-wrapper">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="Recent">Recent</option>
                            <option value="Popular">Popular</option>
                        </select>
                        <div className="select-icon">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* الجزء السفلي */}
            <div className="categories-container">
                <div className="categories-list">
                    {DESIGN_CATEGORIES.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`category-btn ${isActive ? 'btn-active' : 'btn-inactive'}`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>

        </header>
    );
}