<script setup lang="ts">
import {ref} from "vue";
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import type {PriceCard} from '../types/priceCard';
import {priceCards} from '../content';

const priceCardsList = ref<PriceCard>(priceCards)
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
  <section ref="sectionRef" :class="$style.Pricing">
    <header :class="$style.header">
      <VTitle
          :class="$style.title"
          tag="h1"
          title="Membership <span>Pricing</span>"
          iconName="tag"
      />
      <VDescription
          :class="$style.textWrapper"
          text="Invest in spaces that drives your business. Clear, straightforward and tailored to your needs."
          :is-animated="isAnimated"
      />
    </header>
    <main :class="$style.main">
      <ul :class="$style.list">
        <PriceCard
            v-for="card in priceCardsList"
            :class="$style.card"
            :key="card.id"
            :card="card"
        />
      </ul>
      <p :class="[$style.disclaimer, 'paragraph']">
        All plans require a 12-month agreement. Prices are per person.
      </p>
    </main>
  </section>
</template>

<style lang="scss" module>
.Pricing {
  padding: 72px 32px 48px;
  border-radius: 32px;
  background-color: $black;

  @include respond-to(mobile) {
    padding: 24px;
    border-radius: 24px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include respond-to(mobile) {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  .title {
    max-width: 661px;

    @include respond-to(tablet) {
      max-width: 500px;
    }

    @include respond-to(mobile) {
      max-width: 100%;
    }
  }

  .textWrapper {
    max-width: 320px;

    @include respond-to(mobile) {
      max-width: 100%;
    }
  }

  .list {
    display: flex;
    gap: 16px;
    align-items: flex-end;
    margin-top: 64px;

    @include respond-to(mobile) {
      flex-direction: column;
      gap: 24px;
      margin-top: 48px;
    }
  }

  .card {
    flex-grow: 1;
    width: 33%;
    background-color: $yellow;

    @include respond-to(mobile) {
      width: 100%;
    }

    &:nth-child(even) {
      background-color: $white;
    }
  }

  .disclaimer {
    margin-top: 32px;
    text-align: center;
    color: $white;

    @include respond-to(mobile) {
      margin-top: 24px;
    }
  }
}
</style>