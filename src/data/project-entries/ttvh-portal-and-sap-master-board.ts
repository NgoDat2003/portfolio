import type { Project } from '../project-types';

/** TTVH internal portal (Entra ID SSO, sessions, permissions) plus the SAP Master Board document monitor. */
export const ttvhPortalProject: Project = {
  id: 'ttvh-portal',
  title: 'TTVH Portal & SAP Master Board',
  category: 'Fullstack / Portal nội bộ & Master Board SAP',
  timeline: '06/2026 - Present',
  status: 'production',
  role: 'Fullstack Developer, người viết chính',
  platform: 'Web nội bộ — Next.js 15 + NestJS 10, monorepo Turborepo',
  client: 'Nội bộ tập đoàn: nhân viên, admin và người được cấp quyền xem SAP',
  team: 'Team IT nội bộ; một số nhánh do đồng nghiệp đóng góp',
  desc: 'Portal nội bộ đăng nhập một lần bằng tài khoản Microsoft để mở các hệ thống của tập đoàn và gửi yêu cầu hỗ trợ IT. Đi kèm là Master Board: hai màn hình theo dõi chuỗi chứng từ bán và trả hàng trong SAP Business One, cùng studio quản lý câu truy vấn.',
  tech: ['Next.js 15', 'NestJS 10', 'Prisma 7', 'PostgreSQL', 'Entra ID (MSAL)', 'SQL Server', 'Orval', 'Turborepo'],
  github: '#',
  demo: '#',
  image: '/assets/diagrams/ttvh-portal-architecture.svg',
  cover: '/assets/diagrams/ttvh-portal-cover.svg',
  challenges: [
    {
      title: 'Nhiều tab cùng làm mới một refresh token',
      problem: 'Refresh token được xoay vòng sau mỗi lần dùng. Khi người dùng mở nhiều tab, các tab có thể gửi cùng một token cũ gần như cùng lúc; nếu coi mọi lần dùng lại là tấn công replay thì người dùng bị đăng xuất oan.',
      solution: 'Xoay vòng token bằng cập nhật có điều kiện (CAS) trên PostgreSQL. Token cũ dùng lại trong 15 giây thì API trả 409 để client thử lại; quá 15 giây mới coi là replay và thu hồi mọi phiên của người dùng. Có integration test chạy trên Postgres thật.',
    },
    {
      title: 'Sửa câu truy vấn mà không phải deploy lại',
      problem: 'Hai màn hình monitor dựa trên 25 câu SQL. Nếu để trong code thì mỗi lần chỉnh điều kiện lọc lại phải build và release.',
      solution: 'Đưa 25 câu truy vấn vào database theo version: bản sửa được validate trước khi publish, có rollback về bản trước và audit log cho mỗi thay đổi.',
    },
    {
      title: 'Truy vấn SAP dồn qua một đường kết nối',
      problem: 'Dữ liệu SAP được đọc qua một linked server của SQL Server. Nhiều truy vấn chạy cùng lúc dễ nghẽn, và thông tin kết nối có thể được đổi khi hệ thống đang chạy.',
      solution: 'Gateway dùng khóa FIFO để mỗi lúc chỉ một truy vấn đi qua linked server. Khi đổi kết nối, hệ thống mở pool mới, commit rồi mới đóng pool cũ; credential được mã hóa AES-256-GCM và chỉ một kết nối được bật.',
    },
  ],
  full_description: `
## Tổng quan
TTVH Portal là cổng nội bộ của tập đoàn: nhân viên đăng nhập một lần bằng tài khoản Microsoft (Entra ID), mở các hệ thống nội bộ từ một trang, và gửi yêu cầu hỗ trợ IT có bình luận và file đính kèm.
Master Board là module theo dõi chứng từ SAP trong Portal, dùng chung đăng nhập và phân quyền. Dữ liệu bán hàng đi từ POS ở cửa hàng qua iPOS và các database trung gian rồi đồng bộ sang SAP Business One; Master Board đọc chứng từ trong SAP để chỉ ra chứng từ đang kẹt ở bước nào.
Theo ước tính, Master Board giúp tiết kiệm khoảng 1-2 giờ mỗi ngày cho việc rà soát chứng từ.

## Vai trò & đóng góp
- **Đăng nhập Microsoft:** Entra ID qua MSAL ở frontend; backend kiểm token bằng JWKS và tự tạo tài khoản nhân viên ở lần đăng nhập đầu.
- **Phiên đăng nhập:** hai cookie httpOnly tách path cho access và refresh, refresh token xoay vòng có phát hiện dùng lại.
- **Phân quyền:** catalog 9 quyền, role kết hợp quyền bổ sung cho từng người, guard kiểm quyền ở mỗi request và guard kiểm Origin.
- **Contract API:** OpenAPI sinh từ DTO của NestJS, Orval sinh hook React Query cho frontend.
- **Master Board, bán hàng:** 9 nhóm chứng từ treo, mỗi nhóm gắn nhãn "cần xử lý" hoặc "bình thường", kèm phễu chuyển đổi và cohort.
- **Master Board, trả hàng:** theo dõi chuỗi 7 trạng thái từ đơn bán, đơn mua đến A/P và hóa đơn.
- **Studio truy vấn & kết nối:** 25 câu truy vấn có version, quản trị kết nối SAP với credential mã hóa, bật/tắt cửa hàng và brand cần theo dõi, xuất Excel dạng streaming.
- **Thử nghiệm (POC):** workflow n8n phân loại 8 nhóm lỗi đồng bộ và gửi Telegram theo nhóm, mới chạy trên môi trường sandbox.

## Kiến trúc
- Monorepo Turborepo + pnpm: web Next.js 15 (React 19, Base UI, Tailwind 4, TanStack Query 5) và API NestJS 10 (Prisma 7, PostgreSQL); file đính kèm lưu trên MinIO.
- Module Master Board đọc SAP HANA qua linked server của SQL Server (mssql) và xuất Excel bằng ExcelJS; quyền xem Master Board được cấp qua hệ thống phân quyền của Portal.
- Trong sơ đồ, ô nền vàng viền cam là phần tôi làm; ô nét đứt là nền tảng hoặc phần của team.
`,
};
