import { ScheduleInterface } from 'interfaces/schedule';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  name: string;
  description?: string;
  duration: number;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  schedule?: ScheduleInterface[];
  company?: CompanyInterface;
  _count?: {
    schedule?: number;
  };
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  company_id?: string;
}
