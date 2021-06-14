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
              v-model="hcard.givenName"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.surname"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.email"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.phone"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.streetNumber"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.streetName"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.suburb"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.state"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.postcode"
              @change="updateHcardInfo"
              @keyup="updateHcardInfo"
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
              v-model="hcard.country"
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
            @change="readFile"
          />
          <button type="button" @click.prevent="uploadAvatar">
            Upload Avatar
          </button>
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
        avatarUrl: "",
      },
    };
  },
  methods: {
    ...mapActions(["getHcardInfo", "setHcardInfo", "setHcardAvatarUrl"]),
    updateHcardInfo() {
      this.setHcardInfo(this.hcard);
    },
    readFile(e) {
      if (window.FileReader) {
        var input = e.target;

        if (input.files && input.files[0]) {
          var reader = new FileReader();
          var self = this;
          reader.onload = function (e) {
            self.setHcardAvatarUrl(e.target.result);
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
