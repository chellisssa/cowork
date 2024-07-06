<script setup lang="ts">
import {ref} from 'vue';
import {companies} from '../content.ts';
import type Company from '~/types/company';

const companiesList = ref<Company[]>(companies);
</script>

<template>
  <section :class="$style.Companies">
    <h2 :class="[$style.subtitle, 'subtitle']">Trusted by Leading Companies</h2>
    <div :class="$style.wrapper">
      <ul :class="$style.list">
        <li v-for="company in companiesList" :key="company.id" :class="$style.company">
          <nuxt-icon :name="company.icon" filled/>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" module>
.Companies {
  padding: 32px 0;

  @include respond-to(s_tablet) {
    padding: 48px 0;
  }

  .subtitle {
    text-align: center;
    color: $blue;
  }

  .wrapper {
    @include respond-to(mobile) {
      width: calc(100% + 32px);
      margin-left: -16px;
    }
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    margin-top: 24px;

    @include respond-to(mobile) {
      justify-content: flex-start;
      gap: 32px;
      overflow: auto;
      padding: 0 16px;
      scrollbar-width: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .company {
    width: 154px;
    height: 35px;

    @include respond-to(mobile) {
      flex-shrink: 0;
    }
  }
}
</style>