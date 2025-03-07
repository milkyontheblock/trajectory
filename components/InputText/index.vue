<script setup lang="ts">
import type { InputTextEmits, InputTextProps } from './types';

const props = defineProps<InputTextProps>()
const emit = defineEmits<InputTextEmits>()

</script>

<template>
  <div class="relative border border-neutral-300 inline-block w-auto rounded-lg">
    <input
      :type="props.type" 
      :placeholder="props.placeholder"
      class="p-2"
      @input="emit('onInput', $event as InputEvent)"
    />
  </div>
</template>