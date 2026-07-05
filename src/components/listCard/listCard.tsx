import { useState } from 'react';
import { DetailSidebar } from '../DetailSidebar/DetailSidebar'; // استيراد السايدبار التفصيلي الخاص بك
import './listCard.css';

// 1. تعريف واجهة البيانات
interface VideoDesign {
    id: string;
    videoUrl: string;
    title?: string;       // أضفتها اختيارية لكي تمررها للسايدبار عند الحاجة
    description?: string; // ليعرضها السايدبار التفصيلي
}

const videoDesigns: VideoDesign[] = [
    {
        id: '1',
        videoUrl: 'https://cdn.recent.design/items/et4cf5b/0/540x540.mp4',
        title: 'Motion Design A',
        description: 'Immersive abstract fluid motion graphic simulation.'
    },
    {
        id: '2',
        videoUrl: 'https://cdn.recent.design/items/6op94z1/0/572x360.mp4',
        title: 'UI Animation B',
        description: 'Dynamic user interface interaction and transition behavior.'
    },
    {
        id: '3',
        videoUrl: 'https://cdn.recent.design/items/jyrugbr/0/480x600.mp4',
        title: '3D Simulation C',
        description: 'Advanced 3D WebGL render with responsive frame dynamics.'
    },
    {
        id: '4', // تصحيح الـ id المكرر لضمان سلامة الـ Key
        videoUrl: 'https://cdn.recent.design/items/6i8ma9r/0/478x270.mp4',
        title: 'Product Interaction D',
        description: 'SaaS landing page micro-interaction showcase.'
    },
    {
        id: '5', // تصحيح الـ id المكرر
        videoUrl: 'https://cdn.recent.design/items/l79xrlx/0/492x360.mp4',
        title: 'Creative Layout E',
        description: 'Fluid grid transition using layout animations.'
    },
    {
        id: '6', // تصحيح الـ id المكرر
        videoUrl: 'https://cdn.recent.design/items/eo2zyqk/0/540x540.mp4',
        title: 'Dark Mode Experience F',
        description: 'Premium dark aesthetic design flow for dashboard apps.'
    },
];

export function ListCard() {
    // 2. حالة (State) لتخزين بيانات الفيديو المختار وعرض السايدبار
    const [selectedVideo, setSelectedVideo] = useState<VideoDesign | null>(null);

    return (
        <>
            <div className="video-grid-container">
                {videoDesigns.map((video) => (
                    <div
                        key={video.id}
                        className="list-card-container"
                        onClick={() => setSelectedVideo(video)} /* 3. حدث النقر لتخزين البيانات الحالية */
                        style={{ cursor: 'pointer' }}
                    >
                        {/* حاوية مشغل الفيديو المدمج مع منع التحكم والنقر */}
                        <div className="video-wrapper">
                            <video
                                className="video-player"
                                src={video.videoUrl}
                                autoPlay
                                muted     /* إجباري لتفعيل الـ autoPlay في المتصفح */
                                loop      /* لاستمرار الحركة الدائمة للفيديو */
                                playsInline
                                style={{ pointerEvents: 'none' }}
                            />
                        </div>

                        {/* زر السهم المائل الاحترافي - مدمج داخل الحاوية بشكل صحيح */}
                        <div className="card-arrow-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>

                        <div className="list-card-content">
                            {/* يمكنك عرض العناوين هنا إذا أردت */}
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. استدعاء السايدبار الشرطي وتمرير البيانات وإغلاقها */}
            {selectedVideo && (
                <DetailSidebar
                    data={selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </>
    );
}