<script setup lang="ts">
import {ref, watch} from 'vue';
import {headerNavigation} from '~/content';

const emit = defineEmits<{
  (e: 'open'): void
}>();

function handleOpenMenu(): void {
  emit('open');
}

const navigation = ref(headerNavigation);
const route = useRoute();
const isLoggedIn = ref<boolean>(false);
const username = ref<string>('');

if (process.client) {
  console.log("LOGG", isLoggedIn.value);
  watch(
      () => route.fullPath,
      () => {
        if (localStorage.getItem("username")) {
          isLoggedIn.value = true;
          username.value = localStorage.getItem("username");
        }
      },
      {immediate: true}
  );
}
</script>

<template>
  <header :class="$style.Header">
    <nuxt-link to="/">
      <nuxt-icon name="logo" :class="$style.logo"/>
    </nuxt-link>

    <nav :class="$style.nav">
      <ul :class="$style.navList">
        <li
            v-for="headerItem in navigation"
            :key="headerItem.id"
            :class="[$style.navItem, 'paragraph', {[$style._active]: $route.path === headerItem.url}]">
          <nuxt-link :to="headerItem.url">
            {{ headerItem.title }}
          </nuxt-link>
        </li>
      </ul>
<!--      <div v-if="isLoggedIn"-->
<!--          :class="[$style.username, 'h3']"-->
<!--      >-->
<!--        <span>{{ username.slice(0, 1) }}</span>-->
<!--      </div>-->
      <div
          :class="$style.buttons"
      >
        <VButton title="Log In" color="outline" type="a" to="/login" />
        <VButton title="Sign Up" type="a" to="/signup" />
      </div>
    </nav>
    <button :class="$style.hamburger" @click="handleOpenMenu">
      <nuxt-icon name="hamburger" :class="$style.icon" />
    </button>
  </header>
</template>

<style lang="scss" module>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  border-top: 1px solid $black;
  border-bottom: 1px solid $black;
  padding: 14px 16px;
  background-color: $white;

  @include respond-to(s_tablet) {
    width: 100vw;
    margin-top: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -25px;
    left: 0;
    width: 100%;
    height: 24px;
    background-color: $white;

    @include respond-to(mobile) {
      top: -17px;
      height: 16px;
    }
  }

  .logo {
    display: block;
    width: 120px;
    height: 24px;
    color: $black;
    transition: color .3s ease-in;

    @include respond-to(s_tablet) {
      width: 100px;
      height: 20px;
    }

    @include hover {
      color: $blue;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 48px;

    @include respond-to(s_tablet) {
      display: none;
    }
  }

  .navList {
    display: flex;
    align-items: center;
    gap: 48px;
  }

  .navItem {

    &._active {
      a {
        color: $blue;
        cursor: default;
        pointer-events: none;
      }
    }

    a {
      color: $black;
      cursor: pointer;
      transition: color .3s ease-in;

      @include hover {
        color: $blue;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 24px;
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background-color: $blue;
    color: $white;
    text-transform: uppercase;
  }

  .hamburger {
    display: none;

    @include respond-to(s_tablet) {
      display: flex;
      padding: 6px 14px;
      border: none;
      border-radius: 42px;
      background-color: $black;
    }

    .icon {
      display: block;
      width: 32px;
      height: 32px;
      color: $white;
    }
  }
}
</style>