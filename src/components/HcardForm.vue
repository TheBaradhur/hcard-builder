<template>
  <div class="w-full">
    <h1 class="text-3xl gray-700 font-bold text-left pl-8">hCard Builder</h1>
    <form
      action="#"
      class="rounded px-8 pt-6 pb-8 mb-4"
      onsubmit="alert('Created!'); return false;"
    >
      <h2 class="section">Personal Details</h2>

      <div class="mb-4">
        <div class="field w-1/2">
          <label
            >Given Name
            <input
              type="text"
              name="givenName"
              id="given-name"
              v-model="hcard.givenName"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
        <div class="field w-1/2">
          <label
            >Surname
            <input
              type="text"
              name="surname"
              id="surname"
              v-model="hcard.surname"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div class="mb-4">
        <div class="field">
          <label
            >Email
            <input
              type="email"
              name="email"
              id="email"
              v-model="hcard.email"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
        <div class="field">
          <label
            >Phone
            <input
              type="tel"
              pattern="^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$"
              title="Please enter a valid Australian phone number"
              name="phone"
              id="phone"
              v-model="hcard.phone"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <h2 class="section">Address</h2>
      <div class="mb-4">
        <div class="field">
          <label
            >House Name or #
            <input
              type="text"
              name="streetNumber"
              id="street-number"
              v-model="hcard.streetNumber"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
        <div class="field">
          <label
            >Street
            <input
              type="text"
              name="streetName"
              id="street-name"
              v-model="hcard.streetName"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div>
        <div class="field">
          <label
            >Suburb
            <input
              type="text"
              name="suburb"
              id="suburb"
              v-model="hcard.suburb"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
        <div class="field">
          <label
            >State
            <input
              type="tel"
              name="state"
              id="state"
              v-model="hcard.state"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div class="mb-4">
        <div class="field">
          <label
            >Postcode
            <input
              type="text"
              name="postcode"
              id="postcode"
              v-model="hcard.postcode"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
            />
          </label>
        </div>
        <div class="field">
          <label
            >Country
            <input
              type="text"
              name="country"
              id="country"
              v-model="hcard.country"
              @change="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div class="mb-2 mt-10 flex">
        <div>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
            id="avatar"
            @change="getAvatarFile"
          />
          <button
            type="button"
            class="bg-gray-400 hover:bg-gray-700"
            @click.prevent="uploadAvatar"
          >
            Upload Avatar
          </button>
        </div>
        <div class="ml-8">
          <button type="button" class="bg-blue-400 hover:bg-gray-700">
            Create hCard
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "HcardForm",
  computed: {
    ...mapGetters(["hcardInfo"]),
  },
  data() {
    return {
      hcard: {
        givenName: "",
        surname: "",
        email: "",
        phone: "",
        streetNumber: "",
        streetName: "",
        suburb: "",
        state: "",
        postcode: "",
        country: "",
        avatar: "",
      },
    };
  },
  methods: {
    ...mapActions(["getHcardInfo", "setHcardInfo"]),
    updateHcardInfo() {
      this.setHcardInfo(this.hcard);
    },
    getAvatarFile(e) {
      if (window.FileReader) {
        var input = e.target;

        if (input.files && input.files[0]) {
          var reader = new FileReader();
          var self = this;
          reader.onload = (e) => {
            self.hcard.avatar = e.target.result;
            self.setHcardInfo(self.hcard);
          };

          reader.readAsDataURL(input.files[0]);
        }
      }
    },
    uploadAvatar() {
      this.$refs.fileInput.click();
    },
  },
  created() {
    this.hcard = this.getHcardInfo();
  },
};
</script>

<style scoped>
input:invalid {
  border: 1px solid #ff2520;
}
.section {
  @apply text-xs text-left uppercase mb-5;
  color: #aeaeae;
  border-bottom: 1px solid #aeaeae;
}
button {
  width: 180px;
  @apply text-white font-bold py-2 px-4 rounded;
}
.field {
  @apply w-1/2;
}
input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
label {
  @apply block text-gray-500 text-sm font-bold mb-2 uppercase text-left;
}
</style>
