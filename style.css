* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', 'Poppins', sans-serif;
}

body {
    background-color: #0f1a24;
    color: #F4F6F7;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* إطار الأندرويد */
.android-frame {
    width: 390px;
    height: 750px;
    background-color: #1A2A3A;
    border-radius: 40px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 0 3px #2C3E50 inset;
    overflow: hidden;
    position: relative;
}

.app-screen {
    width: 100%;
    height: 100%;
    background: #1A2A3A;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #C5A028 #2C3E50;
}

.app-screen::-webkit-scrollbar {
    width: 5px;
}
.app-screen::-webkit-scrollbar-thumb {
    background: #C5A028;
    border-radius: 20px;
}

/* الشريط العلوي */
.app-bar {
    background: #1A2A3A;
    padding: 16px 18px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #2C3E50;
    position: sticky;
    top: 0;
    z-index: 100;
}

.app-bar .menu-btn {
    background: none;
    border: none;
    color: #C5A028;
    font-size: 26px;
    cursor: pointer;
}

.app-bar .logo h2 {
    font-size: 18px;
    font-weight: 700;
    color: #C5A028;
}

.app-bar .logo span {
    font-size: 10px;
    color: #F4F6F7;
    opacity: 0.7;
    display: block;
    line-height: 1.2;
}

.app-bar .notify-icon {
    color: #E67E22;
    font-size: 22px;
    cursor: pointer;
}

/* القائمة الجانبية */
.side-drawer {
    position: fixed;
    top: 0;
    right: -300px;
    width: 280px;
    height: 100%;
    background: #1A2A3A;
    border-left: 2px solid #C5A028;
    box-shadow: -5px 0 20px rgba(0,0,0,0.7);
    transition: right 0.3s ease;
    z-index: 1000;
    padding: 30px 16px;
    overflow-y: auto;
}

.side-drawer.open {
    right: 0;
}

.drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #2C3E50;
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.drawer-header h3 {
    color: #C5A028;
}

.close-drawer {
    background: none;
    border: none;
    color: #F4F6F7;
    font-size: 26px;
    cursor: pointer;
}

.drawer-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 14px 12px;
    margin: 8px 0;
    border-radius: 12px;
    color: #F4F6F7;
    transition: 0.2s;
    cursor: pointer;
}

.drawer-item i {
    width: 24px;
    color: #C5A028;
    font-size: 18px;
}

.drawer-item:hover {
    background: #2C3E50;
}

.drawer-item.active {
    background: #C5A02820;
    border-right: 4px solid #C5A028;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 999;
    display: none;
}

.overlay.show {
    display: block;
}

/* المحتوى الرئيسي */
.content {
    padding: 16px 16px 80px;
    flex: 1;
}

/* البطاقات */
.card {
    background: #2C3E50;
    border-radius: 24px;
    padding: 18px 16px;
    margin-bottom: 18px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
    border: 1px solid #3a5062;
}

.card-title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 14px;
    color: #C5A028;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* مؤشرات الأداء */
.kpi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 18px;
}

.kpi-item {
    background: #1A2A3A;
    border-radius: 20px;
    padding: 16px 10px;
    border: 1px solid #3e5062;
    text-align: center;
}

.kpi-value {
    font-size: 24px;
    font-weight: 800;
    color: #C5A028;
}

.kpi-label {
    font-size: 12px;
    opacity: 0.8;
}

/* صفوف العناصر */
.item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #3a5062;
}
.item-row:last-child {
    border-bottom: none;
}

.badge {
    background: #1A2A3A;
    padding: 4px 12px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: 600;
}
.badge.success { color: #2ecc71; }
.badge.warning { color: #E67E22; }
.badge.danger { color: #e74c3c; }
.badge.neutral { color: #b0c4de; }

.alert-badge {
    background: #E67E22;
    color: #1A2A3A;
    border-radius: 30px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 700;
}

.btn-gold {
    background: #C5A028;
    border: none;
    color: #1A2A3A;
    font-weight: 700;
    padding: 12px 20px;
    border-radius: 40px;
    width: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.2s;
    margin-top: 8px;
}
.btn-gold i { color: #1A2A3A; }
.btn-gold:active { transform: scale(0.98); }

.btn-outline {
    background: transparent;
    border: 1px solid #C5A028;
    color: #C5A028;
    padding: 8px 12px;
    border-radius: 40px;
    cursor: pointer;
    font-size: 13px;
}

.input-field {
    background: #1A2A3A;
    border: 1px solid #3e5062;
    border-radius: 40px;
    padding: 12px 18px;
    width: 100%;
    color: #F4F6F7;
    margin-bottom: 12px;
}
.input-field::placeholder { color: #7f8c8d; }

/* تنسيق الفاتورة */
.invoice-sample {
    background: #1A2A3A;
    border-radius: 18px;
    padding: 14px;
    font-family: 'Poppins', 'Cairo', sans-serif;
    direction: ltr;
    text-align: left;
}
.invoice-sample .ar { direction: rtl; text-align: right; }

.qr-box {
    background: #000;
    width: 70px;
    height: 70px;
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    border: 2px solid #C5A028;
}

/* تبويبات الصفحات */
.page {
    display: none;
}
.page.active-page {
    display: block;
}

/* شبكات الخدمات */
.services-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
}
.service-card {
    background: #1A2A3A;
    border-radius: 20px;
    padding: 12px;
    border: 1px solid #3e5062;
}
.service-title {
    font-weight: 700;
    color: #C5A028;
}

/* تذييل ثابت للزر السريع */
.fab-container {
    position: sticky;
    bottom: 10px;
    width: 90%;
    margin: 0 auto 10px;
}
