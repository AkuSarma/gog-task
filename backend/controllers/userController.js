// controller to control the routes
// loginController, signupController;
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signupController = async(req, res, next) => {
    // signup controller
    try{
        const {name, email, mobile, password} = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({message: "Please fill all the fields"});
        }

        let user = await User.findone({email});

        if (user){
            return res.status(400).json({message: "Email already exists"});
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        let newUser = await User.create({
            name,
            email,
            mobile,
            password: hashedPassword
        })

        return res.status(200).json({
            success: true,
            message: "user Created Successfully",
            user: newUser,
        });
    } catch (err){
        return res.status(500).json({
          success: false,
          message: err.message,
        });
    }
}

export const loginController = async (req, res, next) => {
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "please enter all the fields"});
        }

        const user = await User.findOne({email});

        if (!user) return res.status(401).json({message: "user not found"});

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) return res.status(401).json({message: "incorrect password"});

        const token = jwt.sign(
            {id: user._id, email: user.email},
            "secretkeyrocks",
            {
                expiresIn: "24h",
            }
        );

        res.status(200).json({
            success: true,
            message: "You are signed in",
            token,
            user: {id: user._id, email: user.email, name: user.name},
        });
    }
    catch (err){
        return res.status(500).json({message: err.message});
    }
}