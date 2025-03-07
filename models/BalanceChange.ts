import { defineMongooseModel } from "#nuxt/mongoose";

export const BalanceChange = defineMongooseModel({
  name: 'BalanceChange',
  schema: {
    amount: Number,
    date: Date
  },
  options: {
    timestamps: true
  }
})