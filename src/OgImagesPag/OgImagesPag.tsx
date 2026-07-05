import { useState } from 'react';
import { ListCard } from '../components/listCard/listCard';
import './ogImagesPag.css';

export function OgImagesPag() {
    const categories = ['All', 'Web', 'Interface', 'Branding', 'Product', 'Typography', 'Motion', 'Illustration', '3D'];
    const [activeFilter, setActiveFilter] = useState('All');

    // مثال لبيانات العناصر كما تظهر في التصميم
    const items = [
        { id: 1, type: 'card', content: 'large-image' },
        { id: 2, type: 'card', content: 'vertical-image' },
        { id: 3, type: 'card', content: 'image-with-hover' },
    ];

    return (
        <div className="og-wrapper">
            <ListCard />
        </div>
    );
}