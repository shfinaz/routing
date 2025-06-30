import { model, models, Schema, Types } from 'mongoose';
import { unique } from "next/dist/build/utils";

export interface IAccount {
    userId: Types.ObjectId;
    name: string;
    image?: string;
    password?: string;
    provider: string;
    providerAccountId: string; 
}

const AccountSchema = new Schema <IAccount>({
  userId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  image: { type: String },
  password: { type: String },
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true },
}, {
  timestamps: true,})

const Account = models?.Account || model<IAccount>("User", AccountSchema);

export default Account;

