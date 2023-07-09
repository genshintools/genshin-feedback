<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useFeedbackStore } from '@/stores/feedback'

export default {
  setup() {
    const store = useFeedbackStore()

    const state = reactive({
      item: '',
      success: false
    })

    const rules = {
      item: { required }
    }

    const v$ = useVuelidate(rules, state)

    function submit() {
      store.addItem(state.item)
      state.item = ''
      state.success = true
      v$.value.$reset()
      setTimeout(() => (state.success = false), 2000)
    }

    return { state, v$, submit }
  }
}
</script>

<template>
  <div class="item item--new">
    <form @submit.prevent="submit">
      <div v-if="state.success">Added your piece of feedback!</div>
      <input
        v-model.trim="v$.item.$model"
        @enter="submit"
        type="text"
        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        placeholder="What feedback do you want to share?"
      />
      <div v-for="error of v$.item.$errors" :key="error.$uid" role="alert">
        <span class="font-bold text-sm text-red-600">{{ error.$message }}</span>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
