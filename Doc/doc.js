//TODO : این فایل جهت مستندسازی برخی نکات می باشد :

//! 1) تغییر آی پی ها
//? برای تغییر آی پی ها در مسیر : src/server/Services.js
// const baseURL = "https://Cli.gsafe.ir";      برای سرویس های سمت کلاینت مورد استفاده قرار می گیرد
// const baseURLserver = "http://127.0.0.1:7016"; (production)برای سرویس های سمت سرور مورد استفاده قرار می گیرد
// const baseURLserver = "http://Srv.gsafe.ir";  (developement)برای سرویس های سمت سرور مورد استفاده قرار می گیرد

//! 2) حذف صفحه اصلی از پروژه و جایگزین کردن صفحه لاگین به جای صفحه اصلی
// ? در مسیر : src/pages/index.js
// کدهای تا خط 42 کامنت میشود و
// کدهای بخش :   src/pages/signIn/index.js
// در مسیر src/pages/index.js  کپی میشود
// پس از هر تغییری برای فاز Production لازم است build از پروژه گرفته شود :   npm run build

//! 3) "content-type": "application/json-patch+json",   this don't work for http and just work for https
