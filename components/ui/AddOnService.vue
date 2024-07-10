<script setup lang=ts>
import addOnServicesImage from '../assets/images/addon-services.jpg';
import type {AddOnCard} from "../../types/AddOnCard";
import {addOnCard} from "../../content";
import {ref} from "vue";
import {createIntersectionObserver} from "../../utils/createIntersectionObserver";

const services = ref<AddOnCard[]>(addOnCard);
const sectionRef = ref<HTMLElement | null>(null);
const isAnimated = ref<boolean>(false);
let observer: IntersectionObserver | undefined;

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimated.value = true;
};

onMounted(() => {
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);
})
</script>

<template>
<section ref="sectionRef" :class="[$style.AddOnService, {[$style._animated]: isAnimated}]">
  <h2 :class="[$style.title, 'h2']">
    Add-ons
    <img :src="addOnServicesImage" :class="$style.image">
    Services
  </h2>
  <ul :class="$style.list">
    <AddOnCard
        v-for="service in services"
        :key="service.id"
        :service="service"
        :class="$style.card"
    />
  </ul>
</section>
</template>

<style lang="scss" module>
.AddOnService {

  &._animated {

    .card {
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

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    @include respond-to(mobile) {
      flex-wrap: wrap;
      gap: 0 16px;
    }
  }

  .image {
    max-width: 180px;
    width: 100%;
    height: 58px;
    border-radius: 48px;
    object-fit: cover;
    transition: max-width .5s ease-in;

    @include respond-to(mobile) {
      max-width: 120px;
      height: 48px;
    }
  }

  .list {
    display: flex;
    gap: 16px;
    margin-top: 48px;
    overflow: hidden;

    @include respond-to(mobile) {
      flex-direction: column;
      gap: 24px;
    }
  }

  .card {
    width: 33%;
    flex-grow: 1;
    transform: translateY(100%);

    @include respond-to(mobile) {
      width: 100%;
    }
  }
}
</style>