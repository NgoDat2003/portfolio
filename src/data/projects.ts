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
  video?: string;
  image: string;
  images?: string[];
  full_description: string;
}

export const projects: Project[] = [
  {
    id: 'qaqc-platform',
    title: 'QualityOps QA/QC Platform',
    category: 'Frontend / Full-stack Dashboard',
    timeline: '05/2026 - Present',
    desc: 'Hệ thống QA/QC audit workflow cho chuỗi cửa hàng: lập kế hoạch audit, QC chấm lỗi, upload evidence, tính điểm, tạo Action Plan và dashboard theo vai trò.',
    tech_detail: 'Frontend dùng Next.js, React, TypeScript, TanStack Query và Tailwind CSS. Backend dùng Next.js API Routes, Prisma ORM, PostgreSQL, JWT/RBAC và Playwright E2E cho các flow chính.',
    deploy_note: 'Có live demo frontend, source FE/BE và Playwright evidence cho full QA/QC lifecycle.',
    achievements: [
      'Xây dựng module theo vai trò QAM, QC, SM, AM và Admin.',
      'Triển khai audit plan, checklist, QC submission, evidence upload, scoring logic và Action Plan lifecycle.',
      'Tạo role-based dashboard, data table, filter, empty/loading state và responsive layout.',
      'Kiểm thử các luồng chính bằng Vitest và Playwright E2E.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'TanStack Query', 'Prisma', 'Playwright'],
    github: '#',
    github_fe: 'https://github.com/NgoDat2003/qaqc_fe',
    github_be: 'https://github.com/NgoDat2003/qaqc_be',
    demo: 'https://qaqc-fe.vercel.app/',
    video: '/assets/qaqc/qaqc-full-lifecycle-e2e.webm',
    image: '/assets/qaqc/qaqc-playwright-report.png',
    images: ['/assets/qaqc/qaqc-playwright-report.png'],
    full_description: `
## Tổng quan
QualityOps là hệ thống quản lý audit QA/QC cho chuỗi cửa hàng, tập trung vào workflow nhiều vai trò: QAM lập kế hoạch, QC thực hiện audit, SM cập nhật khắc phục, AM theo dõi khu vực và Admin quản trị dữ liệu.

## Vai trò của tôi
- Phân tích nghiệp vụ QA/QC từ checklist, scoring rule, audit execution, evidence upload và Action Plan.
- Triển khai các màn hình dashboard, bảng dữ liệu, form và luồng tích hợp API.
- Xây dựng một phần API route, validation logic và kiểm thử tự động cho luồng nghiệp vụ chính.

## Tính năng chính
- Role-based dashboard cho Admin, QAM, QC, SM và AM.
- Audit planning, assignment, checklist configuration và QC audit submission.
- Evidence upload, scoring engine, CCP/RISK rule và Action Plan lifecycle.
- Playwright E2E demo cho flow QAM -> QC -> SM -> QAM.
- Video demo E2E dài khoảng 2 phút được sinh tự động từ Playwright, không phải quay tay.

## Công nghệ
- Frontend: Next.js, React, TypeScript, TanStack Query, Tailwind CSS.
- Backend: Next.js API Routes, Prisma ORM, PostgreSQL, JWT/RBAC.
- Testing: Vitest, Playwright E2E.

## Hình ảnh kiểm thử
![QAQC Playwright Report](/assets/qaqc/qaqc-playwright-report.png)
`,
  },
  {
    id: 'inno-pos',
    title: 'Inno POS Enterprise Modules',
    category: 'Frontend / POS Workflow',
    timeline: '06/2025 - 03/2026',
    desc: 'Các module frontend cho hệ thống POS đa kênh: sales order, inventory, shipping và repair order, tập trung vào form nghiệp vụ và xử lý dữ liệu qua API.',
    tech_detail: 'React.js, TypeScript, TanStack Query, React Hook Form, Zod và Playwright cho regression flow.',
    deploy_note: 'Dự án doanh nghiệp nội bộ, không public source/demo. Portfolio chỉ mô tả phạm vi công việc và kỹ thuật đã sử dụng.',
    achievements: [
      'Phát triển form nghiệp vụ có validation thống nhất bằng React Hook Form và Zod.',
      'Tích hợp API cho sales, inventory, shipping và repair tracking workflows.',
      'Tối ưu server state với TanStack Query để giảm request lặp.',
      'Viết Playwright test cho các flow quan trọng.',
    ],
    tech: ['React', 'TypeScript', 'TanStack Query', 'Zod', 'Playwright'],
    github: '#',
    demo: '#',
    image: '/assets/image_fullstack/dashboard.png',
    images: ['/assets/image_fullstack/dashboard.png', '/assets/image_fullstack/product.png'],
    full_description: `
## Tổng quan
Inno POS Enterprise là hệ thống POS đa kênh phục vụ nghiệp vụ bán hàng, quản lý tồn kho, giao hàng và sửa chữa.

## Vai trò của tôi
- Tham gia phát triển các module frontend trong hệ thống POS.
- Xây dựng form nghiệp vụ, data table, API integration và regression test cho flow quan trọng.
- Phối hợp xử lý lỗi UI/API trong quá trình phát triển và kiểm thử.

## Công nghệ
- React.js, TypeScript, TanStack Query.
- React Hook Form, Zod.
- Playwright.
`,
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    category: 'Graduation Project / Frontend',
    timeline: '09/2025 - 12/2025',
    desc: 'Đồ án tốt nghiệp quản lý sinh viên, giảng viên và quản trị viên, có dashboard, phân quyền, quản lý điểm và chat real-time.',
    tech_detail: 'Frontend dùng React 18, Vite, Redux Toolkit và Ant Design. Backend ASP.NET Core/SignalR do thành viên khác phụ trách.',
    deploy_note: 'Có live demo frontend. Một số API/backend có thể không còn online ổn định vì đây là đồ án tốt nghiệp.',
    achievements: [
      'Xây dựng nhiều màn hình nghiệp vụ cho Admin, Teacher và Student.',
      'Tích hợp API, quản lý state bằng Redux Toolkit và xử lý UI theo role.',
      'Tích hợp chat real-time với SignalR ở frontend.',
      'Hỗ trợ xuất báo cáo Excel/PDF ở một số màn hình nghiệp vụ.',
    ],
    tech: ['React', 'Redux Toolkit', 'Ant Design', 'SignalR', 'Axios'],
    github: 'https://github.com/NgoDat2003/student_management',
    demo: 'https://student-management-eta-drab.vercel.app',
    image: '/assets/images/student-management.png',
    images: [
      '/assets/images/login.png',
      '/assets/images/admin-dashboard.png',
      '/assets/images/student-dashboard.png',
      '/assets/images/teacher-dashboard.png',
      '/assets/images/grades.png',
      '/assets/images/chat.png',
    ],
    full_description: `
## Tổng quan
Student Management System là đồ án tốt nghiệp mô phỏng hệ thống quản lý sinh viên, giảng viên và quản trị viên.

## Vai trò của tôi
- Phụ trách chính phần frontend React.
- Xây dựng UI theo role, dashboard, form quản lý và tích hợp API.
- Tích hợp các màn hình chat, điểm, sinh viên, giảng viên và báo cáo.

## Tài khoản demo
| Role | Email | Mật khẩu |
| Admin | admin | admin |
| Sinh viên | 20052005 | 123456 |
| Giảng viên | 12061985 | 123456 |

## Hình ảnh
![Login](/assets/images/login.png)
![Admin Dashboard](/assets/images/admin-dashboard.png)
![Student Dashboard](/assets/images/student-dashboard.png)
![Teacher Dashboard](/assets/images/teacher-dashboard.png)
![Grades](/assets/images/grades.png)
![Chat](/assets/images/chat.png)
`,
  },
];
