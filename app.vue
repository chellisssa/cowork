<script setup>
import {ref} from 'vue';

const isMenuOpen = ref(false);

function handleOpenMenu() {
  isMenuOpen.value = true;
}

function handleCloseMenu() {
  isMenuOpen.value = false;
}
</script>

<template>
  <div>
    <NuxtLayout>
      <div :class="[$style.container, 'container']">
        <Header @open="handleOpenMenu"/>
        <Transition name="from-right">
          <Menu
              v-if="isMenuOpen"
              @close-menu="handleCloseMenu"
          />
        </Transition>
        <NuxtPage/>
        <Footer/>
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" module>
.container {
  margin-top: 152px;

  @include respond-to(mobile) {
    margin-top: 110px;
  }
}
</style>