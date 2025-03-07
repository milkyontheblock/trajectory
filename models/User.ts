import { defineMongooseModel } from "#nuxt/mongoose";

export const User = defineMongooseModel({
  name: 'User',
  schema: {
    name: {
      type: 'string',
      required: true,
      unique: true
    }
  },
  options: {
    timestamps: true
  }
})