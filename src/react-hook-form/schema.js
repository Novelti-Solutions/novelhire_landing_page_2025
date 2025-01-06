import { z } from 'zod';

export const contactSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' }),
  last_name: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email format.' }),
  company_name: z.string().min(2, { message: 'Company name is required.' }),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.',
    })
    .max(160, {
      message: 'Message must not be longer than 30 characters.',
    }),
  isagree: z.boolean().default(false).optional(),
});

// demo schema
export const demoSchema = z.object({
  name: z
    .string({ message: 'Name is required!' })
    .nonempty({ message: 'Name is required!' }),
  email: z
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  mobile_no: z
    .string()
    .min(1, { message: 'Mobile number is required!' })
    .regex(/^\d{10}$/, { message: 'Mobile number must be  10 digits' }),
  mobile_code: z.record(z.any()).refine(
    (data) => {
      if (Object.keys(data).length === 0) {
        return false;
      }
      return true;
    },
    {
      message: 'Mobile code is required!',
    }
  ),

  org_name: z.string().min(1, { message: 'Company name is required!' }),
  role: z.record(z.any()).refine(
    (data) => {
      if (Object.keys(data).length === 0) {
        return false;
      }
      return true;
    },
    {
      message: 'Role is required!',
    }
  ),
  message: z.string().min(1, { message: 'Message is required!' }),
  isagree: z.boolean().default(false).optional(),
});
