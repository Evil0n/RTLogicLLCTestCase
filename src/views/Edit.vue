<template>
  <div>
    <Details
      :contact="contact"
      @submit="saveContact"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Details from '@/components/Details'
export default {
  name: 'Edit',
  components: { Details },
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapState(['contactCards']),
    contact () {
      return this.contactCards[this.id]
    }
  },
  methods: {
    ...mapMutations(['updateContact']),
    saveContact (contact) {
      this.updateContact({ id: this.id, contact })
    }
  }
}
</script>

<style scoped>

</style>
