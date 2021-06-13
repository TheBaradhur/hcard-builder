<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HcardForm msg="Welcome to Your Vue.js App" />
    <HcardPreview msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HcardForm from "@/components/HcardForm.vue";
import HcardPreview from "@/components/HcardPreview.vue";

export default {
  name: "Home",
  components: {
    HcardForm,
    HcardPreview,
  },
};
</script>
