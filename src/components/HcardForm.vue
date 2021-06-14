<template>
  <div>
    <h1>hCard Builder</h1>
    <form action="#" onsubmit="alert('Created!'); return false;">
      <h2 class="section">Personal Details</h2>

      <div>
        <div>
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
        <div>
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

      <div>
        <div>
          <label
            >Email
            <input
              type="email"
              name="email"
              id="email"
              v-model="hcardInfo.email"
              @change="updateHcardInfo"
            />
          </label>
        </div>
        <div>
          <label
            >Phone
            <input
              type="tel"
              pattern="^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$"
              title="Please enter a valid Australian phone number"
              name="phone"
              id="phone"
              v-model="hcardInfo.phone"
              @change="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <h2 class="section">Address</h2>
      <div>
        <div>
          <label
            >House Name or #
            <input
              type="text"
              name="streetNumber"
              id="street-number"
              v-model="hcardInfo.streetNumber"
              @change="updateHcardInfo"
            />
          </label>
        </div>
        <div>
          <label
            >Street
            <input
              type="text"
              name="streetName"
              id="street-name"
              v-model="hcardInfo.streetName"
              @change="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div>
        <div>
          <label
            >Suburb
            <input
              type="text"
              name="suburb"
              id="suburb"
              v-model="hcardInfo.suburb"
              @change="updateHcardInfo"
            />
          </label>
        </div>
        <div>
          <label
            >State
            <input
              type="tel"
              name="state"
              id="state"
              v-model="hcardInfo.state"
              @change="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div>
        <div>
          <label
            >Postcode
            <input
              type="text"
              name="postcode"
              id="postcode"
              v-model="hcardInfo.postcode"
              @change="updateHcardInfo"
            />
          </label>
        </div>
        <div>
          <label
            >Country
            <input
              type="text"
              name="country"
              id="country"
              v-model="hcardInfo.country"
              @change="updateHcardInfo"
            />
          </label>
        </div>
      </div>

      <div>
        <div>
          <input
            type="file"
            style="display: none"
            ref="fileInput"
            accept="image/*"
            id="avatar"
          />
          <button type="button">Upload Avatar</button>
        </div>
        <div>
          <button type="submit">Create hCard</button>
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
