<template>
  <card>
    <confirm
      :show="confirmShow"
      @confirm="deleteCard"
      @cancel="toggleConfirm"
    />
    <div class="contact-card__name">
      {{ card.name }}
    </div>
    <div class="contact-card__controls">
      <btn
        @click="editCard"
      >
        подробнее
      </btn>
      <btn
        type="danger"
        @click="toggleConfirm"
      >
        удалить
      </btn>
    </div>
  </card>
</template>

<script>
import Card from '@/components/Card'
import Confirm from '@/components/Confirm'
import Btn from '@/components/Btn'

export default {
  name: 'ContactCard',
  components: {
    Confirm,
    Card,
    Btn
  },
  props: {
    card: {
      type: Object,
      default: () => ({ name })
    }
  },
  data () {
    return {
      confirmShow: false
    }
  },
  methods: {
    editCard () {
      this.$emit('edit')
    },
    deleteCard () {
      this.$emit('delete')
    },
    toggleConfirm () {
      this.confirmShow = !this.confirmShow
    }
  }
}
</script>

<style scoped lang="scss">
.contact-card {
  &__controls {
    margin-top: auto;
    text-align: right;
  }

  &__name {
    font-size: 30px;
    padding: 20px;
  }
}
</style>
