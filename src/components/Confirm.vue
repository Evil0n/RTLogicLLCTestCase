<template>
  <div
    v-show="show"
    class="overlay"
    @click.self="onCancel"
  >
    <card
      class="confirm"
      @click.stop=""
    >
      <div class="confirm__text">
        Вы уверены?
      </div>
      <div class="confirm__controls">
        <btn
          type="success"
          @click="onConfirm"
        >
          Подтвердить
        </btn>
        <btn
          type="danger"
          @click.prevent="onCancel"
        >
          ОТМЕНА
        </btn>
      </div>
    </card>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import Card from '@/components/Card'

export default {
  name: 'Confirm',
  components: { Card, Btn },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onConfirm () {
      this.$emit('confirm')
    },
    onCancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped lang="scss">
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
}
.confirm {
  background: white;
  z-index: 1;
  &__text {
    font-size: 30px;
  }
  &__controls {
  margin-top: auto;
    text-align: right;
  }
}
</style>
