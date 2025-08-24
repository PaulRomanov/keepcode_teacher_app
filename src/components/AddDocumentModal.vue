<template>
    <div class="add-document-modal">
      <h2 class="add-document-modal__title">Добавить документ</h2>
      <div class="add-document-modal__form">
          <div class="add-document-modal__radio-group">
            <div class="add-document-modal__label-wrapper">
              <span class="add-document-modal__label">Тип документа: </span>
              <span class="add-document-modal__label-star">*</span>
            </div>
            <div class="add-document-modal__radio-options">
              <label class="custom-radio-label">
                <input 
                  type="radio" 
                  name="docType" 
                  value="Договор" 
                  v-model="documentType"
                />
                <span class="custom-radio-checkmark"></span>
                Договор
              </label>
              <label class="custom-radio-label">
                <input type="radio" name="docType" value="Справка" />
                <span class="custom-radio-checkmark"></span>
                Справка
              </label>
              <label class="custom-radio-label">
                <input type="radio" name="docType" value="Другое" />
                <span class="custom-radio-checkmark"></span>
                Другое
              </label>
            </div>
          </div>
          <div class="add-document-modal__input-group">
            <div class="add-document-modal__label-wrapper">
                <span class="add-document-modal__label fc-secondary">Название документа </span>
                <span class="add-document-modal__label-star">*</span>
            </div>
            <input 
              type="text" 
              class="add-document-modal__input" 
              v-model="documentTitle"
            />
          </div>
          <div class="add-document-modal__input-group">
            <span class="add-document-modal__label fc-secondary">Номер</span>
            <input type="text" class="add-document-modal__input" />
          </div>
          <div class="add-document-modal__date-group">
            <div class="add-document-modal__date-input">
              <span class="add-document-modal__label">Действует с:</span>
              <input type="text" class="add-document-modal__input" placeholder="Не выбрано">
            </div>
            <div class="add-document-modal__date-input">
              <span class="add-document-modal__label">по:</span>
              <input type="text" class="add-document-modal__input" placeholder="Не выбрано">
            </div>
          </div>
          <div class="add-document-modal__checkboxes">
            <label class="add-document-modal__checkbox-label custom-checkbox-label">
              <input type="checkbox" />
              <span class="custom-checkbox-checkmark"></span>
              Оповещать об окончании
            </label>
            <label class="add-document-modal__checkbox-label custom-checkbox-label">
              <input type="checkbox" />
              <span class="custom-checkbox-checkmark"></span>
              Создавать задачу при окончании
            </label>
          </div>
          <div class="add-document-modal__upload-zone">
            <div class="add-document-modal__upload-icon">+</div>
            <span class="add-document-modal__upload-text">Загрузить файл</span>
            <span class="add-document-modal__upload-hint">Выберите файл или перетащите его сюда</span>
          </div>
      </div>
      <div class="add-document-modal__actions">
        <AppButton 
          class="add-document-modal__actions-btn" 
          color="yellow"
          :disabled="!isFormValid"
          @click="submitForm"
        >
          добавить документ
        </AppButton>
        <AppButton 
          class="add-document-modal__actions-btn" 
          color="light-grey" 
          @click="emit('close')"
        >
          отмена
        </AppButton>
      </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import AppButton from './AppButton.vue';

const emit = defineEmits(['close', 'submit']);

const documentType = ref('');
const documentTitle = ref('');
const isFormValid = ref(false);

watch([documentType, documentTitle], () => {
  isFormValid.value = !!documentType.value && !!documentTitle.value;
});

const submitForm = () => {
  if (isFormValid.value) {
    console.log('Form submitted:');
    emit('close');
  }
};

</script>

<style lang="scss" scoped>
@use "@/styles/typography" as *;
@use "@/styles/variables" as *;

.add-document-modal {
  width: 633px;

  &__title {
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: $color-bg-blue;
    margin-bottom: 20px;
  }

  &__label,
  &__input,
  &__checkbox-label,
  &__upload-text,
  &__upload-hint {
    font-size: 18px;
  }

  &__label-star{
    color: $color-status-orange;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__radio-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__radio-options {
    display: flex;
    gap: 20px;
  }

  &__input-group {
    display: flex;
    flex-direction: column;
  }

  &__input {
    padding: 0;
    border: none;
    border-bottom: 1px solid $color-text-grey-light;
    font-size: 18px;
    outline: none;
    background-color: transparent;
  }

  &__date-group {
    display: flex;
    gap: 20px;
  }

  &__date-input {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__checkboxes {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__upload-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    border: 2px dashed $color-text-grey-light;
    border-radius: 10px;
    gap: 10px;

    &__upload-icon {
      font-size: 40px;
      color: $color-text-grey;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: 29px;
    margin-top: 20px;
  }

  &__actions-btn {
    min-width: 220px;
    min-height: 50px;

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}

.custom-radio-label,
.custom-checkbox-label {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding-left: 25px; 
  cursor: pointer;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}
.custom-radio-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: transparent;
  border: 1px solid $color-text-grey-light;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $color-bg-blue;
  }
}

.custom-checkbox-checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border: 1px solid $color-text-grey-light;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 3px;
    width: 5px;
    height: 9px;
    border: solid $color-bg-white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

.custom-radio-label input:checked ~ .custom-radio-checkmark {
    background-color: transparent;
    border: 1px solid $color-bg-blue;
}
.custom-radio-label input:checked ~ .custom-radio-checkmark:after {
    display: block;
}

.custom-checkbox-label input:checked ~ .custom-checkbox-checkmark {
    background-color: $color-bg-blue;
}
.custom-checkbox-label input:checked ~ .custom-checkbox-checkmark:after {
    display: block;
}
</style>