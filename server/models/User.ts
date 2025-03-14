import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel({
  name: 'User',
  schema: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string'
  },
  options: {
    timestamps: true
  }
})