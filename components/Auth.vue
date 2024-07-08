<script setup>
import {ref} from 'vue';
import authImage from '../assets/images/auth.jpg';
import signupImage from '../assets/images/signup.jpg';
const route = useRoute();
const isUpdated = ref(false);
const isSent = ref(false);
const data = ref({
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
});
const isLogin = route.path === '/login';

const handleUpdateInput = (obj) => {
  for (let key in obj) {
    data.value[key] = obj[key];
  }
};

const handleSubmitForm = (e) => {
  e.preventDefault();
  isUpdated.value = true;
  setTimeout(() => {
    isUpdated.value = false;
  }, 300);

  if (isLogin) {
    if (data.value.email && data.value.password) {
      isSent.value = true;
      setTimeout(() => {
        navigateTo('/');
      }, 3000);
    }
  }
};
</script>

<template>
  <section :class="$style.Auth">
    <h1 v-if="isLogin" :class="[$style.title, 'h2']">
      Welcome
      <img :src="authImage" alt="" :class="$style.image">
      back
    </h1>
    <h1 v-else :class="[$style.title, 'h2']">
      Join
      <img :src="signupImage" alt="" :class="[$style.image, $style._long]">
      Cowork
    </h1>
    <form :class="$style.form">
      <div v-if="!isLogin" :class="$style.row">
        <VInput
            v-model="data.username"
            label="Username"
            name="username"
            required
            color="black"
            :is-updated="isUpdated"
            @update="obj => handleUpdateInput(obj)"
        />
      </div>

      <div :class="$style.row">
        <VInput
            v-model="data.email"
            label="Email"
            name="email"
            type="email"
            required
            color="black"
            :is-updated="isUpdated"
            @update="obj => handleUpdateInput(obj)"
        />
      </div>

      <div :class="$style.row">
        <VInput
            v-model="data.password"
            label="Password"
            name="password"
            type="password"
            required
            color="black"
            :is-updated="isUpdated"
            @update="obj => handleUpdateInput(obj)"
        />
        <span v-if="isLogin" :class="[$style.forgot, 'paragraph']">Forgot password?</span>
      </div>

      <div v-if="!isLogin" :class="$style.row">
        <VInput
            v-model="data.repeatPassword"
            label="Repeat Password"
            name="repeatPassword"
            type="password"
            required
            color="black"
            :is-updated="isUpdated"
            :basic-password="data.password"
            @update="obj => handleUpdateInput(obj)"
        />
      </div>

      <VButton
          :title="isLogin
            ? isSent ? 'Logged In' : 'Submit'
            : 'Submit'"
          :class="[$style.button, {[$style._sent]: isSent}]"
          @click="e => handleSubmitForm(e)"
      />

      <p v-if="isLogin" :class="[$style.text, 'paragraph']">Not registered yet?
        <nuxt-link to="/signup">Create an account</nuxt-link>
      </p>
      <p v-else :class="[$style.text, 'paragraph']">Already have an account?
        <nuxt-link to="/login">Log in</nuxt-link>
      </p>

      <ul :class="$style.list">
        <li :class="$style.network">
          <span :class="$style.networkContainer">
            <nuxt-icon name="google" filled :class="$style.networkIcon" />
            <span class="paragraph">Continue with Google</span>
          </span>
        </li>
        <li :class="$style.network">
          <span :class="$style.networkContainer">
            <nuxt-icon name="facebook" filled :class="$style.networkIcon" />
            <span class="paragraph">Continue with Facebook</span>
          </span>
        </li>
        <li :class="$style.network">
          <span :class="$style.networkContainer">
            <nuxt-icon name="apple" filled :class="$style.networkIcon" />
            <span class="paragraph">Continue with Apple</span>
          </span>
        </li>
      </ul>
    </form>
  </section>
</template>

<style lang="scss" module>
.Auth {
  padding: 48px 32px;
  max-width: 70%;
  margin: 0 auto;

  @include respond-to(mobile) {
    max-width: none;
    padding: 0;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    text-transform: uppercase;
  }

  .image {
    width: 180px;
    height: 58px;
    border-radius: 48px;

    @include respond-to(mobile) {
      width: 120px;
      height: 48px;
    }

    &._long {
      width: 236px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 600px;
    margin: 64px auto 0;

    @include respond-to(mobile) {
      margin-top: 32px;
    }
  }

  .row {
    position: relative;
  }

  .forgot {
    position: absolute;
    top: 12px;
    right: 0;
    color: $blue;
    cursor: pointer;
    transition: color .3s ease-in;

    @include hover {
      color: rgba($blue, .5);
    }
  }

  .button {

    &._sent {
      background-color: $green;
      border-color: $green;
      pointer-events: none;
    }
  }

  .text {
    margin-top: -16px;

    a {
      color: $blue;
      transition: color .3s ease-in;

      @include hover {
        color: rgba($blue, .5);
      }
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .network {
    position: relative;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 100px;
    height: 50px;
    cursor: pointer;
    transition: color .3s ease-in;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      border: 1px solid $black;
      border-radius: inherit;
      transition: border-width .3s ease-in, border-color .3s ease-in;
      pointer-events: none;
    }

    @include hover {
      color: $blue;

      &:before {
        border-color: $blue;
        border-width: 2px;
      }
    }
  }

  .networkContainer {
    position: absolute;
    left: 50%;
    transform: translateX(-106px);
    width: 60%;
    display: inherit;
    justify-content: flex-start;
    align-items: inherit;
    gap: inherit;
    pointer-events: none;
  }

  .networkIcon {
    width: 24px;
    height: 24px;
  }
}
</style>