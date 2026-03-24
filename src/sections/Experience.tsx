import SectionTitle from '../components/shared/SectionTitle'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle title="Sự nghiệp" subtitle="Kinh nghiệm chuyên nghiệp" />

        <div className="relative border-l border-white/5 pl-8 md:pl-20 ml-2 md:ml-4 space-y-24 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -left-[45px] top-4 md:-left-[88px] md:top-6 w-3.5 h-3.5 rounded-full bg-background border-2 border-primary ring-4 ring-primary/20"></div>

            <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-10 gap-4">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-display font-bold text-zinc-100 tracking-tight">Kỹ sư Frontend</h3>
                <h4 className="text-xl text-primary font-medium tracking-tight">TADALABS — Hệ sinh thái POS</h4>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-surface/50 px-6 py-2.5 rounded-full border border-border">
                Tháng 07/2025 — Tháng 02/2026
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-6">
                <p className="text-zinc-300 text-lg leading-relaxed font-normal">
                  Dẫn dắt phát triển các module trọng yếu trong hệ sinh thái POS, tập trung vào việc xử lý các luồng dữ liệu phức tạp và tối ưu hóa hiệu năng phía Client cho các môi trường bán lẻ thực tế.
                </p>
                <ul className="space-y-5">
                  {[
                    "Phát triển Engine Giỏ hàng đa phiên (Multi-tab cart) xử lý 4 loại hóa đơn song song, tăng 30% hiệu suất vận hành tại quầy.",
                    "Tích hợp thanh toán VietQR và đồng bộ Real-time (Socket.io) giúp giảm 50% thời gian xác thực giao dịch cho thu ngân.",
                    "Xây dựng thư viện Internal Design System (Radix UI + Tailwind), đạt 70% khả năng tái sử dụng component toàn hệ thống.",
                    "Tối ưu hóa Server State bằng TanStack Query, loại bỏ 50% code Redux dư thừa và cải thiện tốc độ tải trang."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-base text-zinc-400 leading-relaxed font-normal">
                      <span className="text-primary mr-4 text-xl leading-none mt-0.5 opacity-70">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/80 border border-primary/20 p-8 rounded-2xl flex flex-col justify-center h-full relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 text-primary/10 text-8xl font-serif">"</div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary/70 mb-4 block">Giá trị cốt lõi</span>
                <p className="text-zinc-200 text-base leading-relaxed font-medium relative z-10">
                  Xây dựng Core POS đa phiên, ứng dụng TanStack Query thay thế Redux, tối ưu hóa 50% thời gian xử lý giao dịch. Thiết lập Standard cho Frontend Team.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
