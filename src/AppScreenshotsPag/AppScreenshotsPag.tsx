import { useState } from 'react';
import { DetailSidebar } from '../compoents/DetailSidebar/DetailSidebar';
import './AppScreenshotsPag.css';

interface ScreenshotItem {
    id: string;
    imageUrl: string;
    count: number;
}

const screenshots: ScreenshotItem[] = [
    { id: '1', imageUrl: 'https://cdn.recent.design/items/14n2knf/0.mp4', count: 6 },
    { id: '2', imageUrl: 'https://cdn.recent.design/items/pl1e6bi/0.mp4', count: 6 },
    { id: '3', imageUrl: 'https://cdn.recent.design/items/9ekcmlx/0.webp', count: 6 },
    { id: '4', imageUrl: 'https://cdn.recent.design/items/3fx6gpg/0.webp', count: 6 },
];

export function AppScreenshots() {
    const [selectedItem, setSelectedItem] = useState<ScreenshotItem | null>(null);

    // دالة فحص الرابط لتعرف هل هو فيديو أم صورة
    const isVideo = (url: string) => url.endsWith('.mp4');

    return (
        <div className="screenshots-page">
            <div className="screenshots-masonry-grid">
                {screenshots.map((item) => (
                    <div
                        key={item.id}
                        className="screenshot-card"
                        onClick={() => setSelectedItem(item)} // ربط النقر بالـ DetailSidebar
                    >
                        {isVideo(item.imageUrl) ? (
                            <video src={item.imageUrl} className="screen-img" autoPlay muted loop playsInline />
                        ) : (
                            <img src={item.imageUrl} alt="App screen" className="screen-img" />
                        )}
                        <div className="count-badge">{item.count}</div>
                    </div>
                ))}
            </div>

            {/* عرض السايدبار التفصيلي عند اختيار عنصر */}
            {selectedItem && (
                <DetailSidebar
                    data={{
                        id: selectedItem.id,
                        videoUrl: selectedItem.imageUrl,
                        title: 'App Screenshot Design'
                    }}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </div>
    );
}