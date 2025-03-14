import { defineMongooseModel } from "#nuxt/mongoose";

export const FinancialRecurringChange = defineMongooseModel({
  name: 'FinancialRecurringChange',
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
    startDate: 'string',
    endDate: 'string',
    interval: 'number',
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