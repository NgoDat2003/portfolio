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

/** Bullets written as "Topic (stack): detail" get the topic in bold for faster scanning. */
function ExperienceBullet({ text }: { text: string }) {
  const separatorIndex = text.indexOf(': ')
  if (separatorIndex === -1) return <>{text}</>
  return (
    <>
      <strong className="font-semibold text-ink">{text.slice(0, separatorIndex)}:</strong>
      {text.slice(separatorIndex + 1)}
    </>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Sự nghiệp" subtitle="Kinh nghiệm làm việc" />

        <ol className="relative ml-2 space-y-12 border-l-2 border-dashed border-ink/40 pl-6 md:ml-4 md:pl-12">
          {experiences.map((item, index) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span
                className={`absolute -left-[35px] top-7 h-5 w-5 rounded-full border-2 border-ink md:-left-[59px] ${index === 0 ? 'bg-pastel-butter' : 'bg-pastel-sky'}`}
                aria-hidden="true"
              />

              <article className="sketch-card p-6 md:p-8">
                <header className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{item.role}</h3>
                    <p className="mt-1 text-base font-semibold text-accent-dark">{item.company}</p>
                  </div>
                  <span className="chip w-fit shrink-0 border-ink font-semibold text-ink">{item.period}</span>
                </header>

                <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_17rem]">
                  <div>
                    <p className="text-base leading-relaxed text-ink md:text-lg">{item.summary}</p>
                    <ul className="mt-5 space-y-4">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                          <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden="true">→</span>
                          <span><ExperienceBullet text={bullet} /></span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className="h-fit rotate-1 rounded-lg border-2 border-ink bg-pastel-butter p-5 shadow-sketch-sm">
                    <p className="font-hand text-xl text-ink">Trọng tâm</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Dashboard, form nghiệp vụ, API integration, kiểm thử flow và xử lý dữ liệu vận hành.
                    </p>
                  </aside>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
