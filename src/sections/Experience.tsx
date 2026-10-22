import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

const experiences = [
  {
    role: 'Fullstack Web Developer',
    company: 'TẬP ĐOÀN THỊNH THẾ VINH HOA',
    period: '04/2026 - Hiện tại',
    summary:
      'Phát triển và triển khai hệ thống Cổng thông tin điều hành (Web Portal), Nền tảng quản lý hợp đồng thuê và số hóa quy trình vận hành chuỗi bán lẻ F&B 300+ cửa hàng (MayCha, Tam Hảo, Thức Coffee 24/7) tích hợp SAP Business One.',
    bullets: [
      'Cổng Thông Tin Điều Hành Doanh Nghiệp (Turborepo, Next.js 15, NestJS 10): Tập trung hóa quyền truy cập và điều phối yêu cầu chuỗi 300+ cửa hàng; triển khai xác thực Microsoft Entra ID (Azure AD SSO) qua MSAL và Cookie-based JWT có Token Rotation & Replay Detection.',
      'Nền Tảng Quản Lý Hợp Đồng Thuê Mặt Bằng (Next.js 15, NestJS, Prisma, PostgreSQL): Số hóa 100+ hợp đồng thuê mặt bằng; thiết kế module Phụ lục với tính năng mô phỏng chi phí trước (Dry-run) và cơ chế Period-locking bảo toàn tính bất biến của số liệu tài chính SAP B1.',
      'Nội Bộ Hóa Website Thương Hiệu & CMS Thức Coffee 24/7 (React 19, Express, Drizzle ORM, PostgreSQL): Tái cấu trúc website cùng cổng CMS về hạ tầng in-house; phát triển module định vị chuỗi cửa hàng và thực hiện di chuyển toàn diện dữ liệu (Data Migration) với độ toàn vẹn cao.',
      'Tự Động Hóa Giám Sát Dữ Liệu Bán Hàng (iPOS → DB Trung Gian → SAP B1): Giám sát luồng đồng bộ hóa đơn, doanh thu; xây dựng các workflow tự động bằng n8n để kiểm tra đối soát, phát hiện lỗi đồng bộ và gửi cảnh báo tức thì cho khối Kế toán.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'TADALABS - Inno POS Enterprise',
    period: '06/2025 - 03/2026',
    summary:
      'Phát triển các module frontend cho hệ thống POS đa kênh, tập trung vào form nghiệp vụ, data table, API integration và kiểm thử flow quan trọng.',
    bullets: [
      'Phát triển các module Sales, Inventory, Shipping và Repair Order bằng React.js/TypeScript.',
      'Xây dựng form động với React Hook Form và Zod để tái sử dụng validation giữa nhiều màn hình.',
      'Tối ưu server state với TanStack Query, giảm request lặp và cải thiện độ phản hồi UI.',
      'Viết Playwright test cho login, sales order, checkout và regression flow.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle title="Sự nghiệp" subtitle="Kinh nghiệm làm việc" />

        <div className="relative border-l border-white/5 pl-8 md:pl-20 ml-2 md:ml-4 space-y-20 mt-16">
          {experiences.map((item) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -left-[45px] top-4 md:-left-[88px] md:top-6 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary ring-4 ring-primary/20"></div>

              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8 gap-4">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-5xl font-display font-bold text-zinc-100 tracking-tight">{item.role}</h3>
                  <h4 className="text-xl text-primary font-medium tracking-tight">{item.company}</h4>
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-surface/50 px-6 py-2.5 rounded-full border border-border">
                  {item.period}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-16">
                <div className="space-y-6">
                  <p className="text-zinc-300 text-lg leading-relaxed font-normal">{item.summary}</p>
                  <ul className="space-y-5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start text-base text-zinc-400 leading-relaxed font-normal">
                        <span className="text-primary mr-4 text-xl leading-none mt-0.5 opacity-70">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-900/80 border border-primary/20 p-8 rounded-2xl flex flex-col justify-center h-full relative overflow-hidden">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-primary/70 mb-4 block">Trọng tâm</span>
                  <p className="text-zinc-200 text-base leading-relaxed font-medium relative z-10">
                    Dashboard, form nghiệp vụ, API integration, kiểm thử flow và xử lý dữ liệu vận hành.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
