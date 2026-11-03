import type { Project } from '../project-types';

/** QLHD: store lease contract lifecycle, payment schedules and SAP journal-entry export. */
export const storeLeaseManagementProject: Project = {
  id: 'store-lease-management',
  title: 'Store Lease Management (QLHD)',
  category: 'Fullstack / Quản lý hợp đồng thuê mặt bằng',
  timeline: '06/2026 - Present',
  status: 'production',
  role: 'Fullstack Developer, người viết code chính',
  platform: 'Web nội bộ — Next.js 15 + NestJS 10 + PostgreSQL 16, chạy bằng Docker Compose',
  client: 'Nội bộ tập đoàn: Admin, Kế toán và bộ phận mặt bằng (Site)',
  team: 'Tôi viết toàn bộ code trong repo; OCR gọi một service có sẵn bên ngoài',
  desc: 'Hệ thống quản lý vòng đời hợp đồng thuê mặt bằng của chuỗi cửa hàng, đang quản lý 100+ hợp đồng: hồ sơ, phụ lục điều chỉnh giá có chạy thử (dry-run), thanh lý, lịch thanh toán và file bút toán Journal Entry cho SAP B1 không trùng kỳ.',
  tech: ['Next.js 15', 'NestJS 10', 'Prisma 7', 'PostgreSQL 16', 'TanStack Query', 'ExcelJS', 'MinIO', 'Docker'],
  github: '#',
  demo: '#',
  image: '/assets/diagrams/lease-management-architecture.svg',
  cover: '/assets/diagrams/lease-management-cover.svg',
  challenges: [
    {
      title: 'Sửa điều khoản của kỳ đã chi hoặc đã xuất SAP',
      problem: 'Khi một kỳ thanh toán đã chi hoặc đã xuất bút toán sang SAP, việc sửa giá thuê hay điều khoản của hợp đồng có thể làm số liệu kỳ đó lệch với sổ kế toán.',
      solution: 'Mỗi hợp đồng có một mốc khóa (anchor) là kỳ cuối đã chi hoặc đã xuất. Điều khoản mới chỉ áp dụng từ kỳ sau mốc khóa, còn thao tác sửa vào phần đã khóa bị chặn ở tầng service.',
    },
    {
      title: 'Xuất bút toán trùng trong cùng một kỳ',
      problem: 'Kế toán xuất file bút toán theo kỳ; nếu xuất lại cùng một hợp đồng trong một kỳ, SAP sẽ nhận bút toán trùng.',
      solution: 'Hợp đồng đã xuất trong kỳ được đánh dấu và tự bỏ qua ở lần xuất sau, kèm cảnh báo. Muốn xuất lại phải bật cờ riêng, mặc định là tắt.',
    },
    {
      title: 'Giá thuê theo bậc bị chồng hoặc hở ngày',
      problem: 'Phụ lục thường đổi giá thuê theo từng giai đoạn; nhập tay dễ tạo hai giai đoạn chồng lên nhau hoặc để hở vài ngày không có giá.',
      solution: 'Validate để các giai đoạn liền kề không chồng lấn và không hở quá 1 ngày, đồng thời cho chạy thử phụ lục để xem bảng chênh lệch từng kỳ trước khi ghi.',
    },
  ],
  full_description: `
## Tổng quan
Trước đây hợp đồng thuê mặt bằng của chuỗi cửa hàng được theo dõi thủ công bằng Excel, email và ổ chia sẻ. Hệ thống gom hồ sơ mặt bằng và hợp đồng về một nơi, tính lịch thanh toán và tạo file bút toán cho kế toán; file này vẫn được kế toán nhập vào SAP Business One thủ công.
Người dùng gồm Admin, Kế toán và bộ phận mặt bằng (Site), mỗi vai trò có quyền riêng.

## Vai trò & đóng góp
- **Hợp đồng & phụ lục:** hồ sơ hợp đồng, phụ lục điều chỉnh giá theo bậc, chạy thử phụ lục để xem từng kỳ bị khóa, mới, điều chỉnh hay giữ nguyên trước khi ghi.
- **Thanh lý:** xử lý tiền cọc theo 4 trường hợp: giữ cọc, hoàn cọc, mất cọc và hoàn một phần.
- **Lịch thanh toán:** tính tiền kỳ đầu và kỳ cuối theo số ngày thực tế, chu kỳ thanh toán theo tháng, màn hình theo dõi dòng tiền.
- **Xuất SAP:** bút toán Journal Entry (header và line) theo template DTW, phân bổ theo tỷ lệ cửa hàng/brand, không xuất trùng kỳ.
- **Master data:** import file Excel dạng streaming, xem trước phần thay đổi trước khi áp dụng.
- **Nhập liệu bằng OCR:** gọi service OCR có sẵn; nếu service lỗi thì người dùng vẫn nhập tay được.
- **Phụ trợ:** audit log ghi từng thay đổi tới mức cột, cảnh báo hợp đồng sắp hết hạn, dashboard, lưu PDF hợp đồng trên MinIO, đăng nhập bằng tài khoản và mật khẩu với argon2 và JWT refresh.

## Kiến trúc
- Monorepo pnpm + Turborepo: web Next.js 15 (React 19, TanStack Query 5, Zustand) và API NestJS 10 (Prisma 7, PostgreSQL 16, ExcelJS), chạy bằng Docker Compose.
- Trong sơ đồ, ô nền vàng viền cam là phần tôi làm; ô nét đứt là nền tảng hoặc service bên ngoài.
- Hệ thống nội bộ của công ty nên portfolio chỉ mô tả nghiệp vụ, phần đóng góp và sơ đồ kiến trúc, không kèm mã nguồn.
`,
};
