<script setup lang="ts">
import heroImage from '../assets/images/hero-image.jpg';
import {ref} from "vue";
import {createIntersectionObserver} from "../utils/createIntersectionObserver";

const isMounted = ref<boolean>(false);
const sectionRef = ref<HTMLElement | null>(null);
const isAnimated = ref<boolean>(false);
let observer: IntersectionObserver | undefined;

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimated.value = true;
};

onMounted(() => {
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);
});
</script>

<template>
  <section ref="sectionRef" :class="$style.Hero">
    <div :class="[$style.box, $style._big]">
      <h1 :class="[$style.title, 'h1']">Elevate Your Workspace with Cowork
        <nuxt-icon name="circle-highlight" :class="$style.circle" filled/>
      </h1>
      <div :class="$style.bottom">
        <VButton
            title="Claim Your Spot"
            color="danger"
            size="big"
            type="a"
            href="/contact"
            :class="$style.button"
        />
        <VDescription
            text="Where innovation meets collaboration&nbsp;🚀"
            is-subheading
            :is-animated="isAnimated"
            :class="$style.text"
        />
      </div>
    </div>
    <div :class="[$style.box, $style._small]">
      <img :src="heroImage" alt="" :class="$style.image">
    </div>
  </section>
</template>

<style lang="scss" module>
.Hero {
  display: flex;
  gap: 16px;

  @include respond-to(s_tablet) {
    flex-direction: column;
  }

  .box {
    display: flex;
    flex-direction: column;
    border-radius: 32px;
    min-height: 640px;
    overflow: hidden;

    @include respond-to(tablet) {
      min-height: 540px;
    }

    @include respond-to(s_tablet) {
      min-height: auto;
    }

    &._big {
      flex-grow: 1;
      padding: 72px 32px 32px;
      height: 100%;
      background-color: $black;

      @include respond-to(s_tablet) {
        padding: 32px 24px;
      }
    }

    &._small {
      flex-shrink: 0;
      width: 459px;

      @include respond-to(s_tablet) {
        width: 100%;
        height: 320px;
      }
    }
  }

  .title {
    position: relative;
    z-index: 1;
    max-width: 869px;
    margin-bottom: auto;
    color: $white;

    @include respond-to(tablet) {
      max-width: 446px;
    }

    @include respond-to(mobile) {
      max-width: 100%;
      white-space: break-spaces;
    }
  }

  .circle {
    position: absolute;
    bottom: -14px;
    right: 171px;
    z-index: -1;
    width: 336px;
    height: 130px;
    stroke-dasharray: 1200;
    stroke-dashoffset: 1200;
    animation: draw 3s;
    animation-fill-mode: forwards;

    @include respond-to(tablet) {
      right: auto;
      left: 157px;
      width: 200px;
      height: 80px;
    }

    @include respond-to(mobile) {
      left: 0;
      bottom: -8px;
      width: 213px;
      height: 82px;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 154px;

    @include respond-to(mobile) {
      flex-direction: column-reverse;
      align-items: flex-start;
      margin-top: 72px;
    }
  }

  .text {
    width: 360px;
    margin-left: 24px;

    @include respond-to(mobile) {
      margin-left: 0;
      margin-bottom: 48px;
    }
  }

  .button {
    @include respond-to(mobile) {
      width: 100%;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>