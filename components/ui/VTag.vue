<script setup lang=ts>
import {computed} from "vue";

interface Props {
  title: string,
  isActive: boolean,
  size?: 'medium' | 'small',
  color: 'black' | 'grey',
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  color: 'black',
});

const tagClass = computed<string[]>(() => {
  return [
    `tag-${props.size}`,
    `tag-${props.color}`
  ];
});

const emit = defineEmits<{
  (e: 'click', tag: string);
}>();

const handleClick = ():void => {
  emit('click', props.title);
}
</script>

<template>
<li
    :class="[$style.VTag, {[$style._active]: isActive}, tagClass]"
    @click="handleClick"
>
  {{ title }}
</li>
</template>

<style lang="scss" module>
.VTag {
  border: 1px solid $black;
  border-radius: 100px;
  cursor: pointer;
  transition: border-color .3s ease-in, color .3s ease-in, background-color .3s ease-in;

  @include hover {
    border-color: $blue;
    color: $blue;
  }

  &._active {
    border-color: $blue;
    background-color: $blue;
    color: $white;
  }

  &:global(.tag-medium) {
    padding: 12px 24px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
  }

  &:global(.tag-small) {
    padding: 0 12px;
    font-size: 14px;
    line-height: 1.8;
  }
}
</style>