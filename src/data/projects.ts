// Project list shown on the home page and the /project/:id detail pages.
// Each entry lives in its own file under ./project-entries; order here is the display order
// (current employer first, then the previous employer, then personal and university work).
import type { Project } from './project-types';
import { ttvhPortalProject } from './project-entries/ttvh-portal-and-sap-master-board';
import { storeLeaseManagementProject } from './project-entries/store-lease-contract-management';
import { qaqcCompanyAppProject } from './project-entries/qaqc-company-audit-app-contribution';
import { thucCoffeeProject } from './project-entries/thuccoffee-brand-website-and-cms';
import { innoPosProject } from './project-entries/inno-pos-retail-checkout-erpnext';
import { omnichatProject } from './project-entries/omnichat-omnichannel-inbox-erpnext';
import { qualityOpsProject } from './project-entries/qualityops-personal-audit-platform';
import { studentManagementProject } from './project-entries/student-management-graduation-project';

export type { Project, ProjectChallenge } from './project-types';

export const projects: Project[] = [
  ttvhPortalProject,
  storeLeaseManagementProject,
  qaqcCompanyAppProject,
  thucCoffeeProject,
  innoPosProject,
  omnichatProject,
  qualityOpsProject,
  studentManagementProject,
];
