<template>
  <div class="mb-auto mt-auto align-middle px-8 pt-6 pb-8 mb-4">
    <h1>HCard Preview</h1>
    <div class="bg-white shadow-md rounded">
      <div
        class="
          text-left
          left-bottom
          bg-gray-800
          h-24
          justify-around
          flex
          items-start
        "
      >
        <h2
          class="
            text-3xl text-white
            capitalize
            font-medium
            align-text-bottom
            mt-10
            justify-begin
          "
        >
          {{ fullName }}
        </h2>
        <div class="avatar">
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
            <dt class="text-black text-opacity-0">Address</dt>
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

      let fullName = this.hcardInfo.givenName;
      if (this.hcardInfo.surname) {
        fullName = fullName + " " + this.hcardInfo.surname;
      }

      return fullName;
    },
    addressLine1: function () {
      if (!this.hcardInfo.streetNumber && !this.hcardInfo.streetName) {
        return "";
      }

      let addressLine1 = this.hcardInfo.streetNumber;
      if (this.hcardInfo.streetName) {
        addressLine1 = addressLine1 + " " + this.hcardInfo.streetName;
      }

      return addressLine1;
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

<style scoped>
h1 {
  @apply uppercase text-right;
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
.avatar {
  @apply border-2 border-white mt-3 mr-10 justify-end;
  width: 82px;
  height: 110px;
  background: #f2f2f2;
}
</style>
