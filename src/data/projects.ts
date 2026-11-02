/** One "challenge → solution" pair shown as a card on the project detail page. */
export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  timeline: string;
  // Optional case-study facts and challenges; entries without them show only category and timeline.
  role?: string;
  client?: string;
  platform?: string;
  team?: string;
  challenges?: ProjectChallenge[];
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
    id: 'ttvh-portal',
    title: 'Enterprise Operations Web Portal',
    category: 'Enterprise Monorepo / Operations Portal',
    timeline: '04/2026 - Present',
    desc: 'Hệ thống Cổng thông tin điều hành doanh nghiệp tập trung hóa cho chuỗi bán lẻ F&B quy mô 300+ cửa hàng, tích hợp xác thực Microsoft Entra ID (Azure AD SSO) và kiến trúc Monorepo Turborepo.',
    tech_detail: 'Turborepo Monorepo (Next.js 15 App Router, React 19, NestJS 10, PostgreSQL 16, Prisma 7, Microsoft Entra ID MSAL, Orval OpenAPI codegen, Base UI, Tailwind v4).',
    deploy_note: 'Hệ thống mạng nội bộ doanh nghiệp. Portfolio trình bày sơ đồ kiến trúc hệ thống và giải pháp kỹ thuật đã khử định danh IP doanh nghiệp.',
    achievements: [
      'Xây dựng kiến trúc Monorepo đồng bộ hóa types giữa Next.js 15 và NestJS 10 thông qua Contract-First OpenAPI và Orval codegen.',
      'Thiết lập xác thực Microsoft Entra ID (Azure AD SSO) qua MSAL với ranh giới assignment-required bảo mật.',
      'Thiết kế cơ chế Cookie-based JWT có tính năng Token Rotation nguyên tử và Replay Detection nhằm triệt tiêu rủi ro chiếm đoạt token.',
      'Tích hợp module điều phối yêu cầu vận hành cho chuỗi 300+ cửa hàng trên toàn quốc và phân hệ giám sát đối soát SAP B1.',
    ],
    tech: ['Next.js 15', 'NestJS 10', 'Turborepo', 'PostgreSQL', 'Azure AD SSO', 'Orval', 'Prisma'],
    github: '#',
    demo: '#',
    image: '/assets/diagrams/ttvh-portal-architecture.svg',
    images: ['/assets/diagrams/ttvh-portal-architecture.svg'],
    full_description: `
## Tổng quan kiến trúc
Enterprise Operations Web Portal là cổng điều hành tập trung kết nối ban giám đốc, khối hỗ trợ văn phòng và chuỗi 300+ cửa hàng F&B trên toàn quốc. Nền tảng hợp nhất quyền truy cập tất cả hệ thống phân tán, cung cấp app launcher, điều phối yêu cầu vận hành và tích hợp báo cáo đối soát dữ liệu với SAP Business One.

## Vai trò & Trách nhiệm kỹ thuật
- Thiết lập cấu trúc Monorepo bằng Turborepo và pnpm workspaces cho toàn bộ frontend và backend.
- Triển khai xác thực doanh nghiệp Microsoft Entra ID (Azure AD SSO) bằng MSAL trên Next.js 15 App Router.
- Xây dựng hệ thống quản lý session bảo mật với double httpOnly cookies, cơ chế Token Rotation và Replay Detection lưu trữ trên PostgreSQL.
- Thiết kế luồng Contract-First: định nghĩa API schema trên NestJS Swagger và tự động sinh typed React Query v5 hooks qua Orval.

## Điểm nhấn kỹ thuật
- **Bảo mật Enterprise:** Không lưu trữ token trong localStorage hay sessionStorage; áp dụng OriginCheckGuard chống CSRF và ranh giới phân quyền linh hoạt (Dynamic Permission Guard).
- **Hiệu năng & Đồng bộ:** Contract-First workflow giúp loại bỏ hoàn toàn việc lệch kiểu dữ liệu (type mismatch) giữa client và server.
- **Sơ đồ kiến trúc:** Sơ đồ luồng phân tầng dữ liệu và bảo mật đã được chuẩn hóa để minh họa giải pháp kỹ thuật.
`,
  },
  {
    id: 'store-lease-management',
    title: 'Store Lease Management Platform',
    category: 'Full-stack Platform / Enterprise Real Estate',
    timeline: '04/2026 - Present',
    desc: 'Nền tảng số hóa quản lý 100+ hợp đồng thuê mặt bằng chuỗi cửa hàng, thay thế hoàn toàn Excel; tích hợp Addendum Engine mô phỏng chi phí trước (Dry-run) và cơ chế chốt kỳ (Period-locking).',
    tech_detail: 'Next.js 15, NestJS, Prisma ORM, PostgreSQL, Tailwind CSS, Interactive HTML/JS Prototype, OCR Ingestion Assistant, SAP B1 Export Staging.',
    deploy_note: 'Dự án doanh nghiệp kết hợp bộ demo tương tác công khai đã được khử định danh dữ liệu mặt bằng.',
    achievements: [
      'Số hóa toàn diện dữ liệu và hồ sơ của 100+ hợp đồng thuê mặt bằng trên toàn quốc.',
      'Thiết kế module Phụ lục hợp đồng (Addendum) với thuật toán mô phỏng chi phí thuê (Dry-run) trước khi phê duyệt chính thức.',
      'Triển khai cơ chế Period-locking bảo toàn tính bất biến (immutability) của các kỳ tài chính đã chốt trước khi xuất sang SAP Business One.',
      'Xây dựng portal tài liệu hướng dẫn vận hành chi tiết và giao diện nguyên mẫu tương tác cho người dùng.',
    ],
    tech: ['Next.js 15', 'NestJS', 'Prisma', 'PostgreSQL', 'Financial Modeling', 'SAP Staging'],
    github: 'https://github.com/NgoDat2003/quan-ly-hop-dong',
    demo: 'https://ngodat2003.github.io/quan-ly-hop-dong/',
    image: '/assets/diagrams/lease-management-architecture.svg',
    images: ['/assets/diagrams/lease-management-architecture.svg'],
    full_description: `
## Tổng quan bài toán
Quản lý hợp đồng thuê mặt bằng bán lẻ tại các chuỗi F&B đối mặt với thách thức lớn về biến động chi phí: điều chỉnh giá thuê theo giai đoạn, khấu trừ thuế nhà đất, phân bổ tiền cọc và chia kỳ thanh toán phức tạp. Hệ thống giải quyết triệt để tình trạng phân mảnh của file Excel và đảm bảo số liệu kế toán đồng nhất với ERP SAP B1.

## Đóng góp kỹ thuật cốt lõi
- **Thuật toán Dry-Run Simulation:** Cho phép người dùng nhập các điều khoản phụ lục mới và xem trước ma trận chênh lệch chi phí (Diff Table) trong suốt vòng đời còn lại của hợp đồng trước khi kích hoạt.
- **Period-Locking Mechanism:** Khi một kỳ thanh toán đã được kế toán xác nhận và đối soát, hệ thống tự động khóa kỳ; mọi chỉnh sửa phát sinh sau đó bắt buộc phải tạo Addendum bù trừ chứ không được ghi đè lịch sử.
- **Chuẩn hóa dữ liệu SAP:** Sinh bảng phân bổ chi phí tiền thuê và tiền cọc theo đúng chuẩn dữ liệu đầu vào của phân hệ AP Invoice trên SAP Business One.

## Tài nguyên & Minh họa
- Bản demo nguyên mẫu giao diện tương tác và kiểm thử phân quyền đã được mở công khai tại GitHub Pages.
- Portal hướng dẫn quy trình nghiệp vụ số hóa hợp đồng tại: [qlhd-user-guide.vercel.app](https://qlhd-user-guide.vercel.app).
`,
  },
  {
    id: 'qaqc-platform',
    title: 'QualityOps QA/QC Audit Platform',
    category: 'Full-stack Platform / Quality Assurance',
    timeline: '05/2026 - Present',
    desc: 'Hệ thống quản lý quy trình audit QA/QC toàn diện cho chuỗi bán lẻ: lập kế hoạch thanh tra, QC chấm điểm checklist tại cửa hàng, upload bằng chứng, tính điểm tự động và vòng đời Action Plan.',
    tech_detail: 'Next.js 15, React, TypeScript, TanStack Query, Tailwind CSS, Prisma ORM, PostgreSQL, JWT/RBAC, Playwright E2E automated test harness.',
    deploy_note: 'Có live demo web app, portal tài liệu hướng dẫn và video kiểm thử E2E Playwright tự động.',
    achievements: [
      'Xây dựng hệ thống phân quyền 5 vai trò nghiệp vụ: QAM (Quản lý), QC (Thanh tra), SM (Cửa hàng trưởng), AM (Quản lý khu vực) và Admin.',
      'Triển khai công thức chấm điểm đa tiêu chí, đánh dấu điểm vi phạm nghiêm trọng (CCP/RISK) và sinh Action Plan khắc phục tức thì.',
      'Viết trọn bộ kịch bản kiểm thử tự động Playwright E2E mô phỏng luồng audit thực tế: QAM tạo kế hoạch -> QC kiểm tra & upload bằng chứng -> SM khắc phục -> QAM nghiệm thu.',
      'Sản sinh video demo E2E tự động từ Playwright CI nhằm kiểm chứng độ tin cậy của phần mềm.',
    ],
    tech: ['Next.js 15', 'TypeScript', 'TanStack Query', 'Prisma', 'PostgreSQL', 'Playwright E2E'],
    github: 'https://github.com/NgoDat2003/qaqc_fe',
    github_fe: 'https://github.com/NgoDat2003/qaqc_fe',
    github_be: 'https://github.com/NgoDat2003/qaqc_be',
    demo: 'https://qaqc-fe.vercel.app/',
    video: '/assets/qaqc/qaqc-full-lifecycle-e2e.webm',
    image: '/assets/qaqc/qaqc-playwright-report.png',
    images: ['/assets/qaqc/qaqc-playwright-report.png'],
    full_description: `
## Tổng quan
QualityOps là nền tảng quản trị chất lượng vận hành (QA/QC) được thiết kế đặc thù cho chuỗi cửa hàng, chuyển đổi hoàn toàn quy trình chấm điểm giấy tờ và checklist thủ công sang trải nghiệm kỹ thuật số thời gian thực.

## Vai trò & Trách nhiệm
- Phân tích chi tiết quy trình nghiệp vụ: tiêu chuẩn vệ sinh, an toàn thực phẩm, checklist tiêu chuẩn và vòng đời Action Plan.
- Trực tiếp xây dựng các phân hệ dashboard, bảng số liệu giám sát, form thanh tra di động và các API routes.
- Thiết lập bộ kiểm thử tự động Playwright E2E chạy xuyên suốt toàn bộ lifecycle giữa các tài khoản người dùng khác nhau.

## Tài liệu & Trải nghiệm
- Ứng dụng web live demo: [qaqc-fe.vercel.app](https://qaqc-fe.vercel.app/)
- Cổng tài liệu hướng dẫn tiêu chuẩn QA/QC: [qaqc-userguide-maycha.vercel.app](https://qaqc-userguide-maycha.vercel.app)
`,
  },
  {
    id: 'thuccoffee-inhouse',
    title: 'Thức Coffee 24/7 Brand Web & Admin CMS',
    category: 'Full-stack Modernization / In-housing CMS',
    timeline: '04/2026 - Present',
    desc: 'Dự án nội bộ hóa toàn diện hệ thống website thương hiệu và cổng CMS quản trị cho chuỗi cà phê Thức Coffee 24/7; thực hiện di chuyển dữ liệu (Data Migration) với độ toàn vẹn cao.',
    tech_detail: 'React 19, Express 5, Drizzle ORM, PostgreSQL 16, MinIO Object Storage, Tailwind CSS v4, Tiptap Editor, Docker Compose.',
    deploy_note: 'Mã nguồn Fullstack đầy đủ cùng bộ test di chuyển dữ liệu được công khai trên GitHub.',
    achievements: [
      'Tiếp nhận và tái cấu trúc toàn diện hệ thống từ nền tảng bên thứ ba về hạ tầng máy chủ in-house nhằm tối ưu chi phí vận hành.',
      'Thiết kế kiến trúc Backend tinh gọn với Express 5 kết hợp Drizzle ORM trên nền tảng PostgreSQL 16 và MinIO S3 storage.',
      'Thực hiện di chuyển toàn diện 267 bài viết, danh mục và hàng nghìn tệp media từ hệ thống cũ sang cơ sở dữ liệu mới với cam kết byte-identical HTML sanitization.',
      'Xây dựng module bản đồ định vị chuỗi cửa hàng mở cửa 24/7 và cổng soạn thảo nội dung CMS chuẩn WYSIWYG với Tiptap.',
    ],
    tech: ['React 19', 'Express 5', 'Drizzle ORM', 'PostgreSQL', 'MinIO', 'Docker', 'Data Migration'],
    github: 'https://github.com/NgoDat2003/thuccoffee',
    demo: '#',
    image: '/assets/diagrams/thuccoffee-architecture.svg',
    images: ['/assets/diagrams/thuccoffee-architecture.svg'],
    full_description: `
## Bối cảnh dự án
Nhằm chủ động kiểm soát tài sản kỹ thuật số và cắt giảm chi phí duy trì dịch vụ định kỳ từ đơn vị ngoài, dự án đặt mục tiêu xây dựng lại cổng thông tin thương hiệu và CMS cho Thức Coffee 24/7 trên hạ tầng riêng của doanh nghiệp.

## Thách thức & Giải pháp Data Migration
- **Bảo toàn dữ liệu di sản:** Hệ thống cũ lưu trữ 267 bài viết với cấu trúc HTML không đồng nhất. Dự án đã xây dựng pipeline làm sạch nội dung, tải toàn bộ hình ảnh về MinIO S3 lưu trữ nội bộ và chuẩn hóa HTML byte-for-byte mà không làm gãy vỡ cấu trúc hiển thị hoặc mất liên kết SEO.
- **Bộ kiểm thử tự động toàn diện:** Viết 11 kịch bản smoke test và kiểm thử hồi quy trực tiếp trên môi trường staging để xác thực tính toàn vẹn của dữ liệu sau migration.

## Trình diễn kỹ thuật
- Toàn bộ mã nguồn Fullstack (frontend React 19 và backend Express 5 + Drizzle ORM) cùng tài liệu kiểm thử được tổ chức công khai tại repo GitHub: [github.com/NgoDat2003/thuccoffee](https://github.com/NgoDat2003/thuccoffee).
`,
  },
  {
    id: 'sap-pos-monitor',
    title: 'Retail POS to SAP B1 Automation & Monitor',
    category: 'System Integration / Data Automation',
    timeline: '04/2026 - Present',
    desc: 'Giải pháp tự động hóa giám sát và đối soát luồng dữ liệu bán hàng từ chuỗi POS qua cơ sở dữ liệu trung gian vào ERP SAP Business One; xây dựng workflow cảnh báo tức thì bằng n8n.',
    tech_detail: 'n8n Automation Engine, Microsoft SQL Server, PostgreSQL, SAP Business One SDK/Service Layer, Webhook Notifications.',
    deploy_note: 'Hệ thống hạ tầng dữ liệu nội bộ. Trình bày dưới dạng sơ đồ luồng dữ liệu (Data Pipeline Architecture) và giải pháp kỹ thuật.',
    achievements: [
      'Giám sát luồng đồng bộ hóa đơn bán hàng và doanh thu từ hơn 300 cửa hàng qua cơ sở dữ liệu trung gian sang SAP Business One.',
      'Xây dựng các workflow tự động bằng n8n chạy định kỳ để kiểm tra thiếu/đủ dữ liệu hóa đơn, phát hiện giao dịch lệch trạng thái AR và GI.',
      'Tự động gửi cảnh báo chi tiết theo thời gian thực về kênh thông báo nội bộ cho khối Kế toán và IT xử lý ngay trong ca vận hành.',
      'Giảm thiểu thời gian rà soát thủ công của kế toán từ nhiều giờ mỗi ngày xuống trạng thái giám sát chủ động hoàn toàn.',
    ],
    tech: ['n8n', 'SQL Server', 'SAP Business One', 'Data Reconciliation', 'Automation'],
    github: '#',
    demo: '#',
    image: '/assets/diagrams/sap-reconcile-architecture.svg',
    images: ['/assets/diagrams/sap-reconcile-architecture.svg'],
    full_description: `
## Bối cảnh bài toán
Trong môi trường chuỗi F&B tốc độ cao với hàng chục nghìn giao dịch mỗi ngày trên 300+ cửa hàng, việc đồng bộ dữ liệu từ phần mềm bán hàng iPOS vào hệ thống ERP SAP Business One thường xảy ra nguy cơ gián đoạn do lỗi mạng, nghẽn hàng đợi hoặc sai lệch danh mục hàng hóa.

## Kiến trúc tự động hóa
- **Database Trung Gian (Staging DB):** Nơi tiếp nhận hóa đơn thô từ các điểm bán, đóng vai trò đệm giảm tải trực tiếp cho core SAP B1.
- **n8n Workflow Engine:** Đóng vai trò nhạc trưởng tự động chạy các truy vấn SQL đối soát số lượng chứng từ, so sánh tổng tiền ca bán hàng giữa POS và SAP.
- **Cơ chế Cảnh báo Tức thì:** Khi phát hiện bất kỳ hóa đơn nào bị kẹt ở trạng thái lỗi hoặc chưa được ghi nhận vào sổ cái SAP, hệ thống lập tức đóng gói thông tin (mã cửa hàng, số hóa đơn, nguyên nhân lỗi) và phát thông báo qua Webhook.
`,
  },
  {
    id: 'inno-pos',
    title: 'Inno POS — Retail Checkout on ERPNext',
    category: 'Frontend + Python API / Retail POS trên ERPNext',
    timeline: '06/2025 - 03/2026',
    role: 'Frontend Developer, kiêm API Python cho POS',
    platform: 'Web — React SPA chạy trong ERPNext',
    client: 'Chuỗi bán lẻ nhiều chi nhánh (khách hàng doanh nghiệp)',
    team: 'Team sản phẩm InnoERP tại TADALABS',
    desc: 'Màn hình bán hàng cho thu ngân trên nền ERPNext: khuyến mãi 3 tầng, chia thanh toán và VietQR, trả hàng hoàn tiền đúng phương thức, phiếu sửa chữa, kèm API Python đối soát tiền thu theo quầy và phương thức thanh toán.',
    tech_detail: 'React 19, TypeScript, Vite, Zustand, TanStack Query, TanStack Router, TanStack Table, React Hook Form, Zod, Radix UI, Tailwind CSS 4, socket.io-client; Python, Frappe Framework, ERPNext, MariaDB.',
    deploy_note: 'Sản phẩm thương mại của TADALABS, mã nguồn nội bộ. Portfolio mô tả nghiệp vụ, phần đóng góp và sơ đồ kiến trúc.',
    achievements: [
      'Làm luồng thanh toán chia một hóa đơn ra nhiều phương thức và thanh toán VietQR với mã QR lấy từ API.',
      'Làm giỏ hàng có khuyến mãi 3 tầng (theo sản phẩm, theo hóa đơn, coupon) cùng quà tặng và hàng tặng kèm.',
      'Làm trả hàng với tiền hoàn được phân bổ ngược về đúng các phương thức khách đã trả.',
      'Viết API Python tìm hóa đơn POS và tổng hợp tiền thu theo phương thức, tài khoản ngân hàng, quầy và loại đơn.',
    ],
    tech: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Python', 'ERPNext'],
    github: '#',
    demo: '#',
    image: '/assets/diagrams/inno-pos-architecture.svg',
    images: ['/assets/diagrams/inno-pos-architecture.svg'],
    challenges: [
      {
        title: 'Đối soát tiền thu theo nhiều chiều',
        problem: 'Quản lý cửa hàng cần biết đã thu bao nhiêu theo từng phương thức thanh toán, tài khoản ngân hàng, quầy và loại đơn, kể cả những đơn khách mới trả một phần.',
        solution: 'Viết lại API tìm hóa đơn POS và tách riêng API tổng hợp tiền thu, thêm dần từng bộ lọc rồi tối ưu câu truy vấn, để màn hình POS hiện danh sách hóa đơn kèm tổng tiền trên cùng một trang.',
      },
      {
        title: 'Khuyến mãi chồng nhiều lớp',
        problem: 'Khuyến mãi theo sản phẩm, khuyến mãi theo hóa đơn và coupon có thể cùng áp dụng cho một giỏ hàng, kèm cả quà tặng.',
        solution: 'Xử lý khuyến mãi theo từng dòng hàng và khuyến mãi cấp hóa đơn ở hai lớp riêng, cùng với phát hành coupon và hàng tặng kèm, để tổng tiền trong giỏ khớp với hóa đơn được tạo.',
      },
      {
        title: 'Thanh toán nhiều phương thức và hoàn tiền',
        problem: 'Một hóa đơn có thể được trả bằng nhiều phương thức, trong đó có QR ngân hàng. Khi khách trả hàng, tiền hoàn phải quay về đúng các phương thức đó.',
        solution: 'Làm luồng chia thanh toán và VietQR, cùng logic phân bổ tiền hoàn ngược về các phương thức đã thanh toán của hóa đơn gốc.',
      },
    ],
    full_description: `
## Tổng quan
InnoERP là nền tảng ERP của TADALABS, xây trên Frappe/ERPNext cho doanh nghiệp bán lẻ Việt Nam. Inno POS là màn hình bán hàng cho thu ngân và quản lý cửa hàng, chạy trực tiếp trên dữ liệu ERPNext.
POS mặc định của ERPNext không đáp ứng nghiệp vụ bán lẻ Việt Nam: thiếu VietQR, thiếu khuyến mãi nhiều tầng, thiếu đổi trả có hoàn tiền và không xem được tồn kho ở chi nhánh khác. Inno POS là một SPA React riêng, thay cho POS mặc định để giải các bài toán đó.

## Vai trò & đóng góp
- **Thanh toán:** chia một hóa đơn ra nhiều phương thức; thanh toán VietQR với mã QR lấy từ API.
- **Khuyến mãi 3 tầng:** theo sản phẩm, theo hóa đơn và coupon, kèm quà tặng và hàng tặng kèm.
- **Trả hàng & hoàn tiền:** tiền hoàn được phân bổ ngược về đúng phương thức khách đã trả.
- **Nghiệp vụ cửa hàng:** phiếu sửa chữa, giao nhanh, nhiều đơn vị tính, xem tồn kho ở chi nhánh khác.
- **Chọn khách hàng bằng khuôn mặt:** tích hợp màn hình chọn khách từ kết quả nhận diện khuôn mặt của API có sẵn; phần nhận diện không do tôi làm.
- **API Python cho POS:** viết search_pos_invoices và get_pos_invoice_total_payment để tìm hóa đơn và tổng hợp tiền thu; thêm API tổng hợp tồn kho và doanh số theo chi nhánh.
- **Mẫu in & bản địa hóa:** mẫu in hóa đơn POS và phiếu sửa chữa; bản dịch tiếng Việt cho các màn hình mới.

## Kiến trúc
- SPA React 19 + TypeScript build bằng Vite, được phục vụ như asset của một custom app Frappe.
- Gọi API whitelisted của ERPNext; state giỏ hàng bằng Zustand, server state bằng TanStack Query, realtime qua socket.io.
- Backend là custom app Python ghi đè DocType POS Invoice của ERPNext.
`,
  },
  {
    id: 'omnichat',
    title: 'OmniChat — Omnichannel Inbox in ERP',
    category: 'Frontend + Python API / Hộp thư đa kênh trong ERP',
    timeline: '07/2025 - 12/2025',
    role: 'Frontend Developer (giao diện cho nhân viên) + API lịch sử đơn hàng',
    platform: 'Web — trang hộp thư trong ERPNext Desk',
    client: 'Doanh nghiệp bán lẻ dùng InnoERP',
    team: 'Module của team InnoERP; 1 trong 3 người làm giao diện chính',
    desc: 'Hộp thư gom tin nhắn khách hàng từ Zalo, Facebook, Instagram, Shopee, Lazada và TikTok Shop về một nơi trong ERP. Đóng góp chính: giao diện hộp thư cho nhân viên, bộ lọc khách không tương tác và lịch sử đơn hàng ngay trong khung chat, kèm API riêng.',
    tech_detail: 'React 19, Vite, Zustand, TanStack Query, emoji-mart, React Bootstrap; Python, Frappe Framework, ERPNext, Frappe Realtime (Socket.IO).',
    deploy_note: 'Module thương mại của InnoERP (TADALABS), mã nguồn nội bộ. Portfolio mô tả phần đóng góp và sơ đồ kiến trúc.',
    achievements: [
      'Làm bộ lọc khách không tương tác trong 14, 30 hoặc 60 ngày và chuyển danh sách hội thoại sang gọi API truy vấn hợp nhất phía server.',
      'Làm khung chat có đính kèm file, emoji, hiển thị tin nhắn ảnh và file, và tự khóa ô nhập khi hội thoại hết hạn.',
      'Làm panel lịch sử đơn hàng trong khung chat cùng API Python get_order_history.',
      'Làm công tắc bật/tắt trả lời tự động theo từng kênh.',
    ],
    tech: ['React', 'Zustand', 'TanStack Query', 'Socket.IO', 'Python', 'ERPNext'],
    github: '#',
    demo: '#',
    image: '/assets/diagrams/omnichat-architecture.svg',
    images: ['/assets/diagrams/omnichat-architecture.svg'],
    challenges: [
      {
        title: 'Xem đơn hàng ngay khi đang chat',
        problem: 'Muốn tư vấn hay xử lý khiếu nại, nhân viên phải rời hộp thư và mở ERP ở chỗ khác để tra đơn của khách.',
        solution: 'Thêm panel lịch sử đơn và modal chi tiết đơn ngay cạnh hội thoại, lấy dữ liệu qua API get_order_history viết riêng cho màn hình này và cập nhật realtime.',
      },
      {
        title: 'Hộp thư lẫn hội thoại cũ',
        problem: 'Hội thoại đã nguội nằm lẫn với khách đang hoạt động, nên nhân viên khó biết cần ưu tiên trả lời ai.',
        solution: 'Làm bộ lọc khách không tương tác trong 14, 30 hoặc 60 ngày, và chuyển danh sách hội thoại sang gọi API truy vấn hợp nhất phía server.',
      },
      {
        title: 'Hội thoại hết hạn trả lời',
        problem: 'Khi hội thoại đã hết hạn, tin nhắn nhân viên gửi đi sẽ không đến được khách.',
        solution: 'Theo dõi trạng thái hết hạn của từng hội thoại và tự khóa ô nhập khi hội thoại hết hạn.',
      },
    ],
    full_description: `
## Tổng quan
OmniChat là module hộp thư đa kênh của InnoERP. Tin nhắn khách hàng từ website, Zalo OA, Facebook, Instagram, Shopee, Lazada và TikTok Shop được gom về một hộp thư trong ERP.
Trước đó nhân viên chăm sóc khách hàng phải trực nhiều ứng dụng chat riêng lẻ, và muốn xem đơn hàng của khách thì phải mở ERP ở chỗ khác.

## Vai trò & đóng góp
Team lead phụ trách kiến trúc module, kết nối các nền tảng và phần trả lời tự động. Phần tôi làm là giao diện cho nhân viên và API lịch sử đơn hàng:
- **Danh sách hội thoại:** bộ lọc khách không tương tác trong 14, 30 hoặc 60 ngày; chuyển danh sách hội thoại sang gọi API truy vấn hợp nhất phía server.
- **Khung chat:** ô nhập có đính kèm file và emoji; hiển thị tin nhắn ảnh và file; tự khóa ô nhập khi hội thoại đã hết hạn.
- **Lịch sử đơn hàng trong khung chat:** panel đơn hàng và modal chi tiết đơn cập nhật realtime, cùng API Python get_order_history.
- **Bật/tắt trả lời tự động theo kênh:** công tắc trên giao diện và cờ cấu hình tương ứng phía backend.
- **Phiên bản đầu tiên:** khung chat, polling tin nhắn, cấu hình kênh và bản địa hóa tiếng Việt.

## Kiến trúc
- Giao diện React bundle bằng Vite, nhúng vào một page của Frappe; state bằng Zustand, dữ liệu bằng TanStack Query, realtime qua socket của Frappe.
- Backend gồm các DocType hội thoại, tin nhắn, liên hệ và nền tảng trong ERPNext, cùng webhook và background job gửi tin cho từng nền tảng.
`,
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    category: 'Graduation Project / University Capstone',
    timeline: '09/2025 - 12/2025',
    desc: 'Đồ án tốt nghiệp Kỹ sư Kỹ thuật Phần mềm (IUH - GPA 3.53/4.0): Hệ thống quản lý đào tạo, sinh viên, giảng viên và quản trị viên, có phân quyền, bảng điểm và chat real-time.',
    tech_detail: 'Frontend: React 18, Vite, Redux Toolkit, Ant Design, SignalR client, Axios. Backend: ASP.NET Core & SQL Server.',
    deploy_note: 'Dự án trường đại học có sẵn live demo công khai và toàn bộ mã nguồn frontend trên GitHub.',
    achievements: [
      'Tốt nghiệp loại Giỏi chuyên ngành Kỹ thuật Phần mềm tại Đại học Công nghiệp TP.HCM (IUH) với GPA 3.53 / 4.00.',
      'Phụ trách chính phân hệ Frontend React 18, xây dựng bảng điều khiển quản trị, phân quyền người dùng và xuất báo cáo.',
      'Tích hợp SignalR client cho chức năng nhắn tin trao đổi trực tiếp giữa sinh viên và giảng viên.',
    ],
    tech: ['React 18', 'Redux Toolkit', 'Ant Design', 'SignalR', 'Axios'],
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
Student Management System là đồ án tốt nghiệp đại học đạt đánh giá cao, mô phỏng toàn diện quy trình quản trị đào tạo theo học chế tín chỉ.

## Vai trò & Đóng góp
- Thiết kế và hoàn thiện toàn bộ giao diện người dùng theo chuẩn Ant Design.
- Quản lý state tập trung với Redux Toolkit, xử lý các luồng nhập điểm, quản lý hồ sơ và cấp quyền theo vai trò.
`,
  },
];
