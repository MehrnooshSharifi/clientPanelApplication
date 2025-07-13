const UserManual = () => {
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[30px] lg:mx-auto lg:w-[1030px]">
      <div className="font-bold mb-[20px]">
        <span>راهنمای ایجاد اپلیکیشن جدید</span>
      </div>
      <div className="mb-[20px]">
        <p className="mb-[20px] leading-[34px]">
          برای ایجاد اپلیکیشن، کاربر وارد پنل کاربری خود می شود. سپس وارد منو
          اپلیکیشن ها شده و بر روی &quot;اپلیکیشن جدید&quot; کلیک می نماید. در
          صفحه افزودن اپلیکیشن جدید 2 مرحله برای ایجاد اپلیکیشن لازم است :
        </p>
        <ol className="pr-[20px] flex flex-col gap-y-[10px]">
          <li className="leading-[34px]">
            1. در مرحله اول اطلاعات عمومی مرتبط با اپلیکیشن ثبت می شود. کاربر با
            مطالعه قوانین و مقررات و فعال نمودن این گزینه به مرحله بعد می رود.
          </li>
          {/* <li className="leading-[34px]">
            2. در مرحله دوم لوگو مناسبی برای اپلیکیشن بارگزاری می شود.
          </li> */}
          <li className="leading-[34px]">
            2. در مرحله دوم کاربر سرویس های مورد نیاز را از بین سرویس های موجود
            انتخاب نموده سپس با کلیک بر روی دکمه تایید نهایی، پیغام
            &quot;اپلیکیشن شما با موفقیت ثبت شد&quot; نمایش داده می شود.
          </li>
        </ol>
      </div>
      <div className="font-bold mb-[20px]">
        <span>راهنمای استفاده از سرویس</span>
      </div>
      <div className="flex flex-col gap-y-[10px] leading-[34px]">
        <p className="leading-[34px]">
          برای فراخوانی هر سرویس ابتدا باید سرویس GetToken را فراخوانی کرد تا
          بتوان توکن دریافت نمود. سپس توکن دریافتی (jwt) در فراخوانی سرویس مورد
          نظر استفاده می شود.
        </p>
        <p className="leading-[34px]">
          در فراخوانی سرویس GetToken ، سه فیلد باید تکمیل شود. فیلد UserName که
          کد ملی کاربر است. فیلد Password که پسورد پیامک شده و یا تغییر یافته
          توسط کاربر است. مقدار فیلد Scope در صفحه جزییات نمایش اپلیکیشن قابل
          دسترسی است.
        </p>
      </div>
    </div>
  );
};

export default UserManual;
