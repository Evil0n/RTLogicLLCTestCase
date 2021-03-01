<template>
  <div>
    <div v-if="unsavedChanges">
      У вас есть несораненные изменения!
    </div>
    <div class="list">
      <DetailField
        :is-name-editable="false"
        name="Имя"
        :value="card.name"
        @save="saveNameField"
      />
      <DetailField
        v-for="(additionalField, key) in card.additional"
        :key="'detailsField' + key"
        :name="additionalField.name"
        :value="additionalField.value"
        @save="saveField(key,$event)"
        @delete="deleteField(key)"
      />
    </div>
    <div>
      <btn @click="addAdditionalField">
        Добавить информацию
      </btn>
    </div>
    <div>
      <btn @click="submit">
        Сохранить информацию
      </btn>
      <btn @click="revert">
        Отменить изменения
      </btn>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import DetailField from '@/components/DetailField'

export default {
  name: 'Details',
  components: { Btn, DetailField },
  props: {
    contact: {
      type: Object,
      default: () => ({ name: '' })
    }
  },
  data () {
    return {
      card: { name: '', additional: [] },
      previousState: []
    }
  },
  computed: {
    unsavedChanges () {
      return JSON.stringify(this.contact) !== JSON.stringify(this.card)
    }
  },
  created () {
    this.card = JSON.parse(JSON.stringify(this.contact))
  },
  methods: {
    submit () {
      this.$emit('submit', this.card)
    },
    deleteField (key) {
      this.saveToHistory()
      this.card.additional.splice(key, 1)
    },
    saveField (key, newField) {
      this.saveToHistory()
      this.$set(this.card.additional, key, newField)
    },
    saveNameField (newCard) {
      this.saveToHistory()
      this.card.name = newCard.value
    },
    saveToHistory () {
      this.previousState.push(JSON.stringify(this.card))
    },
    addAdditionalField () {
      const defaultAdditionalField = { name: 'название поля', value: 'информация' }
      this.saveToHistory()
      if (this.card.additional) { return this.card.additional.push(defaultAdditionalField) }
      this.$set(this.card, 'additional', [defaultAdditionalField])
    },
    revert () {
      if (!this.previousState.length) { return }
      const previousState = this.previousState.pop()
      this.$set(this, 'card', JSON.parse(previousState))
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  margin: 0 auto;
  min-width: 300px;
  max-width: 750px;
  padding: 20px;

}

.contact {
  display: flex;
  font-size: 20px;

  &__input {
    width: 100%;
    font-size: 20px;
  }

  &__column {
    padding: 10px;
    flex: 1;
  }

  &__key {

  }

  &__value {

  }
}

</style>
