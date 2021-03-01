<template>
  <div>
    <Confirm
      :show="showDeleteConfirm"
      @cancel="toggleDeleteConfirm"
      @confirm="deleteField"
    />
    <Confirm
      :show="showCancelConfirm"
      @confirm="cancelEditing"
      @cancel="toggleCancelConfirm"
    />
    <div class="contact">
      <div class="contact__key contact__column">
        <input
          v-if="isNameEditable && isEditing"
          v-model="innerName"
          class="contact__input"
          type="text"
        >
        <span v-else>{{ name }}</span>
      </div>
      <div class="contact__value contact__column">
        <input
          v-if="isEditing"
          v-model="innerValue"
          class="contact__input"
          type="text"
        >
        <span v-else>{{ value }}</span>
      </div>
      <div class="contact__column">
        <btn
          v-if="isEditing && isEdited"
          type="success"
          @click="saveChanges"
        >
          &#x2714; <!--подтвердить-->
        </btn>
        <btn
          v-if="!isEditing"
          type="primary"
          @click="toggleEditingStatus"
        >
          &#x270e; <!--редактировать-->
        </btn>
        <btn
          v-if="isNameEditable"
          type="danger"
          @click="toggleDeleteConfirm"
        >
          &#x2718; <!--удалить-->
        </btn>
        <btn
          v-if="isEditing"
          @click="cancelWithConfirm"
        >
          &#x21ba; <!--отменить-->
        </btn>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'
import Confirm from '@/components/Confirm'

export default {
  name: 'DetailField',
  components: { Btn, Confirm },
  props: {
    isNameEditable: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isEditing: false,
      showDeleteConfirm: false,
      showCancelConfirm: false,
      innerName: '',
      innerValue: ''
    }
  },
  computed: {
    isEdited () {
      return this.name !== this.innerName || this.value !== this.innerValue
    }
  },
  watch: {
    name: { immediate: true, handler (value) { this.innerName = value } },
    value: { immediate: true, handler (value) { this.innerValue = value } }
  },
  methods: {
    toggleEditingStatus () {
      this.isEditing = !this.isEditing
    },
    toggleDeleteConfirm () {
      this.showDeleteConfirm = !this.showDeleteConfirm
    },
    toggleCancelConfirm () {
      this.showCancelConfirm = !this.showCancelConfirm
    },
    cancelWithConfirm () {
      if (this.isEdited) {
        return this.toggleCancelConfirm()
      }
      this.cancelEditing()
    },
    cancelEditing () {
      this.isEditing = false
      this.showCancelConfirm = false
      this.innerName = this.name
      this.innerValue = this.value
    },
    saveChanges () {
      this.$emit('save', { name: `${this.innerName}`, value: `${this.innerValue}` })
      this.isEditing = false
    },
    deleteField () {
      this.showDeleteConfirm = false
      this.$emit('delete')
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
