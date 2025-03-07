export type CalendarDayProps = {
  text: string,
  date: string
}

export type CalendarDayEmits = {
  (e: 'onClick', payload: { date: string }): void
}