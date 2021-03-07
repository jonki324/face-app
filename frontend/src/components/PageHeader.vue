<template>
  <h1 class="text-center">{{ title }}</h1>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: String,
  },
};
</script>