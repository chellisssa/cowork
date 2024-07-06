<script setup lang="ts">
import {ref, watch} from 'vue';

interface Props {
  label: string,
  name: string,
  type?: string,
  required?: boolean,
  isUpdated: boolean,
  color?: 'white' | 'black',
  basicPassword?: '',
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  color: 'white',
});

const input = ref<string | null>(null);
const isFocused = ref<boolean>(false);
const value = ref<string>('');
const error = ref<string>('');
const emptyMessage: string = 'This field should not be empty.';
const invalidMessage: string = 'This field is not valid.';
const lengthMessage: string = 'Password should be at least 8 characters.';
const charactersMessage: string = 'Password should contain letters, numbers and special characters.';
const notIdenticalPasswordMessage: string = 'Passwords are not the same.'
const emit = defineEmits<{
  (e: 'update', payload: Record<string, any>)
}>();

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

const validatePassword = (password: string): boolean => {
  const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pattern.test(password);
}

const handleInputFocus = (): void => {
  isFocused.value = true;
  error.value = '';
}

const handleInputBlur = (): void => {
  if (!value.value) {
    isFocused.value = false;

    if (props.required) {
      error.value = emptyMessage;
    }
  }

  if (props.type === 'email' && !input.value.validity.valid) {
    error.value = invalidMessage;
  } else if (props.name === 'password') {
    if (value.value.length < 8) {
      error.value = lengthMessage;
    } else if (!validatePassword(value.value)) {
      error.value = charactersMessage;
    }
  } else if (props.name === 'repeatPassword') {
    if (value.value !== props.basicPassword) {
      error.value = notIdenticalPasswordMessage;
    }
  }

  if (!error.value) {
    emit('update', {[props.name]: value.value});
  }
}
</script>

<template>
  <div :class="[$style.Input, {[$style._active]: isFocused, [$style._error]: error}, $style['_' + color]]">
    <label :class="[$style.label, 'paragraph']">
      {{ label }}
      <span v-if="required" class="subtitle">*</span>
    </label>
    <input
        ref="input"
        v-model="value"
        :type="type"
        :class="[$style.input, 'paragraph']"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
    />
    <p :class="$style.error">{{ error }}</p>
  </div>
</template>

<style lang="scss" module>
.Input {
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

    .input {
      border-bottom-color: $red;
    }

    .error {
      opacity: 1;
    }
  }

  &._black {

    .label {
      color: rgba($black, .8);
    }

    .input {
      border-color: $black;
      color: $black;
    }
  }

  .label {
    position: absolute;
    top: 12px;
    left: 12px;
    display: flex;
    gap: 2px;
    color: rgba($white, .8);
    transition: transform .3s ease-in, font-size .3s ease-in;
    pointer-events: none;

    span {
      color: $red;
    }
  }

  .input {
    width: 100%;
    height: 48px;
    border: none;
    padding-left: 12px;
    border-bottom: 1px solid $white;
    font-family: inherit;
    background-color: transparent;
    outline: none;
    color: $white;
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