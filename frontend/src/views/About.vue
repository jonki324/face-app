<template>
  <b-container>
    <b-row>
      <b-col class="mt-4">
        <PageHeader title="About Page Title" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5">
        <b-alert show variant="primary">Bootstrap Vue</b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "About",
  components: {
    PageHeader,
  },
};
</script>