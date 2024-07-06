<script setup lang="ts">
import {ref} from 'vue';
import {createIntersectionObserver} from '../utils/createIntersectionObserver';
import advantageImage from '../assets/images/advantage.jpg';
import {advantages} from '../content.ts';
import type Advantage from '~/types/advantage';

const advantagesList = ref<Advantage[]>(advantages);
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
  <section ref="sectionRef" :class="$style.Advantages">
    <h2 :class="[$style.title, 'h2']">
      Why Choose
      <img :src="advantageImage" :class="[$style.image, {[$style._animated]: isAnimationStarted}]">
      Cowork?
    </h2>

    <ul :class="[$style.list, {[$style._animated]: isAnimationStarted}]">
      <li
          v-for="advantage in advantagesList"
          :key="advantage.id"
          :class="$style.box"
      >
        <nuxt-icon :name="advantage.icon" :class="$style.boxIcon"/>
        <h3 :class="[$style.boxTitle, 'h3']">{{ advantage.title }}</h3>
        <div :class="[$style.boxText, 'paragraph']">{{ advantage.text }}</div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" module>
.Advantages {
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @include respond-to(mobile) {
      flex-wrap: wrap;
      gap: 0 8px;
    }
  }

  .image {
    max-width: 58px;
    height: 58px;
    border-radius: 48px;
    transition: max-width .5s ease-in;

    @include respond-to(mobile) {
      height: 48px;
    }

    &._animated {
      max-width: 180px;

      @include respond-to(mobile) {
        max-width: 120px;
      }
    }
  }

  .list {
    display: flex;
    gap: 16px;
    margin-top: 80px;
    overflow: hidden;

    @include respond-to(mobile) {
      flex-direction: column;
      margin-top: 32px;
    }

    &._animated {

      .box {
        transform: translateY(0);
        transition: transform .5s ease-in;

        &:nth-child(2) {
          transition-delay: .3s;
        }

        &:nth-child(3) {
          transition-delay: .6s;
        }
      }
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    border: 1px solid $black;
    border-radius: 32px;
    padding: 32px;
    transform: translateY(100%);

    @include respond-to(mobile) {
      gap: 16px;
      border-radius: 24px;
      padding: 24px;
    }
  }

  .boxIcon {
    display: block;
    width: 48px;
    height: 48px;
    color: $blue;
  }

  .boxTitle,
  .boxText {
    text-align: center;
  }
}
</style>