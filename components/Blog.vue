<script setup lang="ts">
import blogTitleImage from '../assets/images/blog-title.jpg';
import {ref} from 'vue';
import {blogPosts} from '../content.ts';
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import type BlogPostPreview from '~/types/blog';

const blogPostsList = ref<BlogPostPreview[]>(blogPosts.slice(0, 3));
const sectionRef = ref<HTMLElement | null>(null);
const isAnimated = ref<boolean>(false);
let observer:  IntersectionObserver | undefined;

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimated.value = true;
};

onMounted(() => {
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);
});
</script>

<template>
  <section ref="sectionRef" :class="[$style.Blog, {[$style._animated]: isAnimated}]">
    <header :class="$style.header">
      <h3 :class="[$style.subtitle, 'subtitle']">Cowork Chronicles </h3>
      <h2 :class="[$style.title, 'h2']">
        <div>Insights, Innovation, and</div>
        <div>
          <img :src="blogTitleImage" :class="$style.image">
          Inspiration
        </div>
      </h2>
      <div :class="[$style.text, 'paragraph']">
        Stay updated on the latest trends in coworking, productivity tips, and success stories that define the Cowork
        experience.
      </div>
    </header>
    <ul :class="$style.list">
      <PostCard
          v-for="post in blogPostsList"
          :key="post.id"
          :class="$style.post"
          :post="post"
          :is-animated="isAnimated"
      />
    </ul>
    <VButton title="View All" :class="$style.button" type="a" href="/blog" />
  </section>
</template>

<style lang="scss" module>
.Blog {

  &._animated {

    .image {
      max-width: 180px;
    }
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .subtitle {
    color: $blue;
  }

  .title {
    margin-top: 16px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;

      @include respond-to(mobile) {
        text-align: center;
      }

      &:nth-child(2) {
        margin-top: 8px;

        @include respond-to(mobile) {
          margin-top: 0;
        }
      }
    }
  }

  .image {
    max-width: 58px;
    height: 58px;
    border-radius: 48px;
    object-fit: cover;
    transition: max-width .5s ease-in;

    @include respond-to(mobile) {
      width: 120px;
      height: 45px;
    }
  }

  .text {
    max-width: 520px;
    margin-top: 24px;
    text-align: center;
  }

  .list {
    display: flex;
    gap: 16px;
    margin-top: 48px;
    overflow: hidden;

    @include respond-to(mobile) {
      flex-direction: column;
    }
  }

  .post {
    width: calc((100% - 2 * 16px) / 3);

    @include respond-to(mobile) {
      width: 100%;
    }

    &:nth-child(2) {
      transition-delay: .4s;
    }

    &:nth-child(3) {
      transition-delay: .6s;
    }
  }

  .button {
    width: fit-content;
    margin: 64px auto 0;

    @include respond-to(mobile) {
      margin-top: 32px;
    }
  }
}
</style>