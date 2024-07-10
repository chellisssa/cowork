<script setup lang=ts>
import type {AddOnCard} from "../../types/AddOnCard";

interface Props {
  service: AddOnCard,
}

defineProps<Props>();
</script>

<template>
  <li :class="$style.AddOnCard">
    <h3 :class="[$style.title, 'h3']">
      {{ service.title }}
    </h3>
    <p :class="$style.text">
      {{ service.text }}
    </p>
    <p :class="[$style.price, 'h2']">
      ${{ service.price }}<span v-if="service.period">/{{ service.period }}</span>
    </p>
    <p :class="[$style.subtext, 'small']">
      {{ service.subtext }}
    </p>
    <VButton :title="service.buttonText" :class="$style.button" />
    <p :class="$style.disclaimer">
      {{ service.disclaimer }}
    </p>
  </li>
</template>

<style lang="scss" module>
.AddOnCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid $black;
  border-radius: 32px;
  padding: 32px;
  text-align: center;

  .text {
    margin-top: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  }

  .price {
    margin-top: 24px;
  }

  .button {
    margin-top: 24px;
    width: 100%;
  }

  .disclaimer {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1.8;
    font-style: italic;
  }
}
</style>