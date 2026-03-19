import SectionTitle from '../components/shared/SectionTitle'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-24 bg-background">
      <SectionTitle title="Sự nghiệp" subtitle="Kinh nghiệm chuyên nghiệp" />

      <div className="relative border-l border-white/10 pl-8 md:pl-20 ml-4 space-y-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Dot */}
          <div className="absolute -left-[41px] md:-left-[85px] top-3 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_25px_rgba(129,140,248,0.6)] animate-pulse"></div>

          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-10">
            <div className="space-y-1">
              <h3 className="text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight">Kỹ sư Frontend</h3>
              <h4 className="text-2xl text-primary font-bold tracking-tight opacity-90">TADALABS — Hệ sinh thái POS</h4>
            </div>
            <div className="mt-6 md:mt-0 text-[11px] font-black uppercase tracking-[0.4em] text-white bg-primary/20 px-10 py-4 rounded-full border border-primary/30 shadow-xl">
              Tháng 07/2025 — Tháng 02/2026
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <p className="text-slate-300 text-xl leading-relaxed font-medium">
                Dẫn dắt phát triển các module trọng yếu trong hệ sinh thái POS, tập trung vào việc xử lý các luồng dữ liệu phức tạp và tối ưu hóa hiệu năng phía Client cho các môi trường bán lẻ thực tế.
              </p>
              <ul className="space-y-6">
                {[
                  "Phát triển giải pháp Giỏ hàng đa tab (Multi-tab) cho phép xử lý song song nhiều đơn hàng đồng thời, giúp tăng 30% hiệu suất làm việc của nhân viên.",
                  "Tích hợp cổng thanh toán VietQR với cơ chế Webhook/Polling để tự động hóa quy trình xác nhận giao dịch thời gian thực.",
                  "Xây dựng thư viện Component dùng chung (Internal Design System), giúp đồng bộ hóa UI và rút ngắn 40% thời gian phát triển tính năng mới.",
                  "Sử dụng React Query để quản lý Server State, thay thế Redux truyền thống giúp giảm 50% lượng code thừa và tối ưu hóa cơ chế Caching."
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-base text-slate-400 leading-relaxed font-medium">
                    <span className="text-primary mr-5 text-2xl leading-none">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-10 rounded-[3rem] flex flex-col justify-center border-white/5 shadow-inner">
              <span className="text-[12px] uppercase font-black tracking-[0.3em] text-primary/60 mb-6 block text-center">Giá trị cốt lõi</span>
              <p className="text-slate-300 text-base md:text-lg italic text-center leading-relaxed font-medium">
                "Đóng góp trực tiếp vào quá trình hiện đại hóa hệ thống, chuyển đổi từ kiến trúc legacy sang kiến trúc hiện đại, giúp hệ thống vận hành ổn định và dễ mở rộng hơn."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
