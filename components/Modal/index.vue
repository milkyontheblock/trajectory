<script setup lang="ts">
import type { ModalProps, ModalEmits } from './types';

const props = defineProps<ModalProps>()
const emit = defineEmits<ModalEmits>()

</script>

<template>
  <Teleport to="body">
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div class="bg-white min-w-[300px] max-h-[400px] rounded-lg overflow-hidden border border-neutral-300">
        <header class="px-4 py-3 border-b border-neutral-300">
          <h1 class="font-semibold">{{props.title}}</h1>
        </header>

        <div class="overflow-y-auto">
          <slot/>
        </div>
      </div>
    </div>
  </Teleport>
</template>