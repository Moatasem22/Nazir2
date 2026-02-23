// انتظار تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // عناصر التحكم
    const menuToggle = document.getElementById('menuToggle');
    const sideDrawer = document.getElementById('sideDrawer');
    const overlay = document.getElementById('overlay');
    const closeDrawer = document.getElementById('closeDrawer');
    const drawerItems = document.querySelectorAll('.drawer-item');
    const pages = document.querySelectorAll('.page');
    const quickFab = document.getElementById('quickFab');
    const notifyBell = document.getElementById('notifyBell');

    // فتح/غلق القائمة
    function openDrawer() {
        sideDrawer.classList.add('open');
        overlay.classList.add('show');
    }
    function closeDrawerFunc() {
        sideDrawer.classList.remove('open');
        overlay.classList.remove('show');
    }

    menuToggle.addEventListener('click', openDrawer);
    closeDrawer.addEventListener('click', closeDrawerFunc);
    overlay.addEventListener('click', closeDrawerFunc);

    // التنقل بين الصفحات
    function navigateTo(pageId) {
        pages.forEach(p => p.classList.remove('active-page'));
        const target = document.getElementById('page-'+pageId);
        if (target) target.classList.add('active-page');

        // تحديث الحالة النشطة في القائمة
        drawerItems.forEach(item => item.classList.remove('active'));
        const activeItem = Array.from(drawerItems).find(el => el.dataset.page === pageId);
        if (activeItem) activeItem.classList.add('active');

        closeDrawerFunc();
    }

    drawerItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const page = e.currentTarget.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // زر سريع
    quickFab.addEventListener('click', () => {
        navigateTo('workorders');
        // محاكاة فتح الكاميرا (يمكن تنبيه)
        setTimeout(() => alert('📸 فتح الكاميرا لتصوير السيارة قبل وبعد'), 100);
    });

    // زر عرض المخزون من التنبيه
    document.getElementById('viewInventoryBtn')?.addEventListener('click', () => navigateTo('inventory'));

    // زر حفظ أمر العمل
    document.getElementById('saveWorkOrder')?.addEventListener('click', () => alert('تم حفظ أمر العمل وسحب المواد من المخزون آلياً'));

    // إشعار الجرس
    notifyBell.addEventListener('click', () => {
        alert('📢 لديك 3 فواتير غير مدفوعة و 4 مواد تحت حد الطلب');
    });

    // بعض الأزرار الأخرى
    document.querySelectorAll('.btn-gold').forEach(btn => {
        if(btn.id !== 'saveWorkOrder' && btn.id !== 'quickFab') {
            btn.addEventListener('click', (e) => {
                if(e.target.innerText.includes('تذكير')) alert('تم إرسال تذكير واتساب');
                else if(e.target.innerText.includes('XML')) alert('تم تصدير XML متوافق مع هيئة الزكاة');
                else if(e.target.innerText.includes('إصدار فاتورة')) alert('تم إصدار الفاتورة الإلكترونية');
                else if(e.target.innerText.includes('تسديد')) alert('تم تسجيل الدفع');
                else if(e.target.innerText.includes('إضافة مادة')) alert('فتح نموذج إضافة مادة');
                else if(e.target.innerText.includes('حفظ') && e.target.closest('#page-workers')) alert('تم حفظ بيانات العامل');
            });
        }
    });

    // الصفحة الافتراضية
    navigateTo('dashboard');
});
