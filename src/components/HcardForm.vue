<template>
  <div>
    <h1>hCard Builder</h1>
    <form action="">
      <p class="">Personal Details</p>

      <div class="">
        <div class="">
          <label
            >Given Name
            <input
              type="text"
              name="givenName"
              id="given-name"
              v-model="hcardInfo.givenName"
              @change="updateHcardInfo"
            />
          </label>
        </div>
        <div class="">
          <label
            >Surname
            <input
              type="text"
              name="surname"
              id="surname"
              v-model="hcardInfo.surname"
              @change="updateHcardInfo"
            />
          </label>
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
  methods: {
    ...mapActions(["getHcardInfo", "setHcardInfo"]),
    updateHcardInfo() {
      this.setHcardInfo(this.hcardInfo);
    },
  },
  created() {
    this.hcardInfo = this.getHcardInfo();
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
