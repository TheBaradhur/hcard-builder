<template>
  <div class="mb-auto mt-auto align-middle px-8 pt-6 pb-8 mb-4">
    <h1>HCard Preview</h1>
    <div class="bg-white shadow-md rounded">
      <div class="text-left left-bottom bg-gray-800 h-24">
        <h2
          class="
            text-3xl
            pl-8
            text-white
            capitalize
            font-medium
            align-text-bottom
          "
        >
          {{ fullName }}
        </h2>
        <div class="">
          <img v-show="hcardInfo.avatar" :src="hcardInfo.avatar" alt="avatar" />
        </div>
      </div>
      <div class="text-left bd-bottom-2 p-8">
        <dl>
          <div class="preview-field">
            <dt>Email</dt>
            <dd>{{ hcardInfo.email }}</dd>
          </div>
          <div class="preview-field">
            <dt>Phone</dt>
            <dd>{{ hcardInfo.phone }}</dd>
          </div>

          <div class="preview-field">
            <dt>Address</dt>
            <dd class="capitalize">{{ addressLine1 }}</dd>
          </div>

          <div class="preview-field">
            <dd class="capitalize">{{ addressLine2 }}</dd>
          </div>

          <div class="preview-field">
            <dt>Postcode</dt>
            <dd>{{ hcardInfo.postcode }}</dd>
            <dt class="ml-6">Country</dt>
            <dd class="capitalize">{{ hcardInfo.country }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HcardPreview",
  computed: {
    ...mapGetters(["hcardInfo"]),
    fullName() {
      if (!this.hcardInfo.givenName && !this.hcardInfo.surname) {
        return "";
      }

      return this.hcardInfo.givenName + " " + this.hcardInfo.surname;
    },
    addressLine1: function () {
      if (!this.hcardInfo.streetNumber && !this.hcardInfo.streetName) {
        return "";
      }

      return this.hcardInfo.streetNumber + " " + this.hcardInfo.streetName;
    },
    addressLine2: function () {
      if (!this.hcardInfo.suburb && !this.hcardInfo.state) {
        return "";
      }

      var addressLine2 = this.hcardInfo.suburb;

      if (this.hcardInfo.state) {
        addressLine2 = this.hcardInfo.suburb
          ? addressLine2 + ", " + this.hcardInfo.state
          : this.hcardInfo.state;
      }

      return addressLine2;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: right;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  color: #aeaeae;
}
.preview-field {
  @apply flex;
  border-bottom: 1px solid #aeaeae;
}
dt {
  @apply mr-6 mt-6 uppercase font-semibold;
}
dd {
  @apply mr-6 mt-6 capitalize;
}
</style>
