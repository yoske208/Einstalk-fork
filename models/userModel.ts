import mongoose, { Schema, Document, Types } from "mongoose";
import bcrypt from 'bcrypt'

export interface IUser extends Document {
  username: string;
  password: string;
  image:string;
  posts: Types.ObjectId[];
  comparePassword(userPassword:string) : Promise<boolean>
}



const UserSchema = new Schema<IUser>({
  username:{
    type: String,
    required: [true,'username is required'],
    min:[8,'to shotrt'],
    unique: true
  },
  password:{
    type: String,
    required: [true,'password is required'],
    min: [8, 'password to short']
  },
  email: {
    type: String,
    required: [true,'email is required'],
    min:[8,'to shotrt'],
  },
  posts:{
    type: [Schema.Types.ObjectId],
    ref: 'Post'
  }
});
UserSchema.pre<IUser>('save',async function(next) {
  if(!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password,10)
  next()
})
UserSchema.index({email : 1})

UserSchema.methods.comparePassword = async function(userPassword:string) {
  return await bcrypt.compare(userPassword,this.password)
}

export default mongoose.model<IUser>("User", UserSchema);
