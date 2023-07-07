<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, alphaNum } from '@vuelidate/validators'

export default {
  setup() {
    const state = reactive({
      item: ''
    })

    function submit() {
      console.log(state.item)
    }

    const rules = {
      item: { required }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$, submit }
  }
}
</script>

<template>
  <div class="item item--new">
    <form @submit.prevent="submit">
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
