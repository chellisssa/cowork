<script setup lang=ts>
import {ref, watch} from "vue";

interface Props {
  postsPerPage: number,
  postsLength: number,
}
const props = defineProps<Props>();

const pages = ref<number[]>([]);
const activePage = ref<number>(1);
let maxPage: number;

watch(
    () => props.postsLength,
    () => {
      maxPage = Math.ceil(props.postsLength / props.postsPerPage);
      pages.value = [];
      for (let i = 1; i <= maxPage; i++) {
        pages.value.push(i);
      }
      activePage.value = 1;
    },
    { immediate: true }
);

const emit = defineEmits<{
  (e: 'update-posts', page: number)
}>();

const handleSetActivePage = (page: number): void => {
  activePage.value = page;
  emit('update-posts', page);
}

const handleChangePage = (dir: string | undefined): void => {
  if (dir === "next") {
    handleSetActivePage(activePage.value + 1);
  } else {
    handleSetActivePage(activePage.value - 1);
  }
}
</script>

<template>
  <ul :class="$style.VPagination">
    <li
        :class="[$style.page, {[$style._disabled]: activePage === 1} ]"
        @click="handleChangePage()"
    >
      <nuxt-icon name="caret" />
    </li>
    <li v-for="page in pages"
        :class="[$style.page, {[$style._active]: activePage === page, [$style._empty]: page === '...'}]"
        @click="handleSetActivePage(page)"
    >
      {{ page }}
    </li>
    <li
        :class="[$style.page, $style._next, {[$style._disabled]: activePage === maxPage}]"
        @click="handleChangePage('next')"
    >
      <nuxt-icon name="caret" />
    </li>
  </ul>
</template>

<style lang="scss" module>
.VPagination {
  display: flex;
  justify-content: center;
  gap: 16px;

  .page {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid $black;
    border-radius: 100%;
    width: 48px;
    height: 48px;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 600;
    color: $black;
    cursor: pointer;
    transition: background-color .3s ease-in, border-color .3s ease-in, color .3s ease-in, opacity .3s ease-in;

    @include hover {
      border-color: $blue;
      color: $blue;
    }

    &._active {
      background-color: $blue;
      border-color: $blue;
      color: $white;
      pointer-events: none;
      cursor: default;
    }

    &._next {
      transform: rotate(180deg);
    }

    &._disabled {
      opacity: .5;
      pointer-events: none;
      cursor: default;
    }

    &._empty {
      pointer-events: none;
      cursor: default;
    }

    :global(path) {
      fill: transparent !important;
    }
  }
}
</style>