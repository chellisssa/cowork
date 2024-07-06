<script setup lang="ts">
import {ref, watch} from 'vue';
import virtualTourVideo from '../assets/video/virtual-tour.mp4';

interface Props {
  isModalOpen: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  isModalOpen: false,
});

const videoRef = ref<HTMLElement | null>(null);
const emit = defineEmits<{
  (e: 'close-modal'): void,
}>();

watch(
    () => props.isModalOpen,
    () => {
      if (props.isModalOpen) {
        videoRef.value.play();
      } else {
        videoRef.value.pause();
        videoRef.value.currentTime = 0;
      }
    },
);

const handleCloseModal = () => {
  emit('close-modal');
}
</script>

<template>
<section :class="$style.VirtualTourModal">
  <nuxt-icon name="cross" :class="$style.cross" @click="handleCloseModal" />

  <div :class="$style.content">
    <video ref="videoRef" autoplay controls>
      <source :src="virtualTourVideo" type="video/mp4">
    </video>
  </div>
</section>
</template>

<style lang="scss" module>
.VirtualTourModal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba($black, .8);

  .cross {
    position: absolute;
    top: 48px;
    right: 48px;
    z-index: 1;
    width: 48px;
    height: 48px;
    color: $white;
    cursor: pointer;
    transition: color .3s ease-in;

    @include respond-to(mobile) {
      top: 24px;
      right: 24px;
      width: 32px;
      height: 32px;
    }

    @include hover {
      color: rgba($white, .7);
    }
  }

  .content {
    width: 70%;

    @include respond-to(mobile) {
      width: 100%;
    }

    video {
      width: 100%;
    }
  }
}
</style>