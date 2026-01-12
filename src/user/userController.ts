import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from "./userModel.js";
import bcrypt from "bcryptjs";


const createUser = async (req:Request, res:Response, next: NextFunction) =>{
    const {name, email, password} = req.body;
    
    //Validation
    if(!name || !email || !password){
        const error = createHttpError(400, "All fields require");
        return next(error);
    }

    //Database call
    const user = await userModel.findOne({email:email})
    if (user){
        const error = createHttpError(400, "User already exists with this email.");
        return next(error);
    }



    //Pasword Hashing 

    const hashPassword = await bcrypt.hash(password, 10);


    res.json ({message: "User successfully register.."})
}


export {createUser};