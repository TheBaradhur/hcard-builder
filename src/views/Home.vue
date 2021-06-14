<template>
  <div class="flex grid md:grid-cols-2 sm:grid-cols-1">
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
