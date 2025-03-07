<script setup lang="ts">
import type { CalendarDayEmits, CalendarDayProps } from './types';

const props = defineProps<CalendarDayProps>()
const emit = defineEmits<CalendarDayEmits>()
</script>

<template>
  <div 
    class="aspect-square flex items-center justify-center max-w-10 rounded-lg cursor-pointer border border-neutral-300"
    @click="emit('onClick', { date: props.date })"
  > 
    <div>
      <span class="text-sm">{{ props.text }}</span>
    </div>
  </div>
</template>