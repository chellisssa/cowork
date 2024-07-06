<script setup lang="ts">
import {ref, watch} from "vue";

interface Props {
  label: string,
  required: boolean,
  isUpdated: boolean,
  name: string,
}

const props = defineProps<Props>();

const isFocused = ref<boolean>(false);
const value = ref<string>('');
const error = ref<string>('');
const emptyMessage: string = 'This field should not be empty.';
const emit = defineEmits<{
  (e: 'update', payload: Record<string, any>)
}>();

const handleTextAreaFocus = (): void => {
  isFocused.value = true;
  error.value = '';
};

const handleTextAreaBlur = (): void => {
  if (!value.value) {
    isFocused.value = false;

    if (props.required) {
      error.value = emptyMessage;
    }
  }

  if (!error.value) {
    emit('update', {[props.name]: value.value});
  }
};

watch(
    () => props.isUpdated,
    (newVal) => {
      if (newVal && !value.value && props.required) {
        error.value = emptyMessage;
      }
    },
    {
      deep: true
    }
);
</script>

<template>
  <div :class="[$style.VTextArea, {[$style._active]: isFocused, [$style._error]: error}]">
    <label :class="[$style.label, 'paragraph']">
      {{ label }}
      <span v-if="required" class="subtitle">*</span>
    </label>
    <textarea
        v-model="value"
        :class="$style.area"
        @focus="handleTextAreaFocus"
        @blur="handleTextAreaBlur"
    />
    <p :class="$style.error">{{ error }}</p>
  </div>
</template>

<style lang="scss" module>
.VTextArea {
  position: relative;
  flex-grow: 1;

  &._active {

    .label {
      font-size: 11px;
      transform: translateY(-20px);
      transform-origin: top left;
    }
  }

  &._error {

    .area {
      border-bottom-color: $red;
    }

    .error {
      opacity: 1;
    }
  }

  .label {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    gap: 2px;
    color: rgba($white, .8);
    pointer-events: none;
    transition: transform .3s ease-in, font-size .3s ease-in;

    span {
      color: $red;
    }
  }

  .area {
    width: 100%;
    height: 160px;
    border: none;
    border-bottom: 1px solid $white;
    padding: 12px 12px 0;
    font-family: inherit;
    font-size: 16px;
    font-weight: 500;
    background-color: transparent;
    color: $white;
    resize: none;
    outline: none;
    transition: border-color .3s ease-in;
  }

  .error {
    position: absolute;
    bottom: -20px;
    left: 12px;
    font-size: 11px;
    color: $red;
    opacity: 0;
    transition: opacity .3s ease-in;
  }
}
</style>