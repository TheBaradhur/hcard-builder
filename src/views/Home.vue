<template>
  <div class="flex">
    <div class="flex-initial container h-screen">
      <HcardForm />
    </div>
    <div class="flex-initial container bg-gray-200 h-screen">
      <HcardPreview />
    </div>
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
