<script setup lang=ts>
import {ref} from "vue";
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import {aboutItems} from "../content";
import type {AboutItem} from "../types/aboutItem";
import border from '../assets/icons/border.svg';

const sectionRef = ref<HTMLElement | null>(null);
const isAnimated = ref<boolean>(false);
let observer: IntersectionObserver | undefined;
const items = ref<AboutItem[]>(aboutItems);
const activeItemId = ref<AboutItem>(aboutItems[0].id);

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimated.value = true;
};

const handleActiveItem = (id: number): void => {
  activeItemId.value = id;
}

onMounted(() => {
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);
});
</script>

<template>
  <section
      ref="sectionRef"
      :class="$style.About"
  >
    <header :class="$style.header">
      <VTitle
          :class="$style.title"
          icon-name="star"
          tag="h1"
          title="About Our Coworking Space"
      />

      <VDescription
          :class="$style.text"
          :is-animated="isAnimated"
          text="We're on a mission to reshape how people work and create by providing elevated coworking experiences."
      />
    </header>

    <main :class="$style.main">
      <div
          v-for="(item, index) in items"
          :key="item.id"
          :class="[$style.box, {[$style._active]: activeItemId === item.id}]"
          @click="handleActiveItem(item.id)"
      >
        <div :class="$style.border"></div>
        <div :class="$style.boxImageWrapper">
          <img :src="item.image" :class="$style.boxImage" />
        </div>
        <h3 :class="[$style.boxTitle, 'h3']">{{ item.title }}</h3>
        <div :class="[$style.boxText, 'paragraph']">{{ item.text }}</div>
        <span :class="[$style.boxHint, 'paragraph']">Tap to expand</span>
        <span :class="[$style.boxOrder, 'subheading']">{{ index + 1 }}</span>
      </div>
    </main>
    <VDescription
        :class="[$style.text, $style._mobile]"
        :is-animated="isAnimated"
        text="We're on a mission to reshape how people work and create by providing elevated coworking experiences."
    />
  </section>
</template>

<style lang="scss" module>
.About {
  padding: 72px 32px 48px;
  border-radius: 32px;
  background-color: $black;

  @include respond-to(s_tablet) {
    padding: 24px 24px 40px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .title {
    max-width: 646px;

    @include respond-to(s_tablet) {
      max-width: none;
    }
  }

  .text {
    max-width: 320px;

    @include respond-to(s_tablet) {
      display: none;
    }

    &._mobile {
      display: none;

      @include respond-to(s_tablet) {
        display: block;
        max-width: none;
        margin-top: 32px;
        text-align: center;
      }

      &:before {
        @include respond-to(s_tablet) {
          content: none;
        }
      }
    }
  }

  .main {
    display: flex;
    gap: 16px;
    margin-top: 64px;

    @include respond-to(s_tablet) {
      flex-direction: column;
      margin-top: 24px;
    }
  }

  .box {
    flex-grow: 1;
    position: relative;
    padding: 32px;
    max-width: 324px;
    border-radius: 24px;
    background-color: $yellow;
    cursor: pointer;
    transition: max-width .3s ease-in;

    @include respond-to(s_tablet) {
      display: flex;
      flex-direction: column;
      max-width: none;
      padding: 24px;
      border-radius: 16px;
    }

    @include hover {
      .boxImage {
        transform: scale(1.2);
      }
    }

    &._active {
      max-width: 663px;
      pointer-events: none;
      cursor: default;

      @include respond-to(s_tablet) {
        max-width: none;
      }

      .boxText {
        opacity: 1;
        transition: opacity .3s ease-in .3s;

        @include respond-to(s_tablet) {
          max-height: 1000px;
          margin-top: 16px;
        }
      }

      .boxHint {
        opacity: 0;
      }

      .boxImageWrapper {
        @include respond-to(s_tablet) {
          margin-top: 16px;
          max-height: 240px;
          opacity: 1;
        }
      }
    }

    &:nth-child(even) {
      background-color: $blue;
      color: $white;

      .border {
        display: none;
      }
    }
  }

  .border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' rx='32' ry='27' fill='none' stroke='%233139FBFF' stroke-width='5' stroke-dasharray='8 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    pointer-events: none;

    @include respond-to(s_tablet) {
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' rx='31' ry='15' fill='none' stroke='%233139FBFF' stroke-width='5' stroke-dasharray='8 12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
  }

  .boxImageWrapper {
    width: 100%;
    height: 240px;
    border-radius: 16px;
    overflow: hidden;

    @include respond-to(s_tablet) {
      order: 1;
      max-height: 0;
      opacity: 0;
      transition: max-height .3s ease-in, opacity .3s ease-in .3s;
    }
  }

  .boxImage {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform .3s ease-in;
  }

  .boxTitle {
    margin-top: 24px;

    @include respond-to(s_tablet) {
      order: 0;
      margin-top: 0;
    }
  }

  .boxText {
    padding-right: 41px;
    margin-top: 8px;
    opacity: 0;
    max-height: 120px;
    transition: opacity .05s ease-in;

    @include respond-to(tablet) {
      max-height: 168px;
    }

    @include respond-to(s_tablet) {
      order: 2;
      margin-top: 8px;
      max-height: 24px;
      padding-right: 0;
    }
  }

  .boxHint {
    position: absolute;
    bottom: 32px;
    left: 32px;
    right: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: opacity .3s ease-in;

    @include respond-to(s_tablet) {
      bottom: 24px;
      left: 24px;
      right: 24px;
    }
  }

  .boxOrder {
    position: absolute;
    bottom: 26px;
    right: 32px;

    @include respond-to(s_tablet) {
      bottom: auto;
      top: 28px;
      right: 24px;
    }
  }
}
</style>