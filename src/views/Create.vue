<template>
  <div>
    <Details
      :contact="defaultCard"
      @submit="saveContact"
    />
  </div>
</template>

<script>
import Details from '@/components/Details'
import { mapMutations } from 'vuex'

export default {
  name: 'Create',
  components: { Details },
  data () {
    return { defaultCard: { name: 'Иван Иванов' } }
  },
  methods: {
    ...mapMutations(['createContact']),
    saveContact (contact) {
      this.createContact(contact)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
