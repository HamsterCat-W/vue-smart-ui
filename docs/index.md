# SmartyUI

<div class="flex">
    <SButton class="mr-4" @click="onClick(123)">按钮</SButton>
    <SButton type="primary" class="mr-4">按钮</SButton>
    <SButton type="link">按钮</SButton>
</div>

<script setup>
const onClick=(value)=>{
    console.log(value)
}
</script>
