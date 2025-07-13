import Link from "next/link";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { ScrollToTop } from "react-simple-scroll-up";

const AppTermsAndConditions = () => {
  return (
    <div className=" flex flex-col mt-[10px] md:mt-[30px] mx-[26px] mr-[20px] lg:pr-[10px] lg:mx-auto lg:w-[1030px] lg:h-[700px] lg:overflow-y-scroll">
      <ScrollToTop
        bgColor="#F2F6FE"
        strokeEmptyColor="#FAFAFA"
        strokeFillColor="#0050E5"
        className="z-50"
        size="60"
        symbolSize="30"
        symbolColor="#0050E5"
      />
      {/* BreadCrumbs */}
      {/* <div className="  -mb-[20px]  whitespace-nowrap font-normal  text-[10px] md:h-[48px] leading-[17.27px] md:text-[14px] lg:text-[15px] lg:leading-[25.91px]  md:leading-[24.18px] h-[48px]  flex items-center py-[15.5px] overflow-x-scroll overflow-y-hidden">
        <Link
          href="/panel/applications"
          className="  font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
        >
          <div className=" font-normal  text-neutralColor-2  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center  lg:mr-1 gap-x-[5px] ">
            <span className="">لیست اپلیکیشن ها</span>
          </div>
        </Link>
        <div className="lg:-mr-[20px] -mr-[30px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <Link
          href="/panel/applications/addNewApplication"
          className=" font-normal  text-neutralColor-2 w-[115px] h-[48px]  md:w-[153px] md:h-[48px] flex items-center"
        >
          <div className=" font-normal  text-neutralColor-2  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center lg:mr-1 gap-x-[5px] ">
            <span className="">افزودن اپلیکیشن جدید</span>
          </div>
        </Link>
        <div className="-mr-[15px]  md:-mr-[6px]  lg:mr-[5px]">
          <HiOutlineChevronLeft className="text-neutralColor-4" />
        </div>
        <div className=" font-normal  text-neutralColor-3  w-[133px] h-[48px] md:w-[149px] md:h-[48px] flex items-center gap-x-[5px] lg:mr-[5px] ">
          <span className="">قوانین و مقررات</span>
        </div>
      </div> */}
      <h1 className="mb-[23.64px] text-[14px] md:text-[20px] font-bold leading-[24.18px] md:leading-[34.55px] w-[97px] md:w-[138px] h-[24px] md:h-[35px] whitespace-nowrap mt-[35px]">
        قوانین و مقررات
      </h1>
      {/* ContractCost */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>1&#41;</span>
          <h2>مبلغ قرارداد</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span className="mr-[3px]">1.1&#41;</span>
          <p>
            در راستای اجرای قانون مالیات بر ارزش افزوده، به رقم نهایی هر یک از
            صورتحساب های تبادل، مالیات بر ارزش افزوده بر اساس نرخ قانونی
            اعمال می گردد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>1.2&#41;</span>
          <p>
            ارائه خدمات موضوع قرارداد پس از اتمام شارژ کیف پول متوقف خواهد شد.
            ارائه مجدد خدمت منوط به شارژ مجدد کیف پول است.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>1.3&#41;</span>
          <p>
            قطع یا افزایش هر یک از خدمات به تبع منجر به کاهش یا افزایش حداقل
            مبلغ کل قرارداد به تناسب تراکنش ها خواهد گردید.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>1.4&#41;</span>
          <p>
            در صورت وجود هرگونه ابهام یا اشکال در صورت حساب، بایستی شرکت مراتب
            را به صورت کتبی حداکثر تا 10 روز کاری اعلام نماید تا مشکلات برطرف
            شود. در غیر این صورت، عدم اقدام تا این زمان به منزله پذیرش صورتحساب
            است و شرکت متعهد است صورتحساب را پرداخت نماید.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>1.5&#41;</span>
          <p>
            شرکت مکلف است خدمات موضوع قرارداد را صرفا با قیمت مصوب درج شده در
            ستون مبلغ به کاربران خود ارائه نماید و در صورت تمایل به تغییر
            نرخ فروش، پس از اخذ تائیدیه از تبادل، نرخ جدید فروش را در قالب
            الحاقیه ای به قرارداد الصاق نماید.
          </p>
        </div>
      </div>
      {/* RamzNegarSafeObligations */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>2&#41;</span>
          <h2>تعهدات تبادل</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.1&#41;</span>
          <p>
            تبادل متعهد می‌‌شود که مستندات فنی مربوط به خدمات موضوع
            قرارداد را در اختیار شرکت قرار دهد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.2&#41;</span>
          <p>
            تبادل متعهد می شود که تیم پشتیبانی از ساعت 8:00 الی 17:00 در
            دسترس باشد و از طریق راه های ارتباطی ارسال تیکت و تماس با واحد
            پشتیبانی فنی به شماره 02142825000 ، مشکلات و سوالات را پاسخگو باشد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.3&#41;</span>
          <p>
            تبادل متعهد می‌شود در صورت ایجاد هرگونه تغییر در مستندات و
            سرویس‌های موضوع قرارداد، مراتب را به شرکت اطلاع رسانی کند.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.4&#41;</span>
          <p>
            ممکن است در برخی مقاطع بعضی از خدمات توسط تبادل غیرقابل ارائه
            باشند و یا با محدودیت هایی مواجه شوند که این موضوعات طی دوره همکاری
            از طریق اعلانات به شرکت اطلاع داده خواهد شد تا تمهیدات لازم جهت حفظ
            و نگهداری مشتری و جلوگیری از نارضایتی ایشان انجام شود.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.5&#41;</span>
          <p>
            تبادل با در دسترس قراردادن سرویس‌های آنلاین گزارش، امکان
            مغایرت‌گیری تراکنش‌های انجام شده طی یک چرخه را در اختیار شرکت قرار
            می‌دهد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.6&#41;</span>
          <p>
            تبادل متعهد است در صورت بروز مغایرت در تراکنش‌ها با شرکت طرف
            قرارداد در خصوص رفع آن اقدام کند.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.7&#41;</span>
          <p>
            تبادل این حق را بر خود محفوظ می داند که در صورت عدم رعایت هر
            یک از بندهای الزامی این قرارداد، قرارداد خود را پس از اخطار کتبی با
            مهلت 15 روزه و عدم حصول نتیجه مطلوب با شرکت منفسخ و نیازمند تنفیذ
            دادگاه ندارد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.8&#41;</span>
          <p>
            تبادل هیچ‌گونه تعهدی نسبت به استفاده نادرست یا غیرقانونی از
            سرویس‌های ارائه شده ندارد و مسئولیت آن تماما بر عهده شرکت است.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2.9&#41;</span>
          <p>
            سند محرمانگی و عدم افشا (NDA) جزو لاینفک این قرارداد محسوب می شود و
            عدم رعایت هر یک از بندهای آن منجر به فسخ قرارداد خواهد شد. بدیهی است
            در صورت عدم توجه و یا اجرای تبصره‌ی مذکور، تبادل می تواند با
            ارجاع امر از طریق کارشناس رسمی دادگستری اقدام که نظریه صادره بعنوان
            وجه التزام خواهد بود و نسبت به اقامه دعوا از طریق مراجع ذیصلاح علیه
            شرکت اقدام نماید.
          </p>
        </div>
      </div>
      {/* CompanySafeObligations */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>3&#41;</span>
          <h2>تعهدات شرکت</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.1&#41;</span>
          <p>
            شرکت متعهد است فراخوانی API محیط عملیاتی را صرفا مطابق با آنچه به
            طور رسمی به تبادل ارسال کرده است، استفاده نماید و حق واگذاری
            یا باز ارائه آن را به هیچ شخص حقیقی یا حقوقی دیگری ندارد. چنانچه این
            موضوع برای تبادل به هر نحوی محرز شود، تبادل حق دارد بدون
            اطلاع قبلی، سرویس را قطع نماید و وجه التزام مندرج در قرارداد را به
            نفع خود ضبط کند.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.2&#41;</span>
          <p>
            شرکت موظف است تمامی قوانین جمهوری اسلامی ایران و قوانین و مقررات
            بانک مرکزی و پولشویی را که بر اجرای قرارداد و بر ارائه خدمات به
            کاربران نهایی دلالت دارد، رعایت کند.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.3&#41;</span>
          <p>
            شرکت متعهد است از هرگونه استفاده غیرقانونی از خدمات موضوع قرارداد
            اکیدا اجتناب کند. در صورت احراز به هر نحو و یا به درخواست مراجع ذی
            صلاح قانونی، سرویس سریعا قطع خواهد شد و شرکت موظف به ارائه مدارک و
            مستنداتی است که خلاف این مساله را برای تبادل اثبات نماید. در
            صورت اثبات، سرویس مجددا وصل خواهد شد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.4&#41;</span>
          <p>
            خسارت وارده به مشتری/کاربر نهایی ناشی از قصور یا خطای برنامه های
            کاربردی شرکت بر عهده ایشان است و هیچگونه مسئولیتی متوجه تبادل
            نخواهد بود.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.5&#41;</span>
          <p>
            در صورت مشاهده هر گونه استفاده غیرقانونی، متقلبانه یا غیرمجاز خدمات
            موضوع قرارداد، تبادل این حق را خواهد داشت که همراه با ارسال
            اخطاریه ضمن تعلیق قرارداد و خدمت رسانی به شرکت در صورت لزوم موضوع را
            از طریق مراجع ذی صلاح پیگیری کند.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.6&#41;</span>
          <p>
            شرکت مکلف است همه مجوزهای قانونی لازم برای کسب و کار خود را از مراجع
            ذی ربط دریافت کند. در صورت عدم اثبات خلاف این موضوع وی مسئول بروز
            هرگونه خسارت هم بر تبادل و هم مشتری شرکت و نیز طرفین قرارداد
            بوده و کلیه مسئولیت ها بر عهده ایشان است.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.7&#41;</span>
          <p>
            در صورتی که به واسطه تقصیر عمدی یا اهمال افرادی که از سوی شرکت یا
            کارکنان وی که به سرویس‌های شرکت دسترسی دارند، زیانی به تبادل
            یا کاربران نهایی وارد شود، در صورت اثبات از سوی مراجع ذی‌صلاح شرکت
            مسئولیت حقوقی و کیفری و عندالزوم پاسخگویی آن را بر عهده داشته و
            هرگونه خسارت را جبران می‌کند.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.8&#41;</span>
          <p>
            شرکت موظف است که شروط و مقررات راجع به استفاده کاربران خود از خدمات
            موضوع قرارداد را که از سوی تبادل در اختیار او قرار می‌گیرد، به
            طور واضح و آشکار بر روی وب سایت یا فضا ارتباطی خود با کاربران نهایی
            قرار دهد. بدیهی است که تبادل هیچ مسئولیتی در قبال روابط و
            تعاملات بین شرکت و کاربرانش را نخواهد داشت.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.9&#41;</span>
          <p>
            شرکت حق هیچ گونه اعتراض و یا ادعایی علیه تبادل در خصوص حذف هر
            یک از خدمات موضوع قرارداد در طول مدت همکاری را ندارد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.10&#41;</span>
          <p>
            کلیه خطاها و مغایرت‌های مرتبط با مشتری از طریق سرویس‌های مغایرت‌گیری
            در دسترس شرکت قرار گرفته و توسط شرکت بررسی می‌شود و در صورت نیاز به
            تبادل اطلاع داده می‌شود.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.11&#41;</span>
          <p>
            شرکت متعهد گرديد در ارسال تراکنش‌های الکترونيکی، پروتکل مربوط به
            نحوه ارسال تراکنش‌های بانکی را به دقت رعايت کند و جهت ارسال
            تراکنش‌های مذکور از تجهيزات و سخت افزار و نرم افزار مناسب استفاده
            کند به نحوی که به دليل بکارگيری تجهيزات يا نرم افزار نامناسب خسارتی
            به تبادل تحمیل کند، کلیه خسارت‌های ناشی از این بند بر عهده
            شرکت است.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.12&#41;</span>
          <p>
            شرکت متعهد گرديد از هرگونه تلاش در جهت دريافت و ذخيره سازی اطلاعات
            حساس كارت بانكی دارندگان كارت خودداری کند و کلیه مسئولیت‌های ناشی از
            عدم رعایت این بند برعهده شرکت است.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.13&#41;</span>
          <p>
            شرکت متعهد است در انجام موضوع قرارداد صرفا از سرورهای مستقر در ایران
            و IPهای بازه ایران استفاده کند. در غیر اینصورت، تبادل تعهدی در
            قبال پایداری سرویس و ارائه خدمات نخواهد داشت.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.14&#41;</span>
          <p>
            شرکت اقرار نمود که از خدمات موضوع قرارداد منحصرا و صرفا در چارچوب
            تعریف شده در قرارداد و موافق پیوست فنی استفاده خواهد کرد و در صورت
            عمل برخلاف این بند، کلیه مسئولیت‌های کیفری و حقوقی ناشی از آن را
            برعهده می‌گیرد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3.15&#41;</span>
          <p>
            شرکت حق واگذاری موضوع قرارداد به اشخاص حقیقی و یا حقوقی را چه از
            طریق مستقیم و چه سایر روش ها را نخواهد داشت.
          </p>
        </div>
      </div>
      {/* IntellectualProperty */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>4&#41;</span>
          <h2>حقوق و مالکیت مادی و معنوی</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>4.1&#41;</span>
          <p>
            مالکیت فکری سرویس ها، سورس کد و کلیه اطلاعات مربوط به استانداردها،
            مستندات و ضوابط درونی و سامانه‌های مرتبط با آن متعلق به تبادل
            بوده و شرکت هیچ‌گونه حقی از این بابت ندارد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>4.2&#41;</span>
          <p>
            تبادل این حق را دارد در حد متعارف بدون اینکه به اطلاعات
            محرمانه و اسرار تجاری شرکت دسترسی پیدا کند، عملیات صورت گرفته را
            بررسی کند و با استفاده از الگوریتم‌های شناسایی تخلف، زمینه‌های
            احتمالی بروز تخلف را شناسایی و پیشگیری کند. تبادل موظف است در
            صورت مشاهده هرگونه رخدادی که احتمال وقوع تخلف را نشان دهد، مطابق با
            قوانین مرتبط با آن اقدامات مقتضی را به عمل آورده و مراتب را به شرکت
            اطلاع دهد.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>4.3&#41;</span>
          <p>
            در صورت درخواست مراجع قانونی ذی‌صلاح و در چارچوب قوانین، تبادل
            مکلف است اطلاعات مورد درخواست را به ایشان ارائه کند.{" "}
          </p>
        </div>
      </div>
      {/* Confidentiality of information */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>5&#41;</span>
          <h2>محرمانه بودن اطلاعات</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <p>
            طرفین در هر صورت و شرایطی (دوران همکاری و یا پس از آن) متعهد
            می‌گردند، از افشاء و در اختیار قراردادن هرگونه اطلاعات فنی، اجرایی و
            سازمانی برنامه‌ها و پروژه‌های مرتبط یا غیرمرتبط با قرارداد به شخص
            ثالث خودداری نموده و آن را کاملا محرمانه تلقی نمایند.
          </p>
        </div>
      </div>
      {/* DisputeResolution */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>6&#41;</span>
          <h2>حل اختلاف</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <p>
            در صورت بروز هرگونه اختلاف ناشی از اجرا یا تفسیر و تعبیر قرارداد، در
            ابتدا طرفین قرارداد نهایت تلاش خود را خواهند داشت تا اختلاف را از
            طریق مذاکره و به شیوه دوستانه حل و فصل نمایند. در صورت عدم حصول
            نتیجه ظرف مدت 15 روز کاری پس از اعلام اظهارنامه به طرفین، موضوع
            اختلاف از طریق مراجع ذی‌صلاح قانونی قابل پیگیری است و هر یک از طرفین
            مجاز و مختار به مراجعه به مراجع صلاح قضایی خواهند بود.
          </p>
        </div>
      </div>
      {/* ForceMajor */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>7&#41;</span>
          <h2>فورس ماژور</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <p>
            در صورتی که به عللی خارج از حیطه اراده طرفین از قبیل سیل، زلزله،
            جنگ، شیوع بیماری ‌های واگیردار، قطعی سراسری اینترنت کشور و غیره،
            انجام تمام یا قسمتی از تعهدات موضوع قرارداد امکان‌پذیر نباشد، هر یک
            از طرفین که قادر به انجام تعهدات خود نباشد، باید مراتب را کتباً به
            طرف دیگر اطلاع دهد. در این صورت مادامی که علل مذکور ادامه دارد، عدم
            انجام تعهداتی که عرفا متاثر از حالت فوق است تخلف از مفاد قرارداد
            محسوب نمی‌شود و طرفین می‌توانند با توافق یکدیگر به مدت قرارداد اضافه
            نمایند .تغییر شرایط اقتصادی از قبیل افزایش دستمزد و قطعات و یا تغییر
            نرخ ارز و یا تحریم‌های بین‌المللی فورس ماژور تلقی نمی‌گردد.
          </p>
        </div>
      </div>
      {/* Termination of Contract */}
      <div className="flex flex-col gap-y-[16px] leading-[35px] text-neutralColor-1 text-[12px] md:text-[16px] font-bold md:font-extrabold gap-x-[2px] mb-[50px]">
        <div className="flex text-primaryColor-1 text-[14px] md:text-[18px] font-bold md:font-extrabold gap-x-[2px]">
          <span>8&#41;</span>
          <h2>فسخ قرارداد</h2>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <p>
            در صورت عدم اجرای تعهدات از طرف شرکت، تبادل می تواند از طریق
            اعلانات خواستار رفع مشکل و عمل به تعهدات طرف مقابل گردد و در صورت
            ادامه شرایط نسبت به فسخ قرارداد اقدام نماید. بدیهی است فسخ قرارداد
            تعهداتی را که قبل از فسخ برای طرفین بوجود آمده و تا لحظه فسخ قرارداد
            به آنها عمل نشده است را نقض نخواهد کرد. درصورتی که فسخ صورت پذیرد
            کلیه امور و خدمات انجام شده توسط طرفین در چارچوب قرارداد ارزیابی شده
            و براساس آن تسویه خواهد شد و تبادل تا همان میزان مستحق دریافت
            اجرت المثل خواهد بود. از طرفی نیز در موارد زیر بدون مراجعه به
            دادگاه، تبادل می تواند قرارداد را بدون مراجعه به دادگاه منفسخ
            نماید.
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>1&#41;</span>
          <p> تاخیر در شروع قرارداد به مدت 20 روز از تاریخ ابلاغ آن</p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>2&#41;</span>
          <p>
            عدم اجرای تمام یا قسمتی از موضوع قرارداد در موعد پیش بینی شده در
            قرارداد
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>3&#41;</span>
          <p>عدم توانایی مالی شرکت درانجام تعهدات به تشخیص ناظر قرارداد </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>4&#41;</span>
          <p>انتقال جزئی از قرارداد به شخص ثالث بدون اجازه کتبی تبادل</p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>5&#41;</span>
          <p> انحلال و یا ورشکستگی شرکت </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>6&#41;</span>
          <p>
            عدم اجرای هریک از موارد قرارداد توسط شرکت که اجرای قرارداد را به خطر
            اندازد
          </p>
        </div>
        <div className="flex gap-x-[3px] pr-[15px]">
          <span>7&#41;</span>
          <p>عدم توجه به یک اخطار کتبی توسط تبادل درخصوص انجام تعهدات </p>
        </div>
      </div>
    </div>
  );
};

export default AppTermsAndConditions;
