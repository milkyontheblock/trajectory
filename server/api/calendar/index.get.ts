import { generateYear } from "~/utils/generateYear"

export default defineEventHandler(async (event) => {
  return {
    years: [
      generateYear(2025),
      generateYear(2026),
      generateYear(2027),
    ]
  }
})