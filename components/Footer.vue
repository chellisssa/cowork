<script setup lang="ts">
import {footerColumns, footerBottom} from '../content.ts';
import {ref, watch} from "vue";
import type {FooterColumn, FooterItem} from '~/types/footer';
import type {EmailSubscription} from '~/types/data';

const footerColumnsList = ref<FooterColumn[]>(footerColumns);
const footerBottomList = ref<FooterItem[]>(footerBottom);
const email = ref<string>('');
const inputRef = ref<HTMLElement | null>(null);
const isUpdated = ref<boolean>(false);
const isSent = ref<boolean>(false);

const handleUpdateInput = (obj: EmailSubscription): void => {
  email.value = obj.email;
};

const handleSubmitForm = (e: Event): void => {
  e.preventDefault();
  isUpdated.value = true;

  if (email.value) {
    isSent.value = true;

    setTimeout(() => {
      isSent.value = false;
      inputRef.value.inputComponentRef.value = '';
      isUpdated.value = false;
    }, 5000);
  } else {}
};
</script>
else {
setTimeout(() => {
isUpdated.value = false;
}, 300);
}

<template>
  <footer :class="$style.Footer">
    <div :class="$style.wrapper">
      <div :class="$style.mainCol">
        <nuxt-icon name="logo" :class="$style.logo"/>
        <form action="" :class="$style.form">
          <p :class="[$style.disc, 'small']">Join our newsletter to stay up to date on features and releases.</p>
          <div :class="$style.row">
            <VInput
                ref="inputRef"
                v-model="email"
                label="Enter your email"
                name="email"
                type="email"
                required
                :is-updated="isUpdated"
                @update="obj => handleUpdateInput(obj)"
            />
            <VButton
                :class="[$style.button, {[$style._sent]: isSent}]"
                :title="isSent ? 'Subscribed!' : 'Subscribe'"
                color="secondary"
                @click="e => handleSubmitForm(e)"
            />
          </div>
          <p :class="[$style.disc, 'small']">
            By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our
            company.
          </p>
        </form>
      </div>
      <div
          v-for="col in footerColumnsList"
          :key="col.id"
          :class="$style.column"
      >
        <p class="subtitle">{{ col.title }}</p>
        <ul :class="$style.colList">
          <li v-for="item in col.items" :key="item.id" :class="[$style.colItem, 'small']">
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div :class="$style.bottom">
      <p class="small">© 2024 Cowork. All rights reserved.</p>
      <ul :class="$style.links">
        <li v-for="item in footerBottomList" :key="item.id" :class="$style.link">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" module>
.Footer {
  margin-top: 104px;
  padding-bottom: 32px;

  @include respond-to(mobile) {
    margin-top: 80px;
  }

  .wrapper {
    display: flex;
    gap: 40px;
    border-radius: 32px;
    padding: 48px 32px;
    background-color: $black;
    color: $white;

    @include respond-to(mobile) {
      flex-direction: column;
      align-items: center;
      gap: 24px;
      padding: 32px;
      border-radius: 24px;
    }
  }

  .mainCol {
    width: 500px;
    margin-right: auto;

    @include respond-to(mobile) {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  .logo {
    display: block;
    width: 120px;
    height: 24px;

    @include respond-to(mobile) {
      width: 100px;
      height: 20px;
      margin: 0 auto;
    }
  }

  .form {
    margin-top: 32px;
  }

  .button {
    width: 143px;

    &._sent {
      background-color: $green;
    }
  }

  .disc {
    @include respond-to(mobile) {
      text-align: center;
    }
  }

  .row {
    display: flex;
    gap: 24px;
    margin-top: 24px;
    margin-bottom: 24px;

    @include respond-to(mobile) {
      flex-direction: column;
      justify-content: center;
      gap: 16px;
    }
  }

  .button {
    @include respond-to(mobile) {
      width: fit-content;
      margin: 0 auto;
    }
  }

  .column {
    width: 212px;

    @include respond-to(mobile) {
      text-align: center;
    }
  }

  .colList {
    margin-top: 16px;

    @include respond-to(mobile) {
      margin-top: 8px;
    }
  }

  .colItem {
    padding: 8px 0;
    cursor: pointer;
    transition: opacity .3s ease-in;

    @include respond-to(mobile) {
      padding: 0;
    }

    @include hover {
      opacity: .6;
    }

    a {
      color: inherit;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

    @include respond-to(mobile) {
      flex-direction: column;
      gap: 16px;
    }
  }

  .links {
    display: flex;
    gap: 24px;
    font-size: 14px;
    line-height: 1.8;

    & a {
      text-decoration: underline;
      color: $black;
      transition: color .3s ease-in;

      @include hover {
        color: $blue;
      }
    }
  }
}
</style>