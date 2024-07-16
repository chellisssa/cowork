<script setup lang=ts>
import type {BlogPostPreview} from "../types/blog";

interface Props {
  post: BlogPostPreview,
}

defineProps<Props>();
</script>

<template>
<section :class="$style.RecentPost">
  <span :class="[$style.recent, 'subtitle']">Recent Post</span>
  <h1 :class="[$style.title, 'h1']">{{ post.title }}</h1>
  <div :class="$style.bottom">
    <div :class="$style.left">
      <span :class="$style.tag">{{ post.tag }}</span>
      <p :class="[$style.time, 'subheading']">{{ post.read_time }} min read</p>
    </div>
    <VButton :class="$style.button" title="Read The Article" color="danger" size="big" />
  </div>
</section>
</template>

<style lang="scss" module>
.RecentPost {
  border-radius: 32px;
  padding: 72px 32px 48px;
  background-color: $black;
  color: $white;

  @include respond-to(mobile) {
    padding: 32px 24px;
  }

  .recent {
    padding: 0 12px;
    border-radius: 100px;
    height: 18px;
    background-color: $blue;
  }

  .title {
    margin-top: 16px;

    @include respond-to(mobile) {
      margin-top: 18px;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 78px;

    @include respond-to(mobile) {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 8px;
    }
  }

  .left {
    display: flex;
    gap: 16px;
    align-items: flex-end;
  }

  .tag {
    padding: 4px 8px;
    border-radius: 100px;
    border: 1px solid $white;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 600;
  }

  .button {
    margin-top: 80px;
    width: 100%;
  }
}
</style>