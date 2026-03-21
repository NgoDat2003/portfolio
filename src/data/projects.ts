export interface Project {
  id: string;
  title: string;
  category: string;
  timeline: string;
  desc: string;
  tech_detail: string;
  deploy_note: string;
  achievements: string[];
  tech: string[];
  github: string;
  github_fe?: string;
  github_be?: string;
  demo: string;
  image: string;
  images?: string[];
  full_description: string;
}

export const projects: Project[] = [
  {
    id: 'lms',
    title: 'Hệ Thống Quản Lý Hồ Sơ Sinh Viên Trực Tuyến',
    category: 'Enterprise / Education',
    timeline: 'Tháng 09/2025 — Tháng 12/2025',
    desc: 'Đồ án tốt nghiệp — Ứng dụng web quản lý toàn diện cho sinh viên, giảng viên và quản trị viên, tích hợp chat real-time và xuất báo cáo Excel/PDF.',
    tech_detail: 'Frontend phát triển bằng React 18, Vite, Redux Toolkit và Ant Design. Backend sử dụng ASP.NET Core (C#) tích hợp SignalR cho truyền tải dữ liệu thời gian thực.',
    deploy_note: 'Dự án tốt nghiệp đạt điểm cao. Phần Backend do thành viên khác thực hiện, hiện đang ở trạng thái offline.',
    achievements: [
      'Xây dựng hệ thống quản lý 40+ trang nghiệp vụ phức tạp.',
      'Tích hợp SignalR Chat Real-time với trạng thái typing và đếm tin nhắn.',
      'Hệ thống phân quyền 3 lớp (Admin, Teacher, Student) bảo mật cao.',
      'Xuất báo cáo chuyên nghiệp qua ExcelJS và jsPDF.'
    ],
    tech: ['React', 'Redux Toolkit', 'Ant Design', 'SignalR', 'Axios', 'Recharts'],
    github: 'https://github.com/NgoDat2003/student_management',
    demo: 'https://student-management-eta-drab.vercel.app',
    image: '/assets/images/student-management.png',
    images: [
      '/assets/images/login.png',
      '/assets/images/admin-dashboard.png',
      '/assets/images/student-dashboard.png',
      '/assets/images/teacher-dashboard.png',
      '/assets/images/grades.png',
      '/assets/images/chat.png'
    ],
    full_description: `
### Trang đăng nhập
![Login](/assets/images/login.png)

### Dashboard Admin
![Admin Dashboard](/assets/images/admin-dashboard.png)

### Dashboard Sinh viên
![Student Dashboard](/assets/images/student-dashboard.png)

### Dashboard Giảng viên
![Teacher Dashboard](/assets/images/teacher-dashboard.png)

### Quản lý điểm & Chat Real-time
![Grades](/assets/images/grades.png)
![Chat](/assets/images/chat.png)

## ✨ Tính Năng Chính
###  Quản trị viên (Admin)
- Dashboard thống kê tổng quan (biểu đồ Bar, Pie, Line).
- Quản lý người dùng, sinh viên, giảng viên (CRUD đầy đủ).
- Quản lý môn học, lớp học, chương trình đào tạo.
- Quản lý điểm, học phí và xuất báo cáo Excel chuyên nghiệp.

###  Sinh viên
- Xem và chỉnh sửa thông tin cá nhân, ngân hàng, BHYT.
- Đăng ký môn học theo đợt, xem thời khóa biểu.
- Xem điểm, công nợ học phí và thông tin tốt nghiệp.
- Chat real-time trực tiếp với giảng viên chủ nhiệm.

###  Giảng viên
- Dashboard quản lý các lớp học phần đang dạy.
- Nhập điểm (hỗ trợ import từ file Excel), quản lý điểm danh.
- Quản lý bài tập, tài liệu học tập và chat với sinh viên.

## 🔗 Tài Khoản Demo
| Role | Email | Mật khẩu |
|:---|:---|:---|
| Admin | admin | admin |
| Sinh viên | 20052005 | 123456 |
| Giảng viên | 12061985 | 123456 |

\`\`\`

## 📁 Cấu Trúc Dự Án
\`\`\`text
src/
├── component/    # 122 components tái sử dụng
│   ├── Admin/    # Components quản trị
│   ├── Teacher/  # Components giảng viên
│   ├── Student/  # Components sinh viên
│   └── Chat/     # Chat widget real-time
├── page/         # 40 trang nghiệp vụ phân quyền
├── redux/        # State management (User, Theme)
├── service/      # 34+ API service files tương tác BE
└── until/        # Utilities (Export Excel/PDF)
\`\`\`

## 🔐 Phân Quyền
| Role    | ID | Quyền truy cập    |
|:---     |:---|:---               |
| Admin   | 1  | Toàn bộ hệ thống  |
| Teacher | 2  | Portal giảng viên |
| Student | 3  | Portal sinh viên  |
`
  },
  {
    id: 'ecommerce',
    title: 'Hệ sinh thái E-Commerce Full-stack',
    category: 'Full-stack',
    timeline: 'Tháng 05/2024 — Tháng 08/2024',
    desc: 'Nền tảng thương mại điện tử đồng bộ từ Giao diện khách hàng đến Hệ thống quản trị kho bãi và giao dịch Backend.',
    tech_detail: 'Tự phát triển 100% cả Frontend (React/Vite) và Backend (Node.js/Express). Tương tác cơ sở dữ liệu qua Sequelize (PostgreSQL) và đóng gói Docker.',
    deploy_note: 'Dự án đã được triển khai thành công bản Live Demo (Full-stack) trên Vercel.',
    achievements: [
      'Tự thiết kế Database Schema tối ưu cho 10,000+ sản phẩm.',
      'Tích hợp Authentication JWT & Role-based Access Control (RBAC).',
      'Đóng gói thành công Docker Container giúp Deploy dễ dàng.',
      'UI/UX hiện đại với Tailwind CSS và Framer Motion.'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    github: '#',
    github_fe: 'https://github.com/NgoDat2003/fronend_web',
    github_be: 'https://github.com/NgoDat2003/backend_web',
    demo: 'https://sh-shop-dats-projects-eadf36c1.vercel.app/',
    image: '/assets/image_fullstack/dashboard.png',
    images: [
      '/assets/image_fullstack/login.png',
      '/assets/image_fullstack/register.png',
      '/assets/image_fullstack/product.png',
      '/assets/image_fullstack/cart_step1.png',
      '/assets/image_fullstack/cart_step2.png',
      '/assets/image_fullstack/history_order.png',
      '/assets/image_fullstack/dashboard.png',
      '/assets/image_fullstack/admin_management_user.png'
    ],
    full_description: `## 🔗 Tài Khoản Demo
| Vai trò | Email | Mật khẩu |
|:---|:---|:---|
| **Admin** | \`admin@gmail.com\` | \`123456\` |
| **Người dùng** | Khách tự Đăng ký | *(Tự chọn)* |

## ✨ Tính Năng Chính
### 🛒 Trải nghiệm mua sắm (Khách hàng)
- Tìm kiếm, lọc và phân loại sản phẩm nhanh chóng.
- Hệ thống Giỏ hàng thông minh (Cart), lưu trạng thái mua sắm.
- Quy trình thanh toán đa bước chuẩn Thương mại điện tử.
- Theo dõi lịch sử đơn hàng và quy trình vận chuyển.

### 🛡️ Quản trị hệ thống (Admin CMS)
- Trang Dashboard chuyên nghiệp thống kê doanh thu bán hàng.
- Quản lý danh mục sản phẩm và kho hàng (Inventory).
- Quản lý tài khoản khách hàng, phân quyền hệ thống (RBAC).

## 🛠 Kiến Trúc & Công Nghệ
Dự án Full-stack xây dựng theo mô hình Monolith tinh gọn, đảm bảo tốc độ phản hồi tính năng nhanh và dễ đóng gói.
- **Frontend:** Xây dựng bằng ReactJS, giao diện Tailwind CSS (Mobile First).
- **Backend:** Node.js (Express), tối ưu hóa luồng xử lý truy vấn API.
- **Database:** PostgreSQL quản lý hiệu quả qua Sequelize ORM (có chuẩn bị Migration và Seeder).
- **Bảo mật:** Authentication bằng JWT bảo mật đa tầng, băm Password Hashing an toàn.
- **DevOps:** Đóng gói toàn bộ ứng dụng bằng Docker Container, triển khai Vercel CI/CD tức thời.

## 📸 Giao Diện Thực Tế

### Đăng nhập & Đăng ký
![Login](/assets/image_fullstack/login.png)
![Register](/assets/image_fullstack/register.png)

### Trang Sản Phẩm & Danh Mục
![Product](/assets/image_fullstack/product.png)

### Quy Trình Giỏ Hàng (Cart & Checkout)
![Cart Step 1](/assets/image_fullstack/cart_step1.png)
![Cart Step 2](/assets/image_fullstack/cart_step2.png)

### Lịch Sử Đơn Hàng
![History](/assets/image_fullstack/history_order.png)

### Dashboard (Thống Kê)
![Admin Dashboard](/assets/image_fullstack/dashboard.png)

### Admin Quản Lý Sinh Viên & Người Dùng
![Admin User](/assets/image_fullstack/admin_management_user.png)
`
  }
];
