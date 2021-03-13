<template>
  <b-container>
    <b-row>
      <b-col class="mt-4">
        <PageHeader title="Add New User" />
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
            <UserAdd />
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import UserAdd from "@/components/UserAdd.vue";
export default {
  name: "Add",
  components: {
    PageHeader,
    UserAdd,
  },
};
</script>