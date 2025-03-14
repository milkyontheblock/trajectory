import { defineMongooseModel } from "#nuxt/mongoose";

export const FinancialSingleChange = defineMongooseModel({
  name: 'FinancialSingleChange',
  schema: {
    title: {
      type: 'string',
      required: true
    },
    description: 'string',
    user: { 
      ref: 'User', 
      required: true 
    },
    date: 'string',
    amount: {
      currency: {
        enum: ['EUR', 'USD'],
        default: 'EUR',
      },
      value: 'number'
    }
  },
  options: {
    timestamps: true
  }
})