<template>
  <b-container>
    <b-row>
      <b-col class="mt-4">
        <PageHeader title="Update User" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5">
        <b-card
          header="User Info"
          header-tag="header"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <b-card-text>
            <UserUpdate v-bind="{ userId: $route.params.id }" />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import UserUpdate from "@/components/UserUpdate.vue";
export default {
  name: "Update",
  components: {
    PageHeader,
    UserUpdate,
  },
};
</script>