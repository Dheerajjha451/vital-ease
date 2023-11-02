import connectToDB from "@/database";
import User from "@/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";


const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(21).required(),
});

export const dynamic = 'force-dynamic';

export async function POST(req) {

    await connectToDB();
    const { name, email, password} = await req.json();

    const { error } = schema.validate({ name, email, password})

    if (error) {
        console.log('error: ',error)
        return NextResponse.json({
            success: false,
            message: error.details[0].message
        })
    }
    try {
        // check if user exist or not
        const isUserAlreadyExists = await User.findOne({ email })
        if (isUserAlreadyExists) {
            return NextResponse.json({
                success: false,
                message: "User already exists, Please try with different email"
            })
        } else {
            const hashPassword = await hash(password, 12);

            const newslyCreatedUser = await User.create({
                name, email, password: hashPassword
            })

            if (newslyCreatedUser) {
                return NextResponse.json({
                    succes: true,
                    message: "Account create successfully"
                })
            }
        }
    }
    catch (error) {
        console.log('Error while new user registration! Please Try again Later')
        return NextResponse.json({
            success: false,
            message: 'Something Went Wrong! Please Try again Later'
        })
    }

}