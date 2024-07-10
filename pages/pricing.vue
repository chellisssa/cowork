<script setup lang="ts">
</script>

<template>
  <Pricing />
  <AddOnService :class="$style.AddOnService" />
</template>

<style lang="scss" module>
.AddOnService {
  margin-top: 96px;

  @include respond-to(mobile) {
    margin-top: 72px;
  }
}
</style>