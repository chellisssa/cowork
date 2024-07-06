<script setup lang="ts">
import {ref} from 'vue';
import virtualTourImage from '../assets/images/virtual-tour.jpg';

const isModalOpen = ref<boolean>(false);

const handleOpenModal = (): void => {
  isModalOpen.value = true;
}

const handleCloseModal = (): void => {
  isModalOpen.value = false;
}
</script>

<template>
  <section :class="$style.VirtualTour">
    <div :class="$style.wrapper">
      <h2 :class="[$style.title, 'h1']">
        Virtual Tour
        <nuxt-icon name="robot" :class="$style.icon" filled/>
      </h2>
      <div :class="$style.content">
        <div :class="[$style.text, 'paragraph']">
          Our immersive 📺 video tour gives you a sneak peek into the vibrant atmosphere that define the Cowork
          experience.
        </div>
        <VButton title="Explore Spaces" size="big" color="secondary" type="a" to="/pricing"/>
      </div>
    </div>
    <div
        :class="$style.imageWrapper"
        @click="handleOpenModal"
    >
      <img :src="virtualTourImage" :class="$style.image">
      <nuxt-icon name="play-button" :class="$style.imageIcon" />
    </div>
    <div :class="[$style.content, $style._bottom]">
      <div :class="[$style.text, 'paragraph']">
        Our immersive 📺 video tour gives you a sneak peek into the vibrant atmosphere that define the Cowork
        experience.
      </div>
      <VButton title="Explore Spaces" size="big" color="secondary" :class="$style.button"/>
    </div>

    <Transition>
      <VirtualTourModal
          v-if="isModalOpen"
          :is-modal-open="isModalOpen"
          @close-modal="handleCloseModal"
      />
    </Transition>
  </section>
</template>

<style lang="scss" module>
.VirtualTour {
  border-radius: 32px;
  background-color: $blue;

  @include respond-to(mobile) {
    border-radius: 24px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: self-end;
    padding: 72px 32px 64px;

    @include respond-to(mobile) {
      padding: 24px;
    }
  }

  .title {
    position: relative;
    max-width: 417px;
    color: $white;

    @include respond-to(tablet) {
      max-width: 336px;
    }

    .icon {
      position: absolute;
      bottom: -4px;
      right: 92px;

      @include respond-to(tablet) {
        right: 130px;
        bottom: 2px;
        height: 58px;
      }

      @include respond-to(mobile) {
        right: 172px;
        bottom: 8px;
        width: 32px;
        height: 32px;
      }
    }
  }

  .content {
    display: flex;
    align-items: center;
    gap: 24px;

    @include respond-to(mobile) {
      display: none;
    }

    &._bottom {
      display: none;

      @include respond-to(mobile) {
        display: block;
        padding: 24px;
      }
    }
  }

  .text {
    max-width: 272px;
    color: $white;

    @include respond-to(mobile) {
      max-width: 100%;
    }
  }

  .button {
    @include respond-to(mobile) {
      margin-top: 24px;
      width: 100%;
    }
  }

  .imageWrapper {
    position: relative;
    width: 100%;
    height: 700px;
    border-radius: 32px;
    overflow: hidden;
    cursor: pointer;

    @include respond-to(mobile) {
      height: 240px;
      border-radius: 24px;
    }

    @include hover {
      .imageIcon {
        transform: translate(-50%, -50%) scale(1.1);
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($black, .2);
    }
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
  }

  .imageIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 128px;
    height: 102px;
    transition: transform .3s ease-in;

    @include respond-to(mobile) {
      width: 64px;
      height: 52px;
    }
  }
}
</style>