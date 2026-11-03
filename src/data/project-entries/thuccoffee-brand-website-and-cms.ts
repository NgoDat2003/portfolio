import type { Project } from '../project-types';

/** Thức Coffee brand website and admin CMS, rebuilt from the old ASP.NET site. */
export const thucCoffeeProject: Project = {
  id: 'thuccoffee-inhouse',
  title: 'Thức Coffee — Brand Website & Admin CMS',
  category: 'Fullstack / Website thương hiệu & CMS',
  timeline: '06/2026 - 07/2026',
  status: 'production',
  role: 'Fullstack Developer, developer chính',
  platform: 'Web public + trang admin — React 19 + Express 5 + PostgreSQL 16, tự host bằng Docker',
  client: 'Thương hiệu Thức Coffee của tập đoàn',
  team: 'Tôi viết code frontend, backend và script chuyển dữ liệu',
  desc: 'Làm lại website thương hiệu Thức Coffee và trang quản trị nội dung, thay cho website cũ viết bằng ASP.NET: chuyển 267 bài viết, 42 sản phẩm, 7 cửa hàng và 498 ảnh sang hệ thống mới.',
  tech: ['React 19', 'Express 5', 'Drizzle ORM', 'PostgreSQL 16', 'MinIO', 'Tiptap 3', 'Docker'],
  github: '#',
  demo: '#',
  image: '/assets/diagrams/thuccoffee-architecture.svg',
  cover: '/assets/screenshots/thuccoffee-website.jpg',
  challenges: [
    {
      title: 'Giữ nguyên đường dẫn cũ',
      problem: 'Website cũ đã có nhiều bài viết và trang sản phẩm được chia sẻ; đổi hệ thống mà đổi đường dẫn thì link cũ sẽ hỏng.',
      solution: 'Crawl 400 đường dẫn của website cũ, rồi seed dữ liệu vào database mới theo slug gốc, nên bài viết và sản phẩm giữ nguyên đường dẫn.',
    },
    {
      title: 'HTML bài viết cũ không đồng nhất',
      problem: '267 bài viết cũ có HTML không đồng nhất; làm sạch quá tay sẽ làm vỡ bố cục bài, còn để nguyên thì có thể giữ lại thẻ không an toàn.',
      solution: 'Viết bộ làm sạch HTML giữ nguyên chuỗi gốc khi khác biệt chỉ là cách viết thẻ vô hại, và chỉ trả HTML đã làm sạch khi có thẻ hoặc thuộc tính bị loại; có test chạy trên cả 267 bài.',
    },
    {
      title: 'Chuyển đủ ảnh của website cũ',
      problem: 'Ảnh của website cũ nằm rải rác ở nhiều thư mục, bài viết tham chiếu ảnh theo nhiều kiểu đường dẫn khác nhau.',
      solution: 'Đưa 498 ảnh lên MinIO và chuẩn hóa tham chiếu về một kiểu khóa; Nginx phục vụ ảnh qua /media. Kiểm tra cho thấy cả 561 tham chiếu ảnh đều trỏ đúng file.',
    },
  ],
  full_description: `
## Tổng quan
Website cũ của Thức Coffee viết bằng ASP.NET MVC chạy trên IIS. Tôi làm lại website public và trang quản trị nội dung, chạy trên hạ tầng tự host của tập đoàn.

## Vai trò & đóng góp
- **Website public:** menu, trang sản phẩm, blog phân trang, danh sách cửa hàng có bản đồ Google Maps, trang tĩnh, tìm kiếm, form liên hệ và đăng ký nhận tin có backend.
- **Trang quản trị (CMS):** đăng nhập JWT, quản lý sản phẩm, danh mục, bài viết, cửa hàng, banner và cài đặt website; soạn bài bằng Tiptap; upload ảnh lên MinIO; bài viết có trạng thái nháp và đã đăng.
- **Chuyển dữ liệu:** crawl website cũ, seed 267 bài viết, 42 sản phẩm, 7 cửa hàng, 10 danh mục, 6 trang tĩnh và 3 banner theo slug gốc; đưa 498 ảnh lên MinIO.
- **Triển khai & kiểm tra:** Docker Compose, Nginx proxy cho API và ảnh, CI build và lint; 11 script smoke test, test Vitest cho bộ làm sạch HTML và một bộ test Playwright cho trang admin.

## Kiến trúc
- Frontend React 19 + Vite + Tailwind 4 + React Router 7, TanStack Query cho trang admin.
- Backend Express 5 + Drizzle ORM trên PostgreSQL 16, ảnh lưu trên MinIO, Nginx phục vụ frontend, API và ảnh.
- Trong sơ đồ, ô nền vàng viền cam là phần tôi làm; ô nét đứt là hệ thống cũ hoặc dịch vụ bên ngoài.
- Dự án của công ty nên portfolio chỉ mô tả, không kèm mã nguồn.

![Trang chủ website Thức Coffee mới](/assets/screenshots/thuccoffee-website.jpg)
`,
};
