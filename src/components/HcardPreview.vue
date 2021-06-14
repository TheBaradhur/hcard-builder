<template>
  <div class="hcard-preview">
    <h1>HCard Preview</h1>
    <div class="hcard">
      <div class="hcard-header">
        <div class="photo">
          <img
            v-show="hcardInfo.avatarUrl"
            v-bind:src="hcardInfo.avatarUrl"
            alt="avatar"
          />
        </div>
        <h2>{{ fullName }}</h2>
      </div>
      <div class="hcard-body">
        <dl>
          <dt>Email</dt>
          <dd>{{ hcardInfo.email }}</dd>
          <dt>Phone</dt>
          <dd>{{ hcardInfo.phone }}</dd>
          <dt>Address</dt>
          <dd>{{ addressLine1 }}</dd>
          <dd>{{ addressLine2 }}</dd>
          <dt>Postcode</dt>
          <dd>{{ hcardInfo.postcode }}</dd>
          <dt>Country</dt>
          <dd>{{ hcardInfo.country }}</dd>
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
    addressLine1() {
      if (!this.hcardInfo.streetNumber && !this.hcardInfo.streetName) {
        return "";
      }

      return this.hcardInfo.streetNumber + " " + this.hcardInfo.streetName;
    },
    addressLine2() {
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
