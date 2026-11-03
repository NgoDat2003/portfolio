import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

const experiences = [
  {
    role: 'Fullstack Web Developer',
    company: 'TẬP ĐOÀN THỊNH THẾ VINH HOA',
    period: '04/2026 - Hiện tại',
    summary:
      'Tập đoàn F&B vận hành chuỗi 200+ cửa hàng (MayCha, Tam Hảo, Thức Coffee, Trà Hú, Gà Giòn Sốt). Tôi làm portal nội bộ kèm Master Board theo dõi chứng từ SAP, hệ thống quản lý hợp đồng thuê mặt bằng, website Thức Coffee, và đóng góp app audit QA/QC của team.',
    focus: 'API NestJS và màn hình Next.js cho nghiệp vụ nội bộ, đăng nhập và phân quyền, đọc dữ liệu SAP, xuất file bút toán cho SAP B1.',
    bullets: [
      'Portal nội bộ & Master Board SAP (Next.js 15, NestJS 10, Entra ID): Đăng nhập một lần bằng tài khoản Microsoft, phiên cookie xoay vòng refresh token, phân quyền 9 quyền. Master Board theo dõi chứng từ bán và trả hàng trong SAP với studio 25 câu truy vấn có version; theo ước tính giúp tiết kiệm 1-2 giờ/ngày rà soát chứng từ.',
      'Quản lý hợp đồng thuê mặt bằng (Next.js 15, NestJS 10, Prisma, PostgreSQL): Người viết code chính của hệ thống đang quản lý 100+ hợp đồng; phụ lục chạy thử trước khi ghi, khóa các kỳ đã chi, file bút toán Journal Entry theo template DTW để kế toán nhập vào SAP B1, không xuất trùng kỳ.',
      'App audit QA/QC (Next.js 16, NestJS 11, MongoDB): Đóng góp vào app của team gồm bộ lọc nhiều brand trên dashboard, bổ sung điểm hàng loạt, phí QC theo cửa hàng và xuất bảng payroll 3P.',
      'Website & CMS Thức Coffee (React 19, Express 5, Drizzle ORM, PostgreSQL): Làm lại website thương hiệu và trang quản trị thay cho website ASP.NET cũ, chuyển 267 bài viết, 42 sản phẩm và 498 ảnh sang hệ thống mới.',
      'Vận hành đồng bộ dữ liệu: Phụ trách kiểm tra trạng thái đồng bộ chứng từ sang SAP hằng ngày theo playbook.',
    ],
  },
  {
    role: 'Fullstack Web Developer',
    company: 'TADALABS - InnoERP',
    period: '03/2025 - 03/2026',
    summary:
      'Công ty phần mềm ERP/POS cho chuỗi bán lẻ. Tôi tham gia phát triển InnoERP trên Frappe/ERPNext: thành viên chính của module Inno POS và đóng góp giao diện hộp thư OmniChat, kèm API Python cho các màn hình này.',
    focus: 'Thanh toán và khuyến mãi POS, API Python trên ERPNext, giao diện hộp thư OmniChat.',
    bullets: [
      'Inno POS (React, TypeScript, Zustand, TanStack Query): Thành viên chính module POS; làm giỏ hàng, phiếu sửa chữa, giao nhanh, nhiều đơn vị tính và màn hình xem tồn kho chi nhánh khác.',
      'Khuyến mãi & thanh toán: Khuyến mãi 3 tầng (theo sản phẩm, theo hóa đơn, coupon), chia nhiều phương thức thanh toán cho một hóa đơn kèm VietQR, và hoàn tiền về đúng các phương thức khách đã trả.',
      'OmniChat (React, Zustand, Socket.IO): Đóng góp giao diện hộp thư đa kênh, là 1 trong 3 người làm giao diện chính; làm bộ lọc khách không tương tác, khung chat tự khóa khi hội thoại hết hạn và panel lịch sử đơn hàng kèm API riêng.',
      'API Python trên ERPNext: Viết API tìm hóa đơn POS và tổng hợp tiền thu theo phương thức, tài khoản ngân hàng, quầy và loại đơn; API tổng hợp tồn kho và doanh số theo chi nhánh.',
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
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.focus}</p>
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
