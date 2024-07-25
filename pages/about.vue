<script setup lang=ts>

</script>

<template>
  <About />
  <Questions :class="$style.Questions" />
  <Subscription :class="$style.Subscription" />
</template>

<style lang="scss" module>
.Questions,
.Subscription {
  margin-top: 144px;

  @include respond-to(mobile) {
    margin-top: 72px;
  }
}
</style>