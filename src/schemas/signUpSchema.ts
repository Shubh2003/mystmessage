import {z} from 'zod';


export const usernameValidation = z
        .string()
        .min(2,"Username mustbe atleast 2 characters")
        .max(20,"must be no more than 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special cahracter")


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(6,{message:"password mustbe atleast 6 characters"})
})