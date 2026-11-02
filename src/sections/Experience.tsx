import { motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'

const experiences = [
  {
    role: 'Fullstack Web Developer',
    company: 'TẬP ĐOÀN THỊNH THẾ VINH HOA',
    period: '04/2026 - Hiện tại',
    summary:
      'Tập đoàn F&B vận hành chuỗi 200+ cửa hàng (MayCha, Tam Hảo, Thức Coffee, Trà Hú, Gà Giòn Sốt). Phát triển các hệ thống quản trị nội bộ: quản lý hợp đồng thuê mặt bằng, kiểm toán chất lượng QA/QC, website thương hiệu và giám sát dữ liệu SAP B1.',
    focus: 'Phân tích nghiệp vụ cùng người dùng, thiết kế hệ thống, REST API với NestJS, dashboard và tự động hóa đối soát dữ liệu bằng n8n.',
    bullets: [
      'Quản lý hợp đồng thuê mặt bằng (Next.js, NestJS, Prisma, PostgreSQL): Thiết kế và phát triển toàn bộ hệ thống quản lý vòng đời 100+ hợp đồng, từ ký mới, phụ lục đến thanh lý, giúp kế toán xuất bút toán sang SAP B1 đúng kỳ và không trùng lặp.',
      'Kiểm toán chất lượng QA/QC: Phát triển Dashboard theo dõi điểm chất lượng, chức năng tính phí QC và xuất bảng lương cho hệ thống kiểm toán chất lượng của 200+ cửa hàng.',
      'Giám sát dữ liệu SAP B1 (n8n): Tự động đối soát doanh thu hằng ngày từ iPOS qua 6 DB trung gian và phát hiện chứng từ bị kẹt trong quy trình mua bán, giúp kế toán tiết kiệm 1-2 giờ/ngày.',
      'Website & CMS Thức Coffee (React 19, Express, Drizzle ORM, PostgreSQL): Xây dựng website thương hiệu và trang quản trị nội dung, thay thế hệ thống cũ.',
      'Phân tích nghiệp vụ: Thu thập yêu cầu từ người dùng ở các phòng ban (Pháp chế, Kế toán, QA/QC, Vận hành), từ đó lựa chọn công nghệ và thiết kế hệ thống phù hợp.',
    ],
  },
  {
    role: 'Fullstack Web Developer',
    company: 'TADALABS - InnoERP',
    period: '03/2025 - 03/2026',
    summary:
      'Công ty phần mềm ERP/POS cho chuỗi bán lẻ. Tham gia phát triển InnoERP, nền tảng ERP trên Frappe/ERPNext: frontend React cho màn hình bán hàng Inno POS và hệ thống chat đa kênh OmniChat, kèm API Python cho các màn hình này.',
    focus: 'Luồng thanh toán và khuyến mãi POS, form nghiệp vụ, API Python trên ERPNext và giao diện chat đa kênh.',
    bullets: [
      'Inno POS (React, TypeScript, Zustand, TanStack Query): Trực tiếp xây dựng phân hệ bán hàng tại quầy, giúp thu ngân xử lý nhiều hóa đơn cùng lúc và tra cứu tồn kho của các chi nhánh khác.',
      'Khuyến mãi & thanh toán: Phụ trách khuyến mãi 3 tầng (theo món, theo hóa đơn, coupon), thanh toán nhiều đợt qua VietQR và hoàn tiền khi đổi trả hàng.',
      'OmniChat (React, Zustand, Socket.IO): Phát triển hệ thống chat đa kênh giúp nhân viên chăm sóc khách hàng trả lời tin nhắn từ Shopee, Lazada, TikTok Shop, Facebook, Zalo OA trên cùng một màn hình.',
      'API Python trên ERPNext: Viết API tìm hóa đơn POS và tổng hợp tiền thu theo phương thức, tài khoản ngân hàng, quầy và loại đơn; API tổng hợp tồn kho và doanh số theo chi nhánh.',
      'Form nghiệp vụ (React Hook Form, Zod): Xây dựng form có validation dùng lại giữa nhiều màn hình POS.',
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
