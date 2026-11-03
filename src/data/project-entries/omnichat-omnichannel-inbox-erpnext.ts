import type { Project } from '../project-types';

/** OmniChat inbox inside InnoERP (TADALABS): contributor-scoped page. */
export const omnichatProject: Project = {
  id: 'omnichat',
  title: 'OmniChat — Omnichannel Inbox in ERP',
  category: 'Frontend + Python API / Hộp thư đa kênh trong ERP',
  timeline: '07/2025 - 12/2025',
  role: 'Frontend Developer (giao diện cho nhân viên) + API lịch sử đơn hàng',
  platform: 'Web — trang hộp thư trong ERPNext Desk',
  client: 'Doanh nghiệp bán lẻ dùng InnoERP',
  team: 'Module của team InnoERP; 1 trong 3 người làm giao diện chính',
  desc: 'Hộp thư gom tin nhắn khách hàng từ Zalo, Facebook, Instagram, Shopee, Lazada và TikTok Shop về một nơi trong ERP. Đóng góp chính: giao diện hộp thư cho nhân viên, bộ lọc khách không tương tác và lịch sử đơn hàng ngay trong khung chat, kèm API riêng.',
  tech: ['React', 'Zustand', 'TanStack Query', 'Socket.IO', 'Python', 'ERPNext'],
  github: '#',
  demo: '#',
  image: '/assets/diagrams/omnichat-architecture.svg',
  cover: '/assets/diagrams/omnichat-cover.svg',
  challenges: [
    {
      title: 'Xem đơn hàng ngay khi đang chat',
      problem: 'Muốn tư vấn hay xử lý khiếu nại, nhân viên phải rời hộp thư và mở ERP ở chỗ khác để tra đơn của khách.',
      solution: 'Thêm panel lịch sử đơn và modal chi tiết đơn ngay cạnh hội thoại, lấy dữ liệu qua một API lịch sử đơn hàng viết riêng cho màn hình này và cập nhật realtime.',
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
- **Lịch sử đơn hàng trong khung chat:** panel đơn hàng và modal chi tiết đơn cập nhật realtime, cùng API Python lấy lịch sử đơn hàng.
- **Bật/tắt trả lời tự động theo kênh:** công tắc trên giao diện và cờ cấu hình tương ứng phía backend.
- **Phiên bản đầu tiên:** khung chat, polling tin nhắn, cấu hình kênh và bản địa hóa tiếng Việt.

## Kiến trúc
- Giao diện React bundle bằng Vite, nhúng vào một page của Frappe; state bằng Zustand, dữ liệu bằng TanStack Query, realtime qua socket của Frappe.
- Backend gồm các DocType hội thoại, tin nhắn, liên hệ và nền tảng trong ERPNext, cùng webhook và background job gửi tin cho từng nền tảng.
`,
};
