<script setup lang="ts">
import {ref} from 'vue';
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import statisticsImage from '../assets/images/statistics.jpg';
import border from '../assets/icons/border.svg';
import {statistics} from "../content";
import type {StatisticItem} from "../types/statisticItem";

const statisticsList = ref<StatisticItem[]>(statistics);
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
  <section ref="sectionRef" :class="$style.Statistics">
    <div :class="$style.content">
      <nuxt-icon name="border" :class="$style.border" filled />
      <h3 :class="[$style.subtitle, 'subtitle']">Cowork in Numbers</h3>
      <h2 :class="[$style.title, 'h2']">Transformative Statistics That Speak Volumes</h2>
      <ul :class="[$style.list, {[$style._animated]: isAnimationStarted}]">
        <li v-for="stat in statisticsList" :key="stat.id" :class="$style.statItem">
          <div :class="$style.statItemWrapper">
            <span :class="[$style.statItemValue, 'h2']">{{ stat.value }}</span>
            <span :class="[$style.statItemLabel, 'paragraph']">{{ stat.label }}</span>
            <span :class="$style.ellipse"></span>
          </div>
        </li>
      </ul>
    </div>
    <img :src="statisticsImage" :class="$style.image"/>
  </section>
</template>

<style lang="scss" module>
.Statistics {
  display: flex;
  gap: 32px;

  @include respond-to(mobile) {
    flex-direction: column;
  }

  .content {
    flex-grow: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 32px;
    background-color: $yellow;
    border-radius: 32px;

    @include respond-to(mobile) {
      padding: 32px 24px;
    }
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .subtitle {
    color: $blue;
  }

  .title {
    margin-top: 16px;
    color: $blue;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px 0;
    margin-top: 32px;

    &._animated {

      .statItemWrapper {
        transform: translateY(0);
      }
    }
  }

  .statItem {
    position: relative;
    z-index: 1;
    width: 50%;
    padding: 8px 0;
    overflow: hidden;

    &:first-child {

      .statItemWrapper {
        transition: transform .5s ease-in;
      }

      .ellipse {
        left: 59px;
      }
    }

    &:nth-child(2) {

      .statItemWrapper {
        transition: transform .5s ease-in .3s;
      }

      .ellipse {
        left: 29px;
      }
    }

    &:nth-child(3) {

      .statItemWrapper {
        transition: transform .5s ease-in .6s;
      }

      .ellipse {
        left: 33px;
      }
    }

    &:nth-child(4) {

      .statItemWrapper {
        transition: transform .5s ease-in .9s;
      }

      .ellipse {
        left: 52px;
      }
    }
  }

  .statItemWrapper {
    transform: translateY(100%);
  }

  .statItemValue {
    color: $blue;
  }

  .statItemLabel {
    display: block;
    margin-top: 8px;
  }

  .ellipse {
    position: absolute;
    top: 24px;
    left: 0;
    z-index: -1;
    width: 36px;
    height: 36px;
    border-radius: 100%;
    background-color: $white;
  }

  .image {
    flex-shrink: 0;
    border-radius: 32px;
    width: 45%;
    height: 596px;

    @include respond-to(mobile) {
      width: 100%;
      height: 320px;
    }
  }
}
</style>