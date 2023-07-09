import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFeedbackStore = defineStore('feedback', () => {
  const items = ref([])
  const itemsCount = computed(() => items.value.length)
  function addItem(item) {
    items.value.push(item)
  }

  return { items, itemsCount, addItem }
})
