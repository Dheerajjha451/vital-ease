import connectToDB from "@/database";
import User from "@/models/user";
import { compare } from "bcryptjs";
import Joi from "joi";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";



const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(21).required(),
    role:Joi.string().required()
});

export const dynamic = 'force-dynamic';

export async function POST(req) {

    await connectToDB();    
    const { email, password,role} = await req.json();

    const { error } = schema.validate({ email, password,role})

    if (error) {
        return NextResponse.json({
            success: false,
            message: email.details[0].message,
        });
    }try{
        const checkUser=await User.findOne({email});
        if(!checkUser){
            return NextResponse.json({
                success: false,
                message: "Account Not Found with this email",

            });
        }
        const checkPasswrd=await compare(password,checkUser.password);
        if(!checkPasswrd){
            return NextResponse.json({
                success: false,
                message: "Incorrect Password",
            });
        }
        const token = jwt.sign({
            id: checkUser._id,
            email: checkUser?.email,
            role: checkUser?.role
          },'default_secret_key', { expiresIn: '1d' });          
        const finalData={
            token,
            user:{
                email:checkUser.email,
                name:checkUser.name,
                _id:checkUser._id,
                role:checkUser.role,
            }
        }
        return NextResponse.json({
            success:true,
            message:'Login Successfull!',
            finalData
        })
    }
    catch(error){
        console.log("Error while logging in . Please try again: ",error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong ! Plese try again later.",
        });
    }

}