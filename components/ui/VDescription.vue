<script setup lang="ts">
interface Props {
  text: string,
  isAnimated: boolean,
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="[$style.VDescription, {[$style._animated]: isAnimated}]">
    <p :class="[$style.text, 'paragraph']" v-html="text"></p>
  </div>
</template>

<style lang="scss" module>
.VDescription {
  position: relative;
  padding-top: 10px;
  color: $white;
  overflow: hidden;

  &._animated {

    &:before,
    .text {
      transform: translateX(0);
    }
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 76px;
    left: 0;
    width: 200px;
    height: 1px;
    background-color: $white;
    transform: translateX(-100%);
    transition: transform .5s ease-in;

    @include respond-to(mobile) {
      content: none;
    }
  }


  .text {
    display: block;
    transform: translateX(-100%);
    transition: transform .5s ease-in .3s;
  }

}
</style>