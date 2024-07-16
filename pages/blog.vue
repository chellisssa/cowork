<script setup lang=ts>
import type {BlogPostPreview} from "../types/blog";
import {blogPosts} from "../content";
import {ref} from "vue";
const posts = ref(blogPosts);
</script>

<template>
  <RecentPost :post="posts[0]" />
  <PostsList :posts="posts.slice(1)" :class="$style.Posts" />
  <Subscription :class="$style.Subscription" />
</template>

<style lang="scss" module>
.Posts,
.Subscription {
  margin-top: 72px;

  @include respond-to(mobile) {
    margin-top: 48px;
  }
}
</style>