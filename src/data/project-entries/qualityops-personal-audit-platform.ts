import type { Project } from '../project-types';

/** QualityOps: personal rebuild of a QA/QC audit flow, with a Playwright E2E lifecycle video. */
export const qualityOpsProject: Project = {
  id: 'qaqc-platform',
  title: 'QualityOps — Personal QA/QC Audit Platform',
  category: 'Dự án cá nhân / Quy trình audit QA/QC',
  timeline: '05/2026 - 07/2026',
  role: 'Tự làm frontend, backend và test E2E',
  platform: 'Web — frontend Next.js 16, backend Next.js 14 (API routes) + Prisma 5 + PostgreSQL',
  client: 'Dự án cá nhân, dữ liệu mẫu',
  team: 'Một mình',
  desc: 'Dự án cá nhân dựng lại nghiệp vụ audit QA/QC cho chuỗi cửa hàng với kiến trúc riêng: lập kế hoạch audit, QC chấm checklist có lỗi nghiêm trọng (CCP/RISK), Action Plan khắc phục, dashboard theo vai trò, kèm bộ test Playwright E2E chạy cả vòng đời.',
  tech: ['Next.js 16', 'Next.js 14 API', 'Prisma 5', 'PostgreSQL', 'TanStack Query', 'Zod', 'Playwright', 'Vitest'],
  github: 'https://github.com/NgoDat2003/qaqc_fe',
  github_fe: 'https://github.com/NgoDat2003/qaqc_fe',
  github_be: 'https://github.com/NgoDat2003/qaqc_be',
  demo: 'https://qaqc-fe.vercel.app/',
  video: '/assets/qaqc/qaqc-full-lifecycle-e2e.webm',
  video_note: 'Video được quay tự động khi chạy bộ Playwright E2E trên máy local (bật video và trace), không phải quay tay. Luồng 5 bước: QAM tạo và giao kế hoạch, QC chấm lỗi thường và lỗi CCP kèm bằng chứng, QAM tạo Action Plan, SM khắc phục, QAM đóng Action Plan.',
  image: '/assets/screenshots/qualityops-audit-checklist.jpg',
  challenges: [
    {
      title: 'Lỗi nghiêm trọng phải làm audit không đạt',
      problem: 'Chấm theo điểm trung bình thì một lỗi nghiêm trọng về an toàn có thể bị che bởi nhiều tiêu chí đạt.',
      solution: 'Hàm tính điểm xử lý riêng: lỗi RISK đưa điểm cuối về 0 và xếp loại "alarm", còn tiêu chí CCP được trừ điểm theo quy tắc riêng.',
    },
    {
      title: 'Một người giữ nhiều vai trò',
      problem: 'Trong chuỗi cửa hàng, một người có thể vừa quản lý khu vực vừa phụ trách QA, nên mỗi tài khoản không thể chỉ gắn một role.',
      solution: 'Bảng gán role cho phép một user có nhiều role trong 6 role của hệ thống; middleware kiểm JWT trong cookie rồi chuyển danh sách role cho từng API kiểm quyền.',
    },
    {
      title: 'Kiểm chứng cả vòng đời qua nhiều vai trò',
      problem: 'Luồng audit đi qua nhiều tài khoản khác nhau; test từng màn hình riêng lẻ không chứng minh được cả luồng chạy đúng.',
      solution: 'Viết bộ Playwright E2E 5 bước, mỗi bước đăng nhập bằng một vai trò, từ tạo kế hoạch đến đóng Action Plan, và bật quay video để ghi lại toàn bộ luồng.',
    },
  ],
  full_description: `
## Tổng quan
QualityOps là dự án cá nhân tôi làm để dựng lại nghiệp vụ audit QA/QC của chuỗi cửa hàng theo kiến trúc riêng, tách hẳn khỏi app QA/QC của công ty. Bản demo dùng dữ liệu mẫu.

## Vai trò & đóng góp
- **Kế hoạch & chấm điểm:** QAM tạo kế hoạch audit và phân công QC; QC chấm checklist, đánh dấu lỗi CCP/RISK và đính kèm bằng chứng.
- **Action Plan:** tự sinh Action Plan từ lỗi; cửa hàng trưởng khắc phục, QAM kiểm tra và đóng.
- **Phân quyền:** 6 role, một user nhiều role, JWT trong cookie.
- **Dashboard:** dashboard riêng cho từng vai trò.
- **Kiểm thử:** bộ Playwright E2E 5 bước và test Vitest.

## Kiến trúc
- Frontend Next.js 16 (React 19, TanStack Query 5, Zod 4, Zustand, Tailwind 4).
- Backend Next.js 14 API routes với Prisma 5 trên PostgreSQL, JWT ký bằng jose.

## Demo
- Live demo: [qaqc-fe.vercel.app](https://qaqc-fe.vercel.app/)

![Màn hình tạo kế hoạch audit trong video E2E](/assets/screenshots/qualityops-audit-plan.jpg)
![QC chấm checklist trong video E2E (đã che tên cửa hàng)](/assets/screenshots/qualityops-audit-checklist.jpg)
`,
};
