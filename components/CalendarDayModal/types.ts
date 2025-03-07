export type CalendarDayModalProps = {
  date?: Date
}

export type CalendarDayModalEmits = {
  (e: 'onClose'): void,
  (e: 'onSubmit'): void
}

export enum CalendarDayEventType {
  BalanceChange = 'balance-change',
  HealthChange = 'health-change'
}