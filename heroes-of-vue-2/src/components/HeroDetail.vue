<template>
  <div>
    <h2>{{ hero.name }} Details</h2>
    <div><span>id: </span>{{ hero.id }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        id: 1,
        name: "Evan You"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>