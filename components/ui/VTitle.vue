<script setup lang="ts">
interface Props {
  tag: string,
  title: string,
  iconName: string,
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h2',
});
</script>

<template>
  <component :is="tag" :class="[$style.VTitle, tag]">
    <span ref="titleRef" v-html="title"></span>
    <nuxt-icon :name="iconName" filled :class="$style.icon" />
  </component>
</template>

<style lang="scss" module>
.VTitle {
  position: relative;
  color: $white;

  .icon {
    display: inline-block;
    width: 64px;
    height: 64px;
    margin-left: 20px;

    @include respond-to(tablet) {
      width: 40px;
      height: 40px;
    }

    @include respond-to(mobile) {
      width: 32px;
      height: 32px;
    }
  }
}
</style>