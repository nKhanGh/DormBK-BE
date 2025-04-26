import { z } from 'zod';

export const SsnParam = z.object({
  ssn: z.string().length(8, {
    message: 'SSN must be exactly 8 characters long',
  }),
});

export const StudentBody = z.object({
  ssn: z.string().trim().length(8, {
    message: 'SSN must be exactly 8 characters long',
  }),
  new_ssn: z.string().trim().length(8, {
    message: 'New SSN must be exactly 8 characters long',
  }),
  first_name: z.string().trim().min(1, {
    message: 'First name is required',
  }),
  last_name: z.string().trim().min(1, {
    message: 'Last name is required',
  }),
  birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format',
  }),
  sex: z.enum(['M', 'F']),
  health_state: z.string(),
  ethnic_group: z.string(),
  student_id: z.string().trim().length(7, {
    message: 'Student ID must be exactly 7 characters long',
  }),
  has_health_insurance: z.boolean(),
  study_status: z.string().optional(),
  class_name: z.string(),
  faculty: z.string(),
  building_id: z.string().nullable(),
  room_id: z.string().nullable(),
  phone_numbers: z.string().optional(),
  emails: z.string().optional(),
  addresses: z.string().optional(),
});

export type SsnParamDto = z.infer<typeof SsnParam>;
export type StudentBodyDto = z.infer<typeof StudentBody>;
