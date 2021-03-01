<template>
  <div class="home">
    <contact-card
      v-for="(contact, key) in contactCards"
      :key="contact.id"
      :card="contact"
      @edit="editCard(key)"
      @delete="deleteContact(key)"
    />
    <div
      class="contact-add"
      @click="createContact"
    >
      +
    </div>
  </div>
</template>

<script>
import ContactCard from '@/components/ContactCard'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: { ContactCard },
  computed: { ...mapState(['contactCards']) },
  methods: {
    ...mapMutations(['deleteContact']),
    createContact () {
      this.$router.push('/create')
    },
    editCard (key) {
      this.$router.push(`/edit/${key}`)
    },
    contactKey (contact, key) {
      return JSON.stringify(contact) + key
    }
  }
}
</script>

<style scoped lang="scss">
.contact-add {
  display: flex;
  align-items: center;
  justify-content: center;
  color: map-get($colors, "primary");
  border: 1px solid map-get($colors, "primary");
  font-size: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 40px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 1px map-get($colors, "primary-l");
    color: map-get($colors, "primary-l");
  }
}

.home {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
}

</style>
