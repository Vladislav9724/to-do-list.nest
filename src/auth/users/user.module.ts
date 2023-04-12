import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  username: {type: String, request: true},
  password: {type: String, request: true}
})

export interface User {
  username: string
  password: string
}