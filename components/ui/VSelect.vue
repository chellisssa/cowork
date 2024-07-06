<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import '@vueform/multiselect/themes/default.css';

interface Props {
  label: string,
  options: string[],
  name: string,
}

const props = defineProps<Props>();

const selected = ref<string | null>(null);
const emit = defineEmits<{
  (e: 'update', payload: Record<string, any>)
}>();

const handleSelectChange = (): void => {
  nextTick(() => {
    if (selected._value) {
      emit('update', {[props.name]: selected._value});
    }
  });
};
</script>

<template>
  <div :class="$style.VSelect">
    <Multiselect
        v-model="selected"
        :options="props.options"
        :placeholder="props.label"
        :caret="false"
        @change="handleSelectChange"
    />
    <nuxt-icon name="caret-up-down" :class="$style.icon" filled />
  </div>
</template>

<style lang="scss" module>
.VSelect {
  position: relative;
  width: 100%;

  :global(.multiselect) {
    height: 48px;
    border: none;
    border-bottom: 1px solid $white;
    background-color: transparent;

    &:global(.is-active) {
      box-shadow: none;
    }
  }

  :global(.multiselect-wrapper) {
    height: 100%;
  }

  :global(.multiselect-placeholder) {
    position: absolute;
    top: 12px;
    left: 12px;
    padding-left: 0;
    height: auto;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 500;
    font-family: inherit;
    color: rgba($white, .8);
  }

  :global(.multiselect-caret) {
    display: none;
  }

  :global(.multiselect-dropdown) {
    border-radius: 0 0 24px 24px;
    background-color: $black;
  }

  :global(.multiselect-option) {
    padding: 12px;

    &:global(.is-selected) {
      background-color: $blue;
    }
  }

  :global(.multiselect-single-label) {
    padding-left: 12px;
    font-weight: 500;
  }

  :global(.multiselect-clear) {
    display: none;
  }

  .icon {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
}
</style>