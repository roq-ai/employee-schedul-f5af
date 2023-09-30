import * as yup from 'yup';

export const scheduleValidationSchema = yup.object().shape({
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  service_id: yup.string().nullable().required(),
  location_id: yup.string().nullable().required(),
});
