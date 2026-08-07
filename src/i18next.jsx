import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          KnowledgeShop: "KnowledgeShop",
          Home: "Home",
          Products: "Products",
          products: "Products",
          Shop: "Shop",
          Cart: "Cart",
          Login: "Login",
          Register: "Register",
          Logout: "Logout",
          Profile: "Profile",
          Favorites: "Favorites",
          "Search products": "Search products...",

          // Categories
          Category: "Category",
          Categories: "Categories",
          All: "All",

          // Home
          Welcome: "Welcome",
          "Shop Now": "Shop Now",
          "Our Products": "Our Products",
          "Featured Products": "Featured Products",
          "Explore Our Products": "Explore Our Products",
          "New Season Arrivals": "New Season Arrivals",

          "Everything You Need": "Everything You Need,",

          "All in One Place": "All in One Place",

          "Home Description":
            "Discover our curated collection of premium products designed for the modern lifestyle. Quality meets convenience at KnowledgeShop.",

          "Explore Categories": "Explore Categories",

          "Fast Delivery": "Fast Delivery",

          "Free Shipping": "Free shipping on orders $100+",

          "Secure Payment": "Secure Payment",

          "Secure Payment Description": "100% secure payment methods",

          "Easy Returns": "Easy Returns",

          "Returns Description": "30-day money-back guarantee",

          "Customer Support": "Customer Support",

          "Customer Support Description": "Dedicated 24/7 online assistance",

          "Shop by Categories": "Shop by Categories",

          "Find exactly what you're looking for":
            "Find exactly what you're looking for",

          // Products
          Price: "Price",
          Description: "Description",
          Quantity: "Quantity",
          "Add to Cart": "Add to Cart",
          "View Details": "View Details",
          "Show More": "Show More",
          Reviews: "Reviews",
          Specifications: "Specifications",

          // Shop
          Filters: "Filters",
          "Min Price": "Min Price",
          "Max Price": "Max Price",
          "Sort By": "Sort By",
          Name: "Name",
          Order: "Order",
          Ascending: "Ascending",
          Descending: "Descending",
          "Apply Filters": "Apply Filters",
          "Clear Filters": "Clear Filters",
          "Explore Our Exclusive Products": "Explore Our Exclusive Products",

          "Clear All": "Clear All",

          "Max price must be greater than min price":
            "Max price must be greater than min price",

          Default: "Default",

          "Shop Description":
            "Discover products selected for quality and everyday use.",

          // Cart
          "Shopping Cart": "Shopping Cart",
          Product: "Product",
          Total: "Total",
          Remove: "Remove",
          "Continue Shopping": "Continue Shopping",
          "Proceed to Checkout": "Proceed to Checkout",
          "Start Shopping": "Start Shopping",
          "Your cart is empty": "Your cart is empty",

          "Review your products before checkout":
            "Review your products before checkout.",
          "You have not added any products to your cart yet":
            "You have not added any products to your cart yet.",
          "Order Summary": "Order Summary",
          Subtotal: "Subtotal",
          "Failed to load cart": "Failed to load cart",

          // Checkout
          Checkout: "Checkout",

          "Checkout Description":
            "Review your order and choose your payment method.",
          "Your Order": "Your Order",
          "Payment Method": "Payment Method",
          "Choose Payment Method": "Choose how you would like to pay.",
          Cash: "Cash",
          Visa: "Visa",
          "Pay Now": "Pay Now",
          "Something went wrong": "Something went wrong",

          // Login
          "Welcome Back": "Welcome Back",
          "Login Description": "Login to continue shopping with KnowledgeShop",
          Email: "Email",
          Password: "Password",
          "Forgot Password?": "Forgot Password?",
          "Don't have an account?": "Don't have an account?",
          "Already have an account?": "Already have an account?",

          // Register
          Username: "Username",
          "Full Name": "Full Name",

          "Register Description":
            "Create your account and start shopping with KnowledgeShop",

          Phone: "Phone",
          "Phone Number": "Phone Number",
          "Confirm Password": "Confirm Password",
          "Create Account": "Create Account",

          // Forgot Password
          "Forgot Password": "Forgot Password",
          "Send Code": "Send Code",
          "Verification Code": "Verification Code",
          "Reset Password": "Reset Password",
          "New Password": "New Password",

          // Profile
          "Personal Information": "Personal Information",
          "Profile Description": "View and update your account information.",
          "Save Changes": "Save Changes",
          "Email is required": "Email is required",
          "Profile updated successfully": "Profile updated successfully",
          "Failed to load profile information":
            "Failed to load profile information",
          "Failed to update profile": "Failed to update profile",
          "My Profile": "My Profile",
          "Profile Layout Description":
            "Manage your personal information and view your orders.",
          "My Orders": "My Orders",
          "View your previous orders": "View your previous orders.",
          "No orders yet": "No orders yet",
          "You have not placed any orders yet":
            "You have not placed any orders yet.",
          Payment: "Payment",

          // General
          Search: "Search",
          Loading: "Loading...",
          Error: "Something went wrong",
          Save: "Save",
          Cancel: "Cancel",
          Delete: "Delete",
          Update: "Update",
          Back: "Back",

          //footer
          "Footer Description":
            "Elevating your everyday experience through carefully curated premium products and exceptional service.",
          "All Products": "All Products",
          "Sale & Offers": "Sale & Offers",
          "New Arrivals": "New Arrivals",
          Service: "Service",
          "Order Tracking": "Order Tracking",
          "Shipping Policy": "Shipping Policy",
          "Help Center": "Help Center",
          Legal: "Legal",
          "Terms of Service": "Terms of Service",
          "Privacy Policy": "Privacy Policy",
          "Cookie Policy": "Cookie Policy",
          Accessibility: "Accessibility",
          Copyright: "© 2026 KnowledgeShop. All rights reserved.",
        },
      },

      ar: {
        translation: {
          // Navbar
          KnowledgeShop: "متجر المعرفة",
          Home: "الرئيسية",
          Products: "المنتجات",
          products: "المنتجات",
          Shop: "المتجر",
          Cart: "السلة",
          Login: "تسجيل الدخول",
          Register: "إنشاء حساب",
          Logout: "تسجيل الخروج",
          Profile: "الملف الشخصي",
          Favorites: "المفضلة",
          "Search products": "ابحث عن المنتجات...",

          // Categories
          Category: "الفئة",
          Categories: "الفئات",
          All: "الكل",

          // Home
          Welcome: "مرحباً",
          "Shop Now": "تسوق الآن",
          "Our Products": "منتجاتنا",
          "Featured Products": "المنتجات المميزة",
          "Explore Our Products": "استكشف منتجاتنا",
          "New Season Arrivals": "وصل حديثاً لهذا الموسم",

          "Everything You Need": "كل ما تحتاجه،",

          "All in One Place": "في مكان واحد",

          "Home Description":
            "اكتشف مجموعتنا المختارة من المنتجات عالية الجودة والمصممة لتناسب أسلوب الحياة العصري. الجودة والسهولة في متجر المعرفة.",

          "Explore Categories": "استكشف الفئات",

          "Fast Delivery": "توصيل سريع",

          "Free Shipping": "شحن مجاني للطلبات فوق 100 دولار",

          "Secure Payment": "دفع آمن",

          "Secure Payment Description": "طرق دفع آمنة بنسبة 100%",

          "Easy Returns": "إرجاع سهل",

          "Returns Description": "ضمان استرداد الأموال خلال 30 يوماً",

          "Customer Support": "دعم العملاء",

          "Customer Support Description": "دعم متوفر على مدار الساعة",

          "Shop by Categories": "تسوق حسب الفئات",

          "Find exactly what you're looking for": "اعثر على ما تبحث عنه بسهولة",

          // Products
          Price: "السعر",
          Description: "الوصف",
          Quantity: "الكمية",
          "Add to Cart": "أضف إلى السلة",
          "View Details": "عرض التفاصيل",
          "Show More": "عرض المزيد",
          Reviews: "التقييمات",
          Specifications: "المواصفات",

          // Shop
          Filters: "التصفية",
          "Min Price": "أقل سعر",
          "Max Price": "أعلى سعر",
          "Sort By": "ترتيب حسب",
          Name: "الاسم",
          Order: "الترتيب",
          Ascending: "تصاعدي",
          Descending: "تنازلي",
          "Apply Filters": "تطبيق التصفية",
          "Clear Filters": "مسح التصفية",
          "Explore Our Exclusive Products": "استكشف منتجاتنا المميزة",

          "Clear All": "مسح الكل",

          "Max price must be greater than min price":
            "يجب أن يكون أعلى سعر أكبر من أقل سعر",

          Default: "افتراضي",

          "Shop Description":
            "اكتشف منتجات مختارة بعناية للجودة والاستخدام اليومي.",

          // Cart
          "Shopping Cart": "سلة التسوق",
          Product: "المنتج",
          Total: "المجموع",
          Remove: "إزالة",
          "Continue Shopping": "متابعة التسوق",
          "Proceed to Checkout": "الانتقال إلى الدفع",
          "Start Shopping": "ابدأ التسوق",
          "Your cart is empty": "سلة التسوق فارغة",

          "Review your products before checkout":
            "راجع منتجاتك قبل إتمام الطلب.",

          "You have not added any products to your cart yet":
            "لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.",
          "Order Summary": "ملخص الطلب",
          Subtotal: "المجموع الفرعي",
          "Failed to load cart": "فشل تحميل سلة التسوق",

          // Checkout
          Checkout: "الدفع",
          "Checkout Description": "راجع طلبك واختر طريقة الدفع.",
          "Your Order": "طلبك",
          "Payment Method": "طريقة الدفع",
          "Choose Payment Method": "اختر الطريقة التي تريد الدفع بها.",
          Cash: "نقداً",
          Visa: "فيزا",
          "Pay Now": "ادفع الآن",
          "Something went wrong": "حدث خطأ",

          // Login
          "Welcome Back": "مرحباً بعودتك",
          "Login Description": "سجل الدخول لمتابعة التسوق في متجر المعرفة",

          Email: "البريد الإلكتروني",
          Password: "كلمة المرور",
          "Forgot Password?": "نسيت كلمة المرور؟",
          "Don't have an account?": "ليس لديك حساب؟",
          "Already have an account?": "لديك حساب بالفعل؟",

          // Register

          "Register Description": "أنشئ حسابك وابدأ التسوق في متجر المعرفة",
          Username: "اسم المستخدم",
          "Full Name": "الاسم الكامل",
          Phone: "رقم الهاتف",
          "Phone Number": "رقم الهاتف",
          "Confirm Password": "تأكيد كلمة المرور",
          "Create Account": "إنشاء الحساب",

          // Forgot Password
          "Forgot Password": "نسيت كلمة المرور",
          "Send Code": "إرسال الرمز",
          "Verification Code": "رمز التحقق",
          "Reset Password": "إعادة تعيين كلمة المرور",
          "New Password": "كلمة المرور الجديدة",

          // Profile
          "Personal Information": "المعلومات الشخصية",
          "Profile Description": "عرض وتعديل معلومات حسابك.",
          "Save Changes": "حفظ التغييرات",
          "Email is required": "البريد الإلكتروني مطلوب",
          "Profile updated successfully": "تم تحديث الملف الشخصي بنجاح",
          "Failed to load profile information":
            "فشل تحميل معلومات الملف الشخصي",
          "Failed to update profile": "فشل تحديث الملف الشخصي",
          "My Profile": "ملفي الشخصي",
          "Profile Layout Description": "إدارة معلوماتك الشخصية وعرض طلباتك.",
          "My Orders": "طلباتي",
          "View your previous orders": "عرض طلباتك السابقة.",
          "No orders yet": "لا توجد طلبات بعد",
          "You have not placed any orders yet":
            "لم تقم بإجراء أي طلب حتى الآن.",
          Payment: "طريقة الدفع",
          // General
          Search: "بحث",
          Loading: "جاري التحميل...",
          Error: "حدث خطأ",
          Save: "حفظ",
          Cancel: "إلغاء",
          Delete: "حذف",
          Update: "تحديث",
          Back: "رجوع",

          //footer
          "Footer Description":
            "نرتقي بتجربتك اليومية من خلال منتجات مختارة بعناية وخدمة مميزة.",
          "All Products": "جميع المنتجات",
          "Sale & Offers": "التخفيضات والعروض",
          "New Arrivals": "وصل حديثاً",
          Service: "الخدمات",
          "Order Tracking": "تتبع الطلب",
          "Shipping Policy": "سياسة الشحن",

          "Help Center": "مركز المساعدة",
          Legal: "القانونية",
          "Terms of Service": "شروط الخدمة",
          "Privacy Policy": "سياسة الخصوصية",
          "Cookie Policy": "سياسة ملفات الارتباط",
          Accessibility: "إمكانية الوصول",
          Copyright: "© 2026 متجر المعرفة. جميع الحقوق محفوظة.",
        },
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
