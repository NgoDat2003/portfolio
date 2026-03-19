import SectionTitle from '../components/shared/SectionTitle'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Hệ thống Quản lý Đào tạo (LMS)',
      category: 'Enterprise / Education',
      timeline: 'Tháng 09/2025 — Tháng 12/2025',
      desc: 'Giải pháp ERP giúp số hóa quy trình quản trị đào tạo học thuật, hỗ trợ xử lý luồng dữ liệu lớn và báo cáo chuyên sâu.',
      tech_detail: 'Frontend phát triển bằng React 18 & Ant Design. Backend sử dụng .NET (C#) tích hợp SignalR cho truyền tải dữ liệu thời gian thực và SQL Server.',
      deploy_note: 'Phần Backend không do mình trực tiếp phát triển hoàn toàn nên hiện tại khó để triển khai bản Live Demo đầy đủ.',
      achievements: [
        'Hệ thống Dashboard phân tích dữ liệu tập trung với biểu đồ Recharts.',
        'Xử lý nghiệp vụ phức tạp: Quản lý học phần, điểm số và xếp loại tự động.',
        'Kết xuất báo cáo chuyên nghiệp sang định dạng Excel/PDF.',
        'Tối ưu hóa State Management bằng Redux Toolkit cho hệ thống quy mô lớn.'
      ],
      tech: ['React', 'SignalR', '.NET Core', 'SQL Server'],
      github: 'https://github.com/NgoDat2003/student_management',
      demo: '#',
      image: 'https://via.placeholder.com/800x500/1e293b/6366f1?text=LMS+Architecture'
    },
    {
      title: 'Hệ sinh thái E-Commerce Full-stack',
      category: 'Full-stack / Enterprise',
      timeline: 'Tháng 05/2024 — Tháng 08/2024',
      desc: 'Nền tảng thương mại điện tử đồng bộ từ Giao diện khách hàng đến Hệ thống quản trị kho bãi và giao dịch Backend.',
      tech_detail: 'Tự phát triển 100% cả Frontend (React/Vite) và Backend (Node.js/Express). Tương tác cơ sở dữ liệu qua Sequelize (PostgreSQL) và đóng gói Docker.',
      deploy_note: 'Dự án đã được triển khai thành công bản Live Demo (Full-stack) trên Vercel, hỗ trợ đầy đủ các tính năng nghiệp vụ.',
      achievements: [
        'Tự thiết kế và triển khai xuyên suốt luồng dữ liệu từ Backend đến UI.',
        'Hệ thống xác thực đa lớp (JWT, Bcrypt) và phân quyền người dùng chặt chẽ.',
        'Tối ưu hóa Database Indexing giúp tăng tốc độ truy vấn sản phẩm đáng kể.',
        'Quy trình vận hành Docker chuyên nghiệp, hỗ trợ triển khai nhanh chóng.'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/NgoDat2003/backend_web',
      demo: 'https://sh-shop-dats-projects-eadf36c1.vercel.app/',
      image: 'https://via.placeholder.com/800x500/1e293b/6366f1?text=Full-stack+E-Commerce'
    }
  ]

  return (
    <section id="projects" className="py-24 px-8 md:px-24 bg-background">
      <SectionTitle title="Dự án" subtitle="Sản phẩm tiêu biểu" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group block glass-card rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all p-10 md:p-12"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[2rem] mb-12 relative shadow-2xl border border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute top-8 right-8 bg-slate-900/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-primary/30 text-[11px] font-black uppercase text-primary tracking-[0.2em] shadow-2xl">
                {project.timeline}
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex justify-between items-center">
                <span className="text-[12px] uppercase tracking-[0.3em] font-black text-primary">{project.category}</span>
                <div className="flex flex-wrap gap-4 justify-end">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] text-slate-400 font-bold uppercase tracking-widest opacity-60">{t}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-6xl font-display font-extrabold text-white leading-none tracking-tighter group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                  {project.desc}
                </p>
              </div>

              <div className="p-8 bg-slate-950/40 rounded-3xl border border-white/[0.05] space-y-6 shadow-inner">
                <div className="space-y-2">
                  <span className="text-[12px] uppercase font-black text-primary/80 tracking-[0.2em] block">Công nghệ & Giải pháp:</span>
                  <p className="text-base text-slate-300 leading-relaxed font-normal">
                    {project.tech_detail}
                  </p>
                </div>
                <div className="flex items-start gap-4 pt-4 border-t border-white/5 mt-4">
                  <span className={`text-[12px] uppercase font-black tracking-[0.2em] block mt-1 whitespace-nowrap ${project.demo === '#' ? 'text-orange-400' : 'text-emerald-400'}`}>
                    Trạng thái:
                  </span>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium italic">
                    {project.deploy_note}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <span className="text-[12px] uppercase font-black text-white/30 tracking-[0.3em] block">Thành tựu chuyên nghiệp:</span>
                <ul className="space-y-4">
                  {project.achievements.map((ach, i) => (
                    <li key={i} className="text-[16px] text-slate-300 flex items-start leading-relaxed font-medium">
                      <span className="text-primary mr-5 text-2xl leading-none pt-0.5">▹</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-12 flex gap-12 items-center border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors flex items-center gap-2 group/link"
                >
                  Source Code <span className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                </a>
                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors flex items-center gap-2 group/link"
                  >
                    Live Demo <span className="text-primary group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">↗</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
