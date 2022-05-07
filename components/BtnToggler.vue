<template>
  <div class="toggler" role="group">
    <!-- shadow-md shadow-slate-500 hover:shadow-lg focus:shadow-lg -->
    <button type="button" :class="{ selected: !modelValue }" @click="$emit('update:modelValue', false)">
      <IconLock :locked="true" />
    </button>
    <button type="button" :class="{ selected: modelValue }" @click="$emit('update:modelValue', true)">
      <IconLock :locked="false" />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});
defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.toggler {
  @apply inline-flex items-center justify-center;
  &:first-child { @apply rounded-l-xl; }
  &:last-child { @apply rounded-r-xl; }

  button {
    @apply inline-block px-6 py-2.5 bg-slate-500 text-slate-300 font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out;

    &:first-child { @apply rounded-l-xl; }
    &:last-child { @apply rounded-r-xl; }
  }

  .selected {
    @apply bg-slate-600 text-sky-500;
  }
}
</style>