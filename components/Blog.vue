<script setup lang="ts">
import blogTitleImage from '../assets/images/blog-title.jpg';
import {ref} from 'vue';
import {blogPosts} from '../content.ts';
import {createIntersectionObserver} from "../utils/createIntersectionObserver";
import type BlogPostPreview from '~/types/blog';

const blogPostsList = ref<BlogPostPreview[]>(blogPosts);
const sectionRef = ref<HTMLElement | null>(null);
const isAnimationStarted = ref<boolean>(false);
let observer:  IntersectionObserver | undefined;

const handleIntersection: IntersectionObserverCallback = () => {
  isAnimationStarted.value = true;
};

onMounted(() => {
  observer = createIntersectionObserver(sectionRef.value, handleIntersection, .3);
});
</script>

<template>
  <section ref="sectionRef" :class="[$style.Blog, {[$style._animated]: isAnimationStarted}]">
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
      <li
          v-for="post in blogPostsList"
          :key="post.id"
          :class="$style.post"
      >
        <div :class="$style.postWrapper">
          <div :class="$style.postImageWrapper">
            <img :src="post.image" :class="$style.postImage"/>
          </div>
          <div :class="$style.postContent">
            <div :class="$style.postTag">{{ post.tag }}</div>
            <p :class="[$style.postTime, 'small']">{{ post.read_time }} min read</p>
          </div>
          <h3 :class="[$style.postTitle, 'h3']">{{ post.title }}</h3>
        </div>
      </li>
    </ul>
    <VButton title="View All" :class="$style.button"/>
  </section>
</template>

<style lang="scss" module>
.Blog {

  &._animated {

    .image {
      max-width: 180px;
    }

    .postWrapper {
      transform: translateY(0);
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

    @include respond-to(mobile) {
      flex-direction: column;
    }
  }

  .post {
    width: calc((100% - 2 * 16px) / 3);
    cursor: pointer;
    overflow: hidden;

    @include respond-to(mobile) {
      width: 100%;
    }

    @include hover() {
      .postImage {
        transform: scale(1.1);
      }
    }

    &:nth-child(2) {

      .postWrapper {
        transition-delay: .4s;
      }
    }

    &:nth-child(3) {

      .postWrapper {
        transition-delay: .6s;
      }
    }
  }

  .postWrapper {
    transform: translateY(101%);
    transition: transform .5s ease-in .2s;
  }

  .postImageWrapper {
    width: 100%;
    height: 300px;
    border-radius: 24px;
    overflow: hidden;

    @include respond-to(tablet) {
      height: 266px;
    }

    @include respond-to(mobile) {
      height: 300px;
    }
  }

  .postImage {
    width: 100%;
    height: 100%;
    transition: transform .3s ease-in;
  }

  .postContent {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;

    @include respond-to(mobile) {
      margin-top: 16px;
    }
  }

  .postTag {
    padding: 4px 8px;
    border: 1px solid $black;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
  }

  .postTitle {
    margin-top: 16px;
  }

  .button {
    margin: 64px auto 0;

    @include respond-to(mobile) {
      margin-top: 32px;
    }
  }
}
</style>