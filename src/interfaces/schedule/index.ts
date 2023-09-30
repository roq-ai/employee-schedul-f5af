import { UserInterface } from 'interfaces/user';
import { ServiceInterface } from 'interfaces/service';
import { LocationInterface } from 'interfaces/location';
import { GetQueryInterface } from 'interfaces';

export interface ScheduleInterface {
  id?: string;
  start_time: any;
  end_time: any;
  user_id: string;
  service_id: string;
  location_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  service?: ServiceInterface;
  location?: LocationInterface;
  _count?: {};
}

export interface ScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  service_id?: string;
  location_id?: string;
}
