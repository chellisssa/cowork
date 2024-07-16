<script setup lang=ts>
interface Props {
  title: string,
}

defineProps<Props>();
</script>

<template>
<li :class="$style.VTag">
  {{ title }}
</li>
</template>

<style lang="scss" module>
.VTag {
  padding: 12px 24px;
  border: 1px solid $black;
  border-radius: 100px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
}
</style>