interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Manager', 'Employee', 'Customer'],
  tenantName: 'Company',
  applicationName: 'Employee Scheduling',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read service information',
    'Read location information',
    'Read schedule information',
  ],
  ownerAbilities: ['Manage company', 'Manage employees', 'Manage services', 'Manage schedules'],
  getQuoteUrl: 'https://app.roq.ai/proposal/75a6d09e-f205-410f-b53b-fbc6f8b59aa8',
};
