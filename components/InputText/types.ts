export type InputTextProps = {
  type?: HTMLInputElement['type'],
  placeholder?: HTMLInputElement['placeholder']
}

export type InputTextEmits = {
  (e: 'onInput', payload: InputEvent): void
}