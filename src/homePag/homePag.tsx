import { Header } from '../components/header/header';
import { ListCard } from '../components/listCard/listCard';
import { Sidebar } from '../components/Sidebar/Sidebar';

export function HomePage() {
    return (
        <div className="app-layout" style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#ffffff' }}>

            {/* 1. السايدبار يقف هنا بشكل مستقل لأنه ثابت الجانب (Fixed/Absolute) */}
            <Sidebar />

            {/* 2. حاوية المحتوى الأيمن: تنزاح بمقدار 260px (عرض السايدبار) حتى لا يتداخل المحتوى */}
            <div
                className="content-wrapper"
                style={{
                    flex: 1,
                    marginLeft: '260px', /* انزياح بمقدار عرض السايدبار تماماً */
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                {/* الهيدر يمتد الآن في المساحة المتبقية فقط بشكل احترافي */}
                <Header />

                {/* منطقة شبكة التصاميم أو المعرض الأساسي */}
                <main className="main-content-area" style={{ padding: '24px', flex: 1 }}>
                    {/* استدعاء المكون مباشرة ليأخذ كامل العرض والتدفق الطبيعي أسفل الهيدر */}
                    <ListCard />
                </main>
            </div>

        </div>
    );
}