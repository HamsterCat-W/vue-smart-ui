<template>
  <div>
    <button
      class="py-2 px-6 font-semibold rounded-lg shadow-md border-none cursor-pointer"
      :class="getClassName"
      @click="onClick"
    >
      <slot> SButton </slot>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

type btnType = 'primary' | 'link' | 'default'

const props = withDefaults(
  defineProps<{
    type?: btnType
  }>(),
  {
    type: 'default',
  }
)

const emits = defineEmits(['click'])

const getClassName = computed(() => {
  const { type } = props
  return {
    'btn-default': type === 'default',
    'btn-primary': type === 'primary',
    'btn-link': type === 'link',
  }
})

const onClick = (e: any) => {
  emits('click', e)
}
</script>

<style scoped lang="less">
.btn-primary {
  background-color: @btn-primary-color;
  color: @btn-primary-text-color;

  &:hover {
    background-color: @btn-primary-text-color-hover;
  }
}

.btn-link {
  border: 0;
  box-shadow: none;
  border-radius: 0;
  background-color: #fff;
  color: @btn-primary-color;
}
</style>
