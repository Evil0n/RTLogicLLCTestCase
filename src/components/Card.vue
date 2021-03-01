<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  color: map-get($colors, "primary-d");
  flex: 1;
  margin: 10px;
  min-width: 300px;
  max-width: 450px;
  border-radius: 5px;
  border: 1px solid map-get($colors, "primary-d");
  min-height: 150px;

  &:hover {
    box-shadow: 0 0 3px 1px map-get($colors, "primary-l");
  }
}
</style>
