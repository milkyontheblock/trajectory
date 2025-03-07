<script setup lang="ts">
import { CalendarDayEventType, type CalendarDayModalEmits, type CalendarDayModalProps } from './types';

const props = defineProps<CalendarDayModalProps>()
const emit = defineEmits<CalendarDayModalEmits>()

const title = computed(() => {
  return new Intl.DateTimeFormat('nl-NL', { 
    weekday: 'short', 
    day: 'numeric', 
    month: 'short', 
    year: 'numeric' 
  }).format(props.date ?? new Date())
})

const types = {
  [CalendarDayEventType.BalanceChange]: 'Balance change'
}

</script>

<template>
  <Modal 
    :title="title" 
    @on-close="emit('onClose')"
  >
    <div>
      <ul>
        <li v-for="type in Object.keys(types)" :key="type">
          <input 
            type="radio" 
            name="type" 
            :value="type"
          />

          <label for="type">
            {{ type }}
          </label>
        </li>
      </ul>
    </div>
  </Modal>
</template>