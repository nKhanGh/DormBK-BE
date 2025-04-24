import { z } from "zod"

export const PeopleSchema = z.object({
  SSN: z.string().length(8),
  First_Name: z.string().max(20),
  Last_Name: z.string().max(20),
  Birthday: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  Sex: z.string().length(1).optional(),
  Health_State: z.string().max(100).optional(),
  Ethnic_Group: z.string().max(30).optional(),
})

export const AddressSchema = z.object({
  commune: z.string().max(30),
  district: z.string().max(30),
  province: z.string().max(30),
})

export const EmailSchema = z.object({
  email: z.string().email().max(50),
})

export const PhoneNumberSchema = z.object({
  phoneNumber: z.string().length(10),
})

export const StudentSchema = z.object({
  studentId: z.string().length(8),
  hasHealthInsurance: z.boolean(),
  studyStatus: z.string().max(20).optional(),
  className: z.string().max(20).optional(),
  faculty: z.string().max(50).optional(),
  building_id: z.string().length(5).optional(),
  room_id: z.string().length(5).optional(),
})

export const CreateStudentSchema = z.object({
  people: PeopleSchema,
  address: AddressSchema,
  email: EmailSchema,
  phoneNumber: PhoneNumberSchema,
  student: StudentSchema,
})
