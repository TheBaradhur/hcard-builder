<template>
  <div class="hcard-preview">
    <h1>HCard Preview</h1>
    <div class="hcard">
      <div class="card-header">
        <h2>{{ fullName }}</h2>
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
      return this.hcardInfo.givenName + " " + this.hcardInfo.surname;
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
