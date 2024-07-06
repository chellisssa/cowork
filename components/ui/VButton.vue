<script setup lang="ts">
import {defineComponent, computed} from 'vue';
import { NuxtLink } from '#components';

interface Props {
  title?: string,
  size?: 'medium' | 'big',
  color?: 'primary' | 'secondary' | 'outline' | 'danger',
  type?: 'button' | 'a',
  href?: string,
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  size: 'medium',
  color: 'primary',
  type: 'button',
  href: '',
});

const buttonClass = computed<string[]>(() => {
  return [
    'btn',
    `btn-${props.size}`,
    `btn-${props.color}`
  ];
});

const emit = defineEmits<{
  (e: 'click', event: Event,)
}>();

const handleClick = (e: Event): void => {
  emit('click', e);
}
</script>

<template>
  <component
      :is="type === 'button' ? 'button' : NuxtLink"
      :to="type === 'button' ? null : href"
      :class="buttonClass"
      @click="handleClick"
  >
    {{ title }}
  </component>
</template>

<style lang="scss">
.btn {
  display: block;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;

  &-medium {
    padding: 12px 24px;
    border-radius: 100px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
  }

  &-big {
    padding: 32px 48px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.5;

    @include respond-to(tablet) {
      padding: 24px 40px;
    }

    @include respond-to(mobile) {
      padding: 32px 48px;
    }
  }

  &-primary {
    border: 1px solid $blue;
    background-color: $blue;
    color: $white;
    transition: background-color .3s ease-in, color .3s ease-in;

    @include hover {
      background-color: transparent;
      color: $blue;
    }
  }

  &-secondary {
    border: 1px solid $black;
    background-color: $white;
    color: $black;
    transition: background-color .3s ease-in, color .3s ease-in, border-color .3s ease-in;

    @include hover {
      border-color: $white;
      background-color: transparent;
      color: $white;
    }
  }

  &-danger {
    border: 1px solid $red;
    background-color: $red;
    color: $white;
    transition: background-color .3s ease-in;

    @include hover {
      background-color: transparent;
    }
  }

  &-outline {
    position: relative;
    //border: 1px solid $black;
    background-color: $white;
    color: $black;
    transition: color .3s ease-in;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border: 1px solid $black;
      border-radius: inherit;
      transition: border-width .3s ease-in, border-color .3s ease-in;
    }

    @include hover {
      color: $blue;

      &:before {
        border-color: $blue;
        border-width: 2px;
      }
    }
  }
}
</style>