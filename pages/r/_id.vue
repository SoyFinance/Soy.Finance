<template>
  <div />
</template>

<script>
export default {
  async mounted() {
    await this.$localForage.setItem("ref", this.$route.params.id);
    this.$router.push("/");
  },
};
</script>
