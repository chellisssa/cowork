<script setup lang="ts">
import { ref } from 'vue';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import {reviews} from '../content.ts';
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import type {Review} from "../types/review";

const reviewsRef = ref<HTMLElement | null>(null);
const nextElRef = ref<HTMLElement | null>(null);
const prevElRef = ref<HTMLElement | null>(null);
const reviewsList = ref<Review[]>(reviews);
const sectionRef = ref<HTMLElement | null>(null);
const isAnimated = ref<boolean>(false);
let observer: IntersectionObserver | undefined;

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimated.value = true;
};

onMounted(() => {
  if (process.client) {
    observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);

    if (reviewsRef.value && window.innerWidth <= 743) {
      const swiperOptions: SwiperOptions = {
        modules: [Navigation],
        navigation: {
          nextEl: nextElRef.value,
          prevEl: prevElRef.value,
        },
        width: 300,
        spaceBetween: 24,
      };

      const swiper = new Swiper(reviewsRef.value, swiperOptions);
    }
  }
});
</script>

<template>
  <section ref="sectionRef" :class="[$style.Reviews, {[$style._animated]: isAnimated}]">
    <header :class="$style.header">
      <h2 :class="[$style.title, 'h1']">
        Hear It from Our Clients
        <nuxt-icon name="crowd" :class="$style.icon" filled />
      </h2>
      <VDescription
          text="Cowork in Words"
          is-subheading
          :is-animated="isAnimated"
      />
    </header>
    <div :class="$style.arrows">
      <button :class="[$style.arrow, $style._prev]" ref="prevElRef">
        <nuxt-icon name="arrow" :class="$style.arrowIcon"/>
      </button>
      <button :class="$style.arrow" ref="nextElRef">
        <nuxt-icon name="arrow" :class="$style.arrowIcon"/>
      </button>
    </div>
    <div ref="reviewsRef" class="swiper-container">
      <ul :class="[$style.list, 'swiper-wrapper']">
        <li v-for="review in reviewsList" :key="review.id" :class="[$style.review, 'swiper-slide']">
          <img :src="review.image" alt="" :class="$style.reviewImage">
          <div :class="[$style.reviewText, 'paragraph']">{{ review.text }}</div>
          <h3 :class="[$style.reviewAuthor, 'subtitle']">{{ review.author }}</h3>
          <p :class="$style.reviewPosition">{{ review.position }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" module>
.Reviews {
  padding: 72px 32px 124px;
  border-radius: 32px;
  background-color: $black;

  &._animated {

    .review:first-child {
      transform: translate(-12px, 1px);

      @include respond-to(mobile) {
        transform: none;
      }
    }

    .review:nth-child(3) {
      transform: translate(-36px, 35px);

      @include respond-to(mobile) {
        transform: none;
      }
    }

    .review:nth-child(4) {
      transform: translate(-38px, 35px);

      @include respond-to(mobile) {
        transform: none;
      }
    }

    .review:nth-child(5) {
      transform: translate(-60px, 65px);

      @include respond-to(mobile) {
        transform: none;
      }
    }
  }

  @include respond-to(mobile) {
    padding: 24px;
    border-radius: 24px;
    overflow: hidden;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include respond-to(mobile) {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }
  }

  .title {
    position: relative;
    max-width: 683px;
    color: $white;

    @include respond-to(tablet) {
      max-width: 352px;
    }

    @include respond-to(mobile) {
      max-width: 330px;
    }
  }

  .icon {
    position: absolute;
    top: 11px;
    right: -50px;
    display: block;
    width: 64px;
    height: 64px;

    @include respond-to(tablet) {
      top: 4px;
      height: 46px;
    }

    @include respond-to(mobile) {
      width: 32px;
      height: 32px;
      top: auto;
      bottom: 11px;
      right: auto;
      left: 200px;
    }
  }

  .arrows {
    display: none;
    justify-content: flex-end;
    align-items: center;
    gap: 16px;

    @include respond-to(mobile) {
      display: flex;
    }
  }

  .arrow {
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: none;
    color: $white;
    transition: opacity .3s ease-in;

    &._prev {
      transform: rotate(180deg);
    }

    &:global(.swiper-button-disabled) {
      opacity: .5;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0 63px;
    margin-top: 32px;
    padding: 12px 0;

    @include respond-to(mobile) {
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      gap: 0;
      margin-top: 16px;
      padding: 0;
    }
  }

  .review {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    border-radius: 24px;
    padding: 32px;
    background-color: $blue;
    color: $white;
    transition: transform .5s ease-in .6s;

    @include respond-to(mobile) {
      flex-shrink: 0;
      width: 300px;
      padding: 16px 24px;
      border-radius: 16px;
    }

    &:nth-child(even) {
      background-color: $yellow;
      color: $black;
    }

    &:nth-child(1) {
      transform: translate(111%, 1px);

      @include respond-to(mobile) {
        transform: none;
      }
    }

    &:nth-child(2) {
      transform: translate(-24px, -5px);

      @include respond-to(mobile) {
        transform: none;
      }
    }

    &:nth-child(3) {
      z-index: -1;
      transform: translate(-124%, -5px);
      transition: transform .5s ease-in .9s;

      @include respond-to(mobile) {
        transform: none;
      }
    }

    &:nth-child(4) {
      z-index: -1;
      transform: translate(52%, -102%);
      transition: transform .5s ease-in 1.2s;

      @include respond-to(mobile) {
        transform: none;
      }
    }

    &:nth-child(5) {
      z-index: -1;
      transform: translate(-65%, -102%);
      transition: transform .5s ease-in 1.5s;

      @include respond-to(mobile) {
        transform: none;
      }
    }
  }

  .reviewImage {
    width: 56px;
    height: 56px;
  }

  .reviewText {
    margin-top: 24px;
  }

  .reviewAuthor {
    margin-top: 24px;
  }

  .reviewPosition {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>