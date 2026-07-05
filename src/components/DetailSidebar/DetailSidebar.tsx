import './DetailSidebar.css';

interface DetailSidebarProps {
    data: {
        id: string;
        videoUrl: string;
        title?: string;
        description?: string;
        // أضفت هذه الخصائص الإضافية لتطابق الصورة
        author?: string;
        authorAvatar?: string;
        category?: string;
        source?: string;
        style?: string;
        color?: string;
        interaction?: string;
    };
    onClose: () => void;
    // يمكنك إضافة onNext و onPrev مستقبلاً للتنقل بين الفيديوهات
    onNext?: () => void;
    onPrev?: () => void;
}

export function DetailSidebar({ data, onClose, onNext, onPrev }: DetailSidebarProps) {
    return (
        <div className="split-modal-overlay">

            {/* القسم الأيسر: السايدبار الذي يحتوي على التفاصيل */}
            <aside className="split-modal-sidebar">

                {/* أزرار التحكم العلوية */}
                <div className="modal-header-actions">
                    <button className="circle-icon-btn" onClick={onClose} aria-label="Close">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="modal-nav-actions">
                        <button className="circle-icon-btn" onClick={onPrev} aria-label="Previous">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button className="circle-icon-btn" onClick={onNext} aria-label="Next">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* محتوى السايدبار */}
                <div className="split-modal-content">
                    <div className="meta-breadcrumb">Design</div>
                    <h2 className="meta-title">{data.title || 'Floating Preview Chips'}</h2>

                    <div className="meta-author-section">
                        <img
                            src={data.authorAvatar || 'https://i.pravatar.cc/150?img=11'}
                            alt="Author Avatar"
                            className="author-avatar"
                        />
                        <span className="author-name">{data.author || 'Nitish Khagwal'}</span>
                    </div>

                    <p className="meta-description">
                        {data.description || 'A hover interaction concept where pill-shaped label chips reveal floating preview cards with 3D emoji illustrations, demonstrating a playful and smooth microinteraction pattern.'}
                    </p>

                    {/* جدول الخصائص (Key-Value) */}
                    <div className="meta-details-table">
                        <div className="meta-row">
                            <span className="meta-key">Source</span>
                            <span className="meta-value">{data.source || 'X'}</span>
                        </div>
                        <div className="meta-row">
                            <span className="meta-key">Category</span>
                            <span className="meta-value">{data.category || 'Motion'}</span>
                        </div>
                        <div className="meta-row">
                            <span className="meta-key">Style</span>
                            {/* استخدام \n لعمل سطر جديد كما في الصورة */}
                            <span className="meta-value">{data.style || 'Minimal\nClean'}</span>
                        </div>
                        <div className="meta-row">
                            <span className="meta-key">Color</span>
                            <span className="meta-value">{data.color || 'Light'}</span>
                        </div>
                        <div className="meta-row">
                            <span className="meta-key">Interaction</span>
                            <span className="meta-value">{data.interaction || 'Microinteraction\nHover Effect'}</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* القسم الأيمن: منطقة عرض الفيديو المركزية */}
            <main className="split-modal-preview-area" onClick={onClose}>
                {/* منع الإغلاق عند النقر على الفيديو نفسه */}
                <div className="preview-media-container" onClick={(e) => e.stopPropagation()}>
                    <video 
    key={data.id}
    className="preview-video-player"
    src={data.videoUrl} 
    autoPlay 
    muted 
    loop 
    playsInline 
    /* إزالة controls لمنع ظهور أزرار التحكم */
    /* إضافة pointer-events: none لمنع المستخدم من إيقاف الفيديو بالنقر */
    style={{ pointerEvents: 'none' }} 
/>
                </div>
            </main>
        </div>
    );
}