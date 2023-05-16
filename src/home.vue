<template>
  <div class="flex">
    <SButton class="mr-4" @click="onClick(123)">按钮</SButton>
    <SButton type="primary" class="mr-4">按钮</SButton>
    <SButton type="link">按钮</SButton>
  </div>
</template>

<script setup lang="ts">
const onClick = (e: any) => {
  console.log(e)
}
</script>

<style scoped lang="less"></style>
