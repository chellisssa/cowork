<script setup lang="ts">
interface Props {
  id: number | null,
  question: string,
  answer: string,
  activeQuestionId: number | null,
}

const props = withDefaults(defineProps<Props>(), {
  id: null,
  question: '',
  answer: '',
  activeQuestionId: null,
});

const answerRef = ref<HTMLElement | null>(null);
const bottomHeight = ref<number>(0);
const emit = defineEmits<{
  (e: click, id: number): void,
}>();

onMounted(() => {
  bottomHeight.value = answerRef.value.getBoundingClientRect().height + 32;
})

const openQuestion = (e: Event) => {
  e.stopImmediatePropagation();
  emit('click', props.id);
}
</script>

<template>
  <li
      :class="[$style.Question, {[$style._open]: activeQuestionId === id}]"
      @click="openQuestion"
  >
    <div :class="$style.header">
      <p>{{ question }}</p>
      <nuxt-icon name="toggle" :class="$style.icon" filled/>
    </div>
    <div
        :class="$style.bottom"
        :style="{maxHeight: activeQuestionId === id ? bottomHeight + 'px' : 0}"
    >
      <p
          ref="answerRef"
          :class="[$style.answer, 'paragraph']">
        {{ answer }}
      </p>
    </div>
  </li>
</template>

<style lang="scss" module>
.Question {
  flex-grow: 1;
  border: 1px solid $black;
  border-radius: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color .3s ease-in;

  &._open {
    .bottom {
      margin-top: -16px;
      padding: 0 32px 32px;

      @include respond-to(mobile) {
        margin-top: -8px;
        padding: 0 24px 24px;
      }
    }
  }

  @include hover {
    border-color: $blue;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;

    @include respond-to(mobile) {
      padding: 24px;
    }
  }

  .icon {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-left: 32px;
  }

  .bottom {
    padding: 0 32px;
    transition: margin-top .2s ease-in, padding .2s ease-in, max-height .2s ease-in;

    @include respond-to(mobile) {
      padding: 0 24px;
    }
  }
}
</style>