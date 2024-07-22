<script setup lang=ts>
import type {BlogPostPreview} from "../content";
import {ref} from "vue";
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import searchIcon from "../assets/images/search.jpg";

interface Props {
  posts: BlogPostPreview[]
}
const props = defineProps<Props>();

const sectionRef = ref<HTMLElement | null>(null);
const isAnimated = ref<boolean>(false);
let observer:  IntersectionObserver | undefined;
const tagsList = props.posts.map(post => post.tag);
const tags = ref<string[]>([...new Set(tagsList)]);
const postsPerPage: number = 9;
const filteredPosts = ref<BlogPostPreview[]>(props.posts);
const activePosts = ref<BlogPostPreview[]>(filteredPosts.value.slice(0, postsPerPage));
let offset: number | undefined;

const activeTags = ref<string[]>(['All']);

onMounted(() => {
  offset = window.innerWidth < 743 ? 110 : 140;
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .1);
});

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimated.value = true;
};

const scrollTo = (top:number):void => {
  window.scrollTo({
    top,
    behavior: "smooth",
  })
};

const handleUpdatePosts = (page: number): void => {
  activePosts.value = filteredPosts.value.slice(
      (page - 1) * postsPerPage,
      page * postsPerPage
  );
  scrollTo(window.scrollY + sectionRef.value.getBoundingClientRect().top - offset);
};

const handleFilterTags = (tag: string): void => {
  if (tag === 'All') {
    activeTags.value = ['All'];
  } else {
    activeTags.value = activeTags.value.filter(t => t !== 'All');
    if (activeTags.value.includes(tag)) {
      activeTags.value = activeTags.value.filter(t => t !== tag);
    } else {
      activeTags.value.push(tag);
    }
  }

  if (!activeTags.value.length) {
    activeTags.value = ['All'];
  }

  handleFilterPosts();
  handleUpdatePosts(1);
}

const handleFilterPosts = (): void => {
  if (activeTags.value.includes('All')) {
    filteredPosts.value = props.posts;
  } else {
    filteredPosts.value = props.posts.filter(post => activeTags.value.includes(post.tag));
  }
}
</script>

<template>
  <section
      ref="sectionRef"
      :class="$style.PostsList"
  >

    <ul :class="$style.tags">
      <VTag
          title="All Posts"
          :class="[$style.tag]"
          :is-active="activeTags.includes('All')"
          @click="handleFilterTags('All')"
      />
      <VTag
          v-for="tag in tags"
          :key="tag"
          :title="tag"
          :is-active="activeTags.includes(tag)"
          :class="$style.tag"
          @click="handleFilterTags"
      />
      <li :class="$style.filter">
        <nuxt-icon name="filter" filled />
      </li>
      <li :class="$style.search">
        <input
            type="text"
            :class="$style.searchInput"
            placeholder="Search"
        >
        <img :src="searchIcon" :class="$style.searchImage">
      </li>
    </ul>
    <ul :class="$style.posts">
      <div
          v-for="post in activePosts"
          :key="post.id"
          :class="$style.postWrapper"
      >
        <PostCard
            :post="post"
            :class="$style.post"
            :is-animated="isAnimated"
        />
      </div>
    </ul>
    <VPagination
        :class="$style.pagination"
        :posts-per-page="postsPerPage"
        :posts-length="filteredPosts.length"
        @update-posts="handleUpdatePosts"
    />
  </section>
</template>

<style lang="scss" module>
.PostsList {

  .tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @include respond-to(s_tablet) {
      flex-wrap: wrap;
      gap: 12px;
    }

    @include respond-to(mobile) {
      gap: 8px;
    }
  }

  .tag {
    @include respond-to(mobile) {
      display: none;
    }
  }

  .filter {
    display: none;

    @include respond-to(mobile) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border: 1px solid $black;
      border-radius: 100%;
    }
  }

  .search {
    position: relative;
    border: 1px solid $black;
    border-radius: 100px;
    width: 174px;
    height: 48px;

    @include respond-to(mobile) {
      flex-grow: 1;
    }
  }

  .searchInput {
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 24px;
    background-color: transparent;

    &::placeholder {
      font-size: 16px;
      line-height: 1.5;
      font-weight: 600;
      color: $black;
    }
  }

  .searchImage {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    display: block;
    width: 40px;
    height: 24px;
    border-radius: 48px;
  }

  .posts {
    display: flex;
    flex-wrap: wrap;
    gap: 48px 16px;
    margin-top: 72px;

    @include respond-to(mobile) {
      margin-top: 48px;
    }
  }

  .postWrapper {
    width: calc((100% - 2 * 16px) / 3);
    overflow: hidden;

    @include respond-to(mobile) {
      width: 100%;
    }
  }

  @for $i from 1 through 9 {
    .postWrapper:nth-child(#{$i}) .post {
      transition-delay: $i * .2s;
    }
  }

  .pagination {
    margin-top: 72px;

    @include respond-to(mobile) {
      margin-top: 48px;
    }
  }
}
</style>