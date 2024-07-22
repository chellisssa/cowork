<script setup lang="ts">
import type {PriceCard} from "../../types/priceCard";
interface Props {
  card: PriceCard,
}
const props = defineProps<Props>();
</script>

<template>
  <li :class="$style.PriceCard">
    <h3 :class="[$style.title, 'h3']">
      {{ card.title }}
      <span
          v-if="card.isPopular"
          class="subtitle"
      >
        Popular
      </span>
    </h3>
    <p :class="[$style.text, 'paragraph']">
      {{ card.text }}
    </p>
    <div :class="$style.priceWrapper">
      <span :class="[$style.subtext, 'paragraph']">
        {{ card.subtext }}
      </span>
      <p :class="$style.price">
        <span>${{ card.price }}</span>/ month
      </p>
      <span :class="[$style.aftertext, 'small']">
        {{ card.afterText }}
      </span>
    </div>
    <ul :class="$style.advantages">
      <li v-for="(advantage, index) in card.advantages"
          :key="index"
          :class="[$style.advantage, 'paragraph']"
      >
        {{ advantage }}
      </li>
    </ul>
    <p :class="$style.tagsTitle">Bonus</p>
    <ul :class="$style.tags">
      <VTag
          v-for="(tag, index) in card.tags"
          :key="index"
          :title="tag"
          size="small"
          :class="[$style.tag, 'small']"
      />
    </ul>
    <VButton :class="$style.button" :title="card.buttonText" />
  </li>
</template>

<style lang="scss" module>
.PriceCard {
  border-radius: 24px;
  padding: 32px;

  @include respond-to(mobile) {
    padding: 24px;
  }

  .title {
    display: flex;
    gap: 12px;
    align-items: center;

    @include respond-to(s_tablet) {
      flex-direction: column;
      gap: 4px;
    }

    @include respond-to(mobile) {
      flex-direction: row;
    }

    span {
      border-radius: 100px;
      padding: 0 12px;
      text-transform: uppercase;
      background-color: $red;
      color: $white;
    }
  }

  .text {
    margin-top: 8px;
  }

  .priceWrapper {
    margin-top: 32px;

    @include respond-to(mobile) {
      margin-top: 24px;
    }
  }

  .subtext {
    margin-bottom: 8px;
  }

  .price {
    font-family: 'NeueRegrade';
    font-weight: 500;
    font-size: 46px;

    @include respond-to(mobile) {
      font-size: 32px;
    }

    span {
      font-weight: 700;
      font-size: 82px;

      @include respond-to(mobile) {
        font-size: 68px;
      }
    }
  }

  .advantages {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;

    @include respond-to(mobile) {
      margin-top: 24px;
    }
  }

  .advantage {
    white-space: break-spaces;
  }

  .tagsTitle {
    margin-top: 32px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    text-transform: uppercase;

    @include respond-to(mobile) {
      margin-top: 24px;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;
  }

  .button {
    margin-top: 32px;
    width: 100%;

    @include respond-to(mobile) {
      margin-top: 24px;
    }
  }
}
</style>