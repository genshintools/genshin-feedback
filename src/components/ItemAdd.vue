<script setup>
import { ref } from 'vue'

const item = ref('')

function submit() {
  console.log(item.value)
}
</script>

<template>
  <div class="item item--new">
    <form @submit.prevent="submit">
      <input
        v-model.trim="item"
        @enter="submit"
        type="text"
        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="What feedback do you want to share?"
      />
    </form>
  </div>
</template>

<style scoped></style>
