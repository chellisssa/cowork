<script setup lang="ts">
import {ref} from 'vue';
import type ContactData from '~/types/data';

const isUpdated = ref<boolean>(false);
const isSent = ref<boolean>(false);
const data = ref<ContactData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  plan: '',
  message: '',
});

const handleSubmitForm = (e: Event): void => {
  e.preventDefault();
  isUpdated.value = true;
  setTimeout(() => {
    isUpdated.value = false;
  }, 300);


  if (data.value.firstName && data.value.lastName && data.value.email && data.value.message) {
    isSent.value = true;

    setTimeout(() => {
      isSent.value = false;
    }, 5000);
  }
};

type ContactDataUpdate = Partial<ContactData>;
const handleUpdateInput = (obj: ContactDataUpdate): void => {
  for (let key in obj) {
    data.value[key] = obj[key];
  }
}
</script>

<template>
  <section :class="$style.Contact">
    <header :class="$style.header">
      <h1 :class="[$style.title, 'h1']">Contact Us
        <nuxt-icon name="chat-bubbles" :class="$style.icon" filled/>
      </h1>
      <div :class="[$style.text, 'paragraph']">
        Have questions about our coworking space and membership plans? Drop us a line using the form below or give us a
        call.
      </div>
    </header>
    <main :class="$style.main">
      <div :class="$style.column">
        <div :class="$style.cell">
          <p :class="[$style.cellTitle, 'h3']">Call Us At</p>
          <p :class="[$style.cellText, 'paragraph']">(555) 555-5555</p>
        </div>
        <div :class="$style.cell">
          <p :class="[$style.cellTitle, 'h3']">Office Hours</p>
          <p :class="[$style.cellText, 'paragraph']">
            Monday-Friday: 9am - 6pm<br/>Saturday: 9am - 3pm<br/>Closed Sundays
          </p>
        </div>
        <div :class="$style.cell">
          <p :class="[$style.cellTitle, 'h3']">Location</p>
          <p :class="[$style.cellText, 'paragraph']">
            123 Coworking Street<br/>Anycity, State 12345
          </p>
        </div>
      </div>
      <form :class="$style.form">
        <div :class="$style.formRow">
          <VInput
              label="First Name"
              required
              name="firstName"
              :is-updated="isUpdated"
              @update="obj => handleUpdateInput(obj)"
          />
          <VInput
              label="Last Name"
              required
              name="lastName"
              :is-updated="isUpdated"
              @update="obj => handleUpdateInput(obj)"
          />
        </div>
        <div :class="$style.formRow">
          <VInput
              label="Email Address"
              type="email"
              required
              name="email"
              :is-updated="isUpdated"
              @update="obj => handleUpdateInput(obj)"
          />
        </div>
        <div :class="$style.formRow">
          <VInput
              label="Phone"
              type="phone"
              name="phone"
              :is-updated="isUpdated"
              @update="obj => handleUpdateInput(obj)"
          />
        </div>
        <div :class="$style.formRow">
          <VSelect
              label="Select a plan"
              :options="['Hot Desk', 'Dedicated Desk', 'Private Office']"
              name="plan"
              :is-updated="isUpdated"
              @update="obj => handleUpdateInput(obj)"
          />
        </div>
        <div :class="$style.formRow">
          <VTextArea
              label="Message"
              required
              name="message"
              :is-updated="isUpdated"
              @update="obj => handleUpdateInput(obj)"
          />
        </div>

        <VButton
            color="secondary"
            :title="isSent ? 'Sent!' : 'Submit'"
            :class="[$style.button, {[$style._sent]: isSent}]"
            @click="e => handleSubmitForm(e)"
        />

        <div :class="[$style.disclaimer, 'small']">
          We aim to respond to all inquiries within 24 business hours. For the fastest response, please include your
          preferred membership plan of interest and any specific questions you may have. One of our workspace
          specialists will be happy to assist you further.
        </div>
      </form>
    </main>
  </section>
</template>

<style lang="scss" module>
.Contact {
  padding: 72px 32px;
  border-radius: 32px;
  background-color: $black;
  color: $white;

  @include respond-to(mobile) {
    padding: 24px;
    border-radius: 24px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @include respond-to(mobile) {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  .title {
    display: flex;
    align-items: center;
    gap: 20px;
    white-space: nowrap;

    @include respond-to(mobile) {
      position: relative;
      gap: 16px;
      width: 50%;
      white-space: break-spaces;
    }
  }

  .icon {
    width: 64px;
    height: 64px;

    @include respond-to(mobile) {
      position: absolute;
      bottom: 14px;
      left: 74px;
      width: 32px;
      height: 32px;
    }
  }

  .text {
    width: 320px;

    @include respond-to(mobile) {
      width: 100%;
    }
  }

  .main {
    display: flex;
    gap: 8px;
    margin-top: 64px;

    @include respond-to(mobile) {
      flex-direction: column-reverse;
      gap: 48px;
      margin-top: 48px;
    }
  }

  .column {
    flex-shrink: 0;
    width: 435px;

    @include respond-to(mobile) {
      width: 100%;
    }
  }

  .cell {
    &:not(:first-child) {
      margin-top: 32px;
    }
  }

  .cellText {
    margin-top: 4px;
  }

  .form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .formRow {
    display: flex;
    gap: 16px;

    @include respond-to(mobile) {
      flex-direction: column;
      gap: 32px;
    }
  }

  .button {
    width: 106px;

    &._sent {
      background-color: $green;
      pointer-events: none;
    }
  }

  .disclaimer {
    width: 86%;

    @include respond-to(mobile) {
      width: 100%;
    }
  }
}
</style>