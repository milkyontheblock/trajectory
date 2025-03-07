export interface Day {
  date: string,
  number: number,
}

export interface Month {
  title: string,
  days: Day[]
}

export interface Year {
  value: number,
  months: Month[]
}