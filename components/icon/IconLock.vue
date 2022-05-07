<template>
  <svg version="1.1" viewBox="0 0 14 20" class="fill-current w-8 h-8">
    <path v-if="locked" pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M4 5.667H2a5 5 0 1110 0v3h.667a1 1 0 011 1v8.666a1 1 0 01-1 1H1.333a1 1 0 01-1-1V9.667a1 1 0 011-1H10v-3a3 3 0 10-6 0zM6.75 12a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75h-.5z" _fill="#fff"></path>
    <path v-else pid="0" fill-rule="evenodd" clip-rule="evenodd" d="M2 5.667v3h-.667a1 1 0 00-1 1v8.666a1 1 0 001 1h11.334a1 1 0 001-1V9.667a1 1 0 00-1-1H12v-3a5 5 0 10-10 0zm8 0v3H4v-3a3 3 0 116 0zM6.75 12a.75.75 0 00-.75.75v2.5c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75v-2.5a.75.75 0 00-.75-.75h-.5z" _fill="#BCBEC0"></path>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  locked: {
    type: Boolean,
    default: false,
  }
});
</script>