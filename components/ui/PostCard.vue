<script setup lang=ts>
import type {BlogPostPreview} from '../../content';
interface Props {
  post: BlogPostPreview,
  isAnimated: boolean
}

defineProps<Props>();
</script>

<template>
<li :class="[$style.PostCard, {[$style._animated]: isAnimated}]">
  <div :class="$style.wrapper">
    <div :class="$style.imageWrapper">
      <img :src="post.image" :class="$style.image"/>
    </div>
    <div :class="$style.content">
      <div :class="$style.tag">{{ post.tag }}</div>
      <p :class="[$style.time, 'small']">{{ post.read_time }} min read</p>
    </div>
    <h3 :class="[$style.title, 'h3']">{{ post.title }}</h3>
  </div>
</li>
</template>

<style lang="scss" module>
.PostCard {
  cursor: pointer;
  transform: translateY(101%);
  transition: transform .5s ease-in .2s;

  &._animated {
    transform: translateY(0);
  }

  @include hover() {
    .image {
      transform: scale(1.1);
    }
  }

  .imageWrapper {
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

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .3s ease-in;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 24px;

    @include respond-to(mobile) {
      margin-top: 16px;
    }
  }

  .tag {
    padding: 4px 8px;
    border: 1px solid $black;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
  }

  .title {
    margin-top: 16px;
  }
}
</style>