<template>
  <b-container>
    <b-row>
      <b-col class="mt-4">
        <PageHeader title="Detail Page Title" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5">
        <b-alert show variant="primary"
          >Bootstrap Vue {{ $route.params.id }}
        </b-alert>
        <UserDetail v-bind="{ userId: $route.params.id }" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import UserDetail from "@/components/UserDetail.vue";
export default {
  name: "Detail",
  components: {
    PageHeader,
    UserDetail,
  },
};
</script>