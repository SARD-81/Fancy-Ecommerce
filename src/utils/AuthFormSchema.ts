import { z } from "zod";
import { Pattern } from "../Constant";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(5, { message: "Email is Required" })
    .refine((email) => Pattern.email.test(email), {
      message: "Email not Valid",
    }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 character" }),
});

export type LoginForm = z.infer<typeof LoginFormSchema>

export const RegisterFormSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "First Name is Required" }),
  lastname: z
    .string()
    .min(3, { message: "Last Name is Required" }),
  email: z
    .string()
    .min(5, { message: "Email is Required" })
    .refine((email) => Pattern.email.test(email), {
      message: "Email not Valid",
    }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 character" }),
});

export type RegisterForm = z.infer<typeof RegisterFormSchema>
