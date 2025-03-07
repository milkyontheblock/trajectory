import { generateYear } from "~/utils/generateYear"

export default defineEventHandler(async (event) => {
  return {
    years: Array(3).fill(0).map((_, idx) => generateYear(idx + 2025))
  }
})