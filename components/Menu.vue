<script setup lang="ts">
import {ref, watch} from 'vue';
import {headerNavigation} from '~/content';
import type {NavigationItem} from '~/types/navigationItems';

const navigation = ref<NavigationItem[]>(headerNavigation);
const emit = defineEmits<{
  (e: 'close-menu'): void,
}>();
const route = useRoute();

watch(
    () => route.fullPath,
    () => {
      handleCloseMenu();
    },
);

function handleCloseMenu(): void {
  emit('close-menu');
}
</script>

<template>
  <section :class="$style.Menu">
    <div :class="$style.wrapper">
      <header :class="$style.header">
        <nuxt-link to="/">
          <nuxt-icon name="logo" :class="$style.logo"/>
        </nuxt-link>

        <nuxt-icon name="cross" :class="$style.cross" @click="handleCloseMenu"/>
      </header>

      <ul :class="$style.list">
        <li
            v-for="item in navigation"
            :key="item.id"
            :class="[$style.item, 'h2', {[$style._active]: route.path === item.url}]">
          <nuxt-link :to="item.url">
            {{ item.title }}
          </nuxt-link>
        </li>
      </ul>

      <div :class="$style.buttons">
        <VButton title="Log In" color="secondary" type="a" to="/login"/>
        <VButton title="Sign Up" type="a" to="/signup"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" module>
.Menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: $white;
  background-color: $black;

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .logo {
    display: flex;
    width: 100px;
    height: 20px;
    color: $white;
  }

  .cross {
    width: 32px;
    height: 32px;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 24px 20px;
  }

  .item {
    &._active {
      color: $blue;
    }

    a {
      color: inherit;
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 24px;
    margin-top: auto;
    padding: 24px 20px;
  }
}
</style>