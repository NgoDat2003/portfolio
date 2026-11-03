import type { Project } from '../project-types';

/** Inno POS on ERPNext (TADALABS): checkout, promotions, payments and POS APIs. */
export const innoPosProject: Project = {
  id: 'inno-pos',
  title: 'Inno POS — Retail Checkout on ERPNext',
  category: 'Frontend + Python API / Retail POS trên ERPNext',
  timeline: '06/2025 - 03/2026',
  role: 'Frontend Developer, kiêm API Python cho POS',
  platform: 'Web — React SPA chạy trong ERPNext',
  client: 'Chuỗi bán lẻ nhiều chi nhánh (khách hàng doanh nghiệp)',
  team: 'Team sản phẩm InnoERP tại TADALABS',
  desc: 'Màn hình bán hàng cho thu ngân trên nền ERPNext: khuyến mãi 3 tầng, chia thanh toán và VietQR, trả hàng hoàn tiền đúng phương thức, phiếu sửa chữa, kèm API Python đối soát tiền thu theo quầy và phương thức thanh toán.',
  tech: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'Python', 'ERPNext'],
  github: '#',
  demo: '#',
  image: '/assets/diagrams/inno-pos-architecture.svg',
  cover: '/assets/diagrams/inno-pos-cover.svg',
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
- **API Python cho POS:** viết API tìm hóa đơn POS và API tổng hợp tiền thu; thêm API tổng hợp tồn kho và doanh số theo chi nhánh.
- **Mẫu in & bản địa hóa:** mẫu in hóa đơn POS và phiếu sửa chữa; bản dịch tiếng Việt cho các màn hình mới.

## Kiến trúc
- SPA React 19 + TypeScript build bằng Vite, được phục vụ như asset của một custom app Frappe.
- Gọi API whitelisted của ERPNext; state giỏ hàng bằng Zustand, server state bằng TanStack Query, realtime qua socket.io.
- Backend là custom app Python ghi đè DocType POS Invoice của ERPNext.
`,
};
