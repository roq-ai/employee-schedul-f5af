import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  duration: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});
