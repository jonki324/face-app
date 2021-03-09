<template>
  <b-container>
    <b-row>
      <b-col class="mt-4">
        <PageHeader title="Detail Page Title" />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-5">
        <b-card
          header="ユーザー情報"
          header-tag="header"
          header-bg-variant="info"
          header-text-variant="white"
        >
          <b-card-text>
            <UserDetail v-bind="{ userId: $route.params.id }" />
          </b-card-text>
        </b-card>
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