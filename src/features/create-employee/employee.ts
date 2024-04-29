import { format } from 'date-fns';
import { z } from 'zod';
import {
  DEPARTMENTS,
  STATES_NAMES,
} from '~/features/create-employee/constants';

export const employeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z
    .date()
    .transform((date) => format(date, 'yyyy-MM-dd'))
    .pipe(z.string()),
  startDate: z
    .date()
    .transform((date) => format(date, 'yyyy-MM-dd'))
    .pipe(z.string()),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.enum(STATES_NAMES),
  zipCode: z
    .string()
    .pipe(z.coerce.number().int().positive())
    .pipe(z.coerce.string()),
  department: z.enum(DEPARTMENTS),
});

export type Employee = z.infer<typeof employeeSchema>;
