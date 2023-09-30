const mapping: Record<string, string> = {
  companies: 'company',
  employees: 'employee',
  locations: 'location',
  schedules: 'schedule',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
