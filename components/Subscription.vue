<script setup lang="ts">
import subscriptionImage from '../assets/images/subscription.jpg';
import {ref} from "vue";
import {createIntersectionObserver} from "../utils/createIntersectionObserver";

const sectionRef = ref<HTMLElement | null>(null);
const isAnimationStarted = ref<boolean>(false);
let observer: IntersectionObserver | undefined;

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimationStarted.value = true;
};

onMounted(() => {
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);
});
</script>

<template>
  <section ref="sectionRef" :class="$style.Subscription">
    <h2 :class="[$style.title, 'h1']">
      Seize
      <img :src="subscriptionImage" :class="[$style.image, {[$style._animated]: isAnimationStarted}]">
      The Moment
    </h2>
    <h2 :class="[$style.title, 'h1']">
      Join Cowork Today!
    </h2>

    <div :class="[$style.text, 'paragraph']">
      Uncover the transformative power of Cowork as echoed by those who've made it their professional haven. This is
      more than finding a desk; it's discovering a community that fuels your journey to success.
    </div>

    <VButton
        color="danger"
        size="big"
        title="Claim Your Spot"
        type="a"
        href="/contact"
        :class="$style.button"
    />
  </section>
</template>

<style lang="scss" module>
.Subscription {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 32px;
  border-radius: 32px;
  background-color: $black;

  @include respond-to(mobile) {
    padding: 24px;
  }

  .title {
    display: flex;
    align-items: center;
    gap: 24px;
    color: $white;

    @include respond-to(mobile) {
      flex-wrap: wrap;
      gap: 0 16px;
      justify-content: center;
      text-align: center;
    }

    &:nth-child(2) {
      margin-top: 12px;

      @include respond-to(mobile) {
        margin-top: 0;
      }
    }
  }

  .image {
    max-width: 96px;
    height: 96px;
    border-radius: 48px;
    transition: max-width .5s ease-in;

    @include respond-to(tablet) {
      max-width: 58px;
      height: 58px;
    }

    &._animated {
      max-width: 240px;

      @include respond-to(tablet) {
        max-width: 180px;
      }

      @include respond-to(mobile) {
        max-width: 160px;
      }
    }
  }

  .text {
    margin-top: 24px;
    max-width: 639px;
    text-align: center;
    color: $white;

    @include respond-to(mobile) {
      max-width: none;
    }
  }

  .button {
    margin-top: 48px;

    @include respond-to(mobile) {
      width: 100%;
    }
  }
}
</style>