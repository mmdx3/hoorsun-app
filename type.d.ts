import { IUser } from "./app/models/User";

export interface IUserModel extends IUser{
   _id: string;
   fullName: string;
   phoneNumber: string;
   address: string;
   createdAt: Date;
   type: number;
}