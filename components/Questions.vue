<script setup lang="ts">
import { ref } from 'vue';
import {questions} from '../content.ts';
import type {Question} from "../types/question";

const questionsList = ref<Question[]>(questions);
const activeQuestionId = ref<number | null>(null);

const toggleQuestions = (id: number): void => {
  activeQuestionId.value = activeQuestionId.value === id ? null : id;
}
</script>

<template>
  <section :class="$style.Questions">
    <div :class="$style.content">
      <h3 :class="[$style.subtitle, 'subtitle']">Frequently Asked Questions</h3>
      <h2 :class="[$style.title, 'h2']">Your Roadmap to Coworking Clarity</h2>
      <div :class="[$style.text, 'paragraph']">
        Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to
        action, they may still have questions (doubts) that can be answered.
      </div>
    </div>
    <ul :class="$style.list">
      <Question
          v-for="question in questionsList"
          :key="question.id"
          :id="question.id"
          :question="question.question"
          :answer="question.answer"
          :active-question-id="activeQuestionId"
          @click="id => toggleQuestions(id)"
      />
    </ul>
  </section>
</template>

<style lang="scss" module>
.Questions {
  display: flex;
  gap: 16px;

  @include respond-to(mobile) {
    flex-direction: column;
    gap: 32px;
  }

  .content {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    max-width: 458px;

    @include respond-to(mobile) {
      max-width: none;
    }
  }

  .subtitle {
    color: $blue;
  }

  .title {
    margin-top: 16px;
  }

  .text {
    max-width: 391px;
    margin-top: auto;

    @include respond-to(mobile) {
      margin-top: 24px;
      max-width: none;
    }
  }

  .list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>