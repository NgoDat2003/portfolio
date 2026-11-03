import type { Project } from '../project-types';

/** Company QA/QC audit app (team-owned, in production): contributor-scoped page listing only my features. */
export const qaqcCompanyAppProject: Project = {
  id: 'qaqc-company-app',
  title: 'QA/QC Audit App — Store Quality Audits',
  category: 'Fullstack (đóng góp) / App audit chất lượng cửa hàng',
  timeline: '04/2026 - 10/2026',
  status: 'production',
  role: 'Fullstack Developer, người đóng góp: lọc nhiều brand trên dashboard, bổ sung điểm, phí QC, payroll 3P',
  platform: 'Web nội bộ — Next.js 16 + NestJS 11, MongoDB',
  client: 'Nội bộ tập đoàn: QAM, QC, cửa hàng trưởng (SM), quản lý khu vực (AM), Admin',
  team: 'App của team; phần lớn code do 2 đồng nghiệp viết',
  desc: 'App audit chất lượng cửa hàng của tập đoàn đang chạy production: lập kế hoạch audit, QC chấm điểm theo checklist, Action Plan khắc phục, dashboard và báo cáo. Tôi đóng góp bộ lọc brand cho dashboard, bổ sung điểm hàng loạt, phí QC theo cửa hàng và xuất bảng payroll 3P.',
  tech: ['Next.js 16', 'NestJS 11', 'MongoDB', 'Ant Design 6', 'TanStack Query', 'Turborepo'],
  github: '#',
  demo: '#',
  image: '/assets/diagrams/qaqc-company-app-architecture.svg',
  cover: '/assets/diagrams/qaqc-company-app-cover.svg',
  challenges: [
    {
      title: 'Xuất payroll 3P lỗi 500 khi chạy trong Docker',
      problem: 'Chức năng xuất payroll 3P chạy đúng ở máy dev nhưng trả lỗi 500 khi chạy trong container.',
      solution: 'Tìm ra file template Excel của báo cáo chưa được track trong git nên không có trong image; đưa template vào repo và sửa .gitignore để bản build nào cũng có file.',
    },
    {
      title: 'Audit bị thiếu điểm sau khi chấm',
      problem: 'Một số audit đã chấm vẫn còn tiêu chí chưa có điểm, làm kết quả và báo cáo không đầy đủ.',
      solution: 'Làm API liệt kê các tiêu chí còn thiếu điểm của một kế hoạch audit và API áp điểm hàng loạt, dùng service bổ sung điểm có sẵn của team.',
    },
    {
      title: 'Lọc dashboard theo nhiều brand cùng lúc',
      problem: 'Tập đoàn có nhiều brand, QAM cần xem kết quả của vài brand trên cùng một dashboard.',
      solution: 'Thêm bộ lọc brand và multi-select ở cả query API lẫn giao diện dashboard QAM, giữ nguyên phần tính metric của team.',
    },
  ],
  full_description: `
## Tổng quan
App QA/QC là hệ thống audit chất lượng cửa hàng của tập đoàn, đang chạy production. QAM lập kế hoạch audit, QC chấm điểm theo checklist tại cửa hàng, cửa hàng xử lý Action Plan, và các vai trò xem kết quả trên dashboard của mình.
Đây là app của team, phần lớn code do 2 đồng nghiệp viết. Phần lõi như chấm điểm, trừ điểm lỗi nghiêm trọng (CCP), nhắc Action Plan, metric dashboard, xử lý dữ liệu định kỳ và test E2E do đồng nghiệp viết. Trang này chỉ ghi phần tôi làm.

## Vai trò & đóng góp
- **Lọc nhiều brand trên dashboard QAM:** bộ lọc theo brand và multi-select ở cả API lẫn giao diện.
- **Bổ sung điểm:** API liệt kê tiêu chí còn thiếu điểm và áp điểm hàng loạt.
- **Action Plan:** ghi chú trên trang chi tiết Action Plan.
- **Phí QC:** đơn giá QC theo từng cửa hàng, script backfill cho dữ liệu cũ, cột phí QC trên danh sách cửa hàng.
- **Payroll 3P:** xuất file Excel payroll 3P (cấu trúc cột, chọn loại cửa hàng franchise) và sheet payroll trong file kết quả BSC.

## Kiến trúc
- Monorepo pnpm + Turborepo: web Next.js 16 (Ant Design 6, TanStack Query 5, Orval) và API NestJS 11 (Mongoose 8, MongoDB); ảnh bằng chứng lưu trên MinIO.
- Trong sơ đồ, ô nền vàng viền cam là phần tôi làm; ô nét đứt là phần của team hoặc nền tảng.
- Hệ thống nội bộ của công ty nên portfolio chỉ mô tả, không kèm mã nguồn hay tài liệu nội bộ.
`,
};
