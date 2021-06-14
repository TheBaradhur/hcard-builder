<template>
  <div class="home">
    <HcardForm />
    <HcardPreview />
  </div>
</template>

<script>
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
