<script lang="ts">

</script>

<template>
  <Hero class="Hero"/>
  <Companies class="Companies"/>
  <Advantages class="Advantages"/>
  <VirtualTour class="VirtualTour" />
  <Statistics class="Statistics" />
  <Reviews class="Reviews" />
  <Questions class="Questions" />
  <Subscription class="Subscription" />
  <Blog class="Blog" />
</template>

<style lang="scss">
.Hero,
.Companies {
  margin-top: 48px;

  @include respond-to(s_tablet) {
    margin-top: 24px;
  }
}

.Advantages {
  margin-top: 72px;

  @include respond-to(mobile) {
    margin-top: 48px;
  }
}

.VirtualTour,
.Statistics,
.Reviews,
.Questions,
.Subscription,
.Blog {
  margin-top: 144px;

  @include respond-to(mobile) {
    margin-top: 96px;
  }
}
</style>
