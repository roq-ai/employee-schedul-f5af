import { ScheduleInterface } from 'interfaces/schedule';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  schedule?: ScheduleInterface[];
  company?: CompanyInterface;
  _count?: {
    schedule?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  company_id?: string;
}
