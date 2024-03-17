import mongoose, {schema} from mongoose;
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt" //search more about these two bcrypt and jwt 
//direct encryptin of password is not possible, to hame help leni padti he mongoose ke kuch hooks ki, jo funtions hote he , unme se ek hook he "pre", ye ek middleware he, jo run kerta data database me save hone se just pahle, video.model me plugin bhi hook tha
//jyadatar ye hooks hame model files me hi milenge

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // searching field me search ko optimize ker deta he, iske bina bhi ho jaata he per ye optimizr ker deta he, its expensive, bahut soch samjhke indexing ki jaati he
        },

        email: { //removed index, its expensive to use , bahut soch samjhke use kerna padta he
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        fullName: { //removed unique and lowercase, because sujal naam to bahut ke ho sakte he
            type: String,
            required: true,
            trim: true,
            index: true
        },

        avtar: {
            type: String, //cloudinary ka url(similar like aws, but free)
            required: true
        },

        coverImage: {
            type: String, //cloudinary ka url(similar like aws, but free)
        },

        watchHistory: [
           {
            type: Schema.Types.ObjectId,
            ref: "Video"
           }
        ],

        password: {
            type: String, //password will be stored in encrypted form, but how we will compare this encrypted string with actual password is challange, we'll see later
            required: [true, 'Password is required'] //with custom message, we can write this custom messages in any required field
        },

        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

//watch video of (9)user and video model with hooks and JWT at 28:00 to the 35:00

// Adding a pre-save hook to the userSchema. This hook is executed before saving a document.
userSchema.pre("save", async function (next) { //watch video from 28:00, why didn't use arrow function here(it does not have this context)
    // Checking if the password field has been modified. If not, proceed to the next middleware or operation.
    if(!this.isModified("password")) return next();

    // Hashing the password using bcrypt with a cost factor of 10. The result is an asynchronous operation.
    this.password = bcrypt.hash(this.password, 10)

    // Proceeding to the next middleware or operation.
    next()
})

userSchema.methods.isPasswordCorrect = async function //watch from 35:00, making custom method(mongoose provide to make custom method) for password compare
(password){
    return await bcrypt.compare(password, this.password) //this.password is encrypt one and the other is non-encrypt one
} // it will return true or false that password is matched or not


//these both are JWT tokens
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id, //ye this wali cheeze database se aa rhi he
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET, //from .env
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id, // isme kevel id, kyunki ye token baar baar refresh hota rahta he, access token ek baar hi generate hota he, and access token ko database me store bhi nhi karate
        },
        process.env.REFRESH_TOKEN_SECRET, //from .env
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose("User", userSchema)