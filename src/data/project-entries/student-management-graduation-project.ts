import type { Project } from '../project-types';

/** Student Management System: IUH graduation project (frontend). */
export const studentManagementProject: Project = {
  id: 'student-management',
  title: 'Student Management System',
  category: 'Graduation Project / University Capstone',
  timeline: '09/2025 - 12/2025',
  desc: 'Đồ án tốt nghiệp Kỹ sư Kỹ thuật Phần mềm (IUH - GPA 3.53/4.0): Hệ thống quản lý đào tạo, sinh viên, giảng viên và quản trị viên, có phân quyền, bảng điểm và chat real-time.',
  tech: ['React 18', 'Redux Toolkit', 'Ant Design', 'SignalR', 'Axios'],
  github: 'https://github.com/NgoDat2003/student_management',
  demo: 'https://student-management-eta-drab.vercel.app',
  image: '/assets/images/student-management.png',
  full_description: `
## Tổng quan
Student Management System là đồ án tốt nghiệp đại học đạt đánh giá cao, mô phỏng toàn diện quy trình quản trị đào tạo theo học chế tín chỉ.

## Vai trò & Đóng góp
- Thiết kế và hoàn thiện toàn bộ giao diện người dùng theo chuẩn Ant Design.
- Quản lý state tập trung với Redux Toolkit, xử lý các luồng nhập điểm, quản lý hồ sơ và cấp quyền theo vai trò.

![Dashboard quản trị](/assets/images/admin-dashboard.png)
![Dashboard giảng viên](/assets/images/teacher-dashboard.png)
`,
};
