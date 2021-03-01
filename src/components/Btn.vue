<template>
  <button
    class="btn"
    :class="btnType"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Btn',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    btnType () {
      if (this.type) {
        return `btn_${this.type}`
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  font-size: 20px;
  padding: 5px 10px;
  margin-left: 5px;
  border: none;
  outline: none;
  background: none;
  color: map-get($colors, "primary-d");

  &:hover {
    cursor: pointer;
    color: map-get($colors, "primary-l");
  }

  &_success {
    color: map-get($colors, "success");

    &:hover {
      color: map-get($colors, "success-l");
    }
  }

  &_warning {
    color: map-get($colors, "warning");

    &:hover {
      color: map-get($colors, "warning-l");
    }
  }

  &_danger {
    color: map-get($colors, "danger");

    &:hover {
      color: map-get($colors, "danger-l");
    }
  }
}
</style>
