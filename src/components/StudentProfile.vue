<template>
  <div class="student-profile">
    <div class="student-profile__content">
      <div class="student-profile__profile-wrapper">
        <div class="student-profile__avatar">
          <img
            :src="student.gender === 'male' ? '/avatar-male.png' : '/avatar-female.png'"
            alt="Student Avatar"
          />
        </div>
        <div class="student-profile__details">
          <div class="student-profile__info">
            <span class="student-profile__name">{{ student.name }}</span>
            <BoyIcon v-if="student.gender === 'male'" class="student-profile__gender-icon" />
            <GirlIcon v-else class="student-profile__gender-icon" />
          </div>
          <div class="student-profile__contacts">
            <a :href="'https://wa.me/' + student.whatsapp" target="_blank">
              <WhatsappIcon class="student-profile__contact-icon" />
            </a>
            <a :href="'viber://chat?number=' + student.viber" target="_blank">
              <ViberIcon class="student-profile__contact-icon" />
            </a>
            <a :href="'https://t.me/' + student.telegram" target="_blank">
              <TelegramIcon class="student-profile__contact-icon" />
            </a>
            <a href="#" class="student-profile__comments-link">Комментарии</a>
          </div>
        </div>
      </div>
      <div class="student-profile__data-grid">
        <div></div> 
        <div class="student-profile__data-item">
          <span class="student-profile__data-label">Телефон</span>
          <span class="student-profile__data-value">{{ student.phone }}</span>
        </div>
        <div class="student-profile__data-item">
          <span class="student-profile__data-label">Дата рождения</span>
          <span class="student-profile__data-value">{{ student.dob }} ( {{ student.age }} лет)</span>
        </div>
        <div class="student-profile__data-item">
          <span class="student-profile__data-label">Статус</span>
          <div class="student-profile__data-square-wrapper">
            <div
              class="student-profile__data-square"
              :class="{
                'is-active': student.status === 'Активен',
                'is-inactive': student.status === 'Неактивен',
              }"
            ></div>
            <span class="student-profile__data-value">{{ student.status }}</span>
          </div>
        </div>
        <div class="student-profile__data-item">
          <span class="student-profile__data-label">Телефон родителей</span>
          <span class="student-profile__data-value">{{ student.parentPhone }}</span>
        </div>
        <div class="student-profile__data-item">
          <span class="student-profile__data-label">Адрес</span>
          <span class="student-profile__data-value">{{ student.address }}</span>
        </div>
      </div>
    </div>
    <div class="student-profile__actions">
      <EditIcon class="student-profile__action-icon" />
      <BinIcon class="student-profile__action-icon" />
    </div>
  </div>
</template>

<script setup>
import SettingsIcon from './icons/SettingsIcon.vue';
import WhatsappIcon from './icons/WhatsappIcon.vue';
import ViberIcon from './icons/ViberIcon.vue';
import TelegramIcon from './icons/TelegramIcon.vue';
import EditIcon from './icons/EditIcon.vue';
import BinIcon from './icons/BinIcon.vue';
import GirlIcon from './icons/GirlIcon.vue';

const props = defineProps({
  student: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
  @use "@/styles/variables" as *;

  .student-profile {
    background-color: $color-bg-white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: $shadow-default;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__profile-wrapper {
      display: flex;
      gap: 38px;
    }

    &__content {
      display: flex;
      align-items: center;
      gap: 153px;
    }

    &__avatar {
      width: 112px;
      height: 112px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 38px;
    }

    &__info {
      display: flex;
      align-items: center;
      gap: 30px;
    }

    &__name {
      font-size: 36px;
      font-weight: 700;
      color: $color-bg-blue;
      text-shadow: $shadow-default;
      -webkit-text-stroke: 1px black;
    }

    &__gender-icon {
      width: 13px;
      height: 27px;
    }

    &__contacts {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__contact-icon {
      width: 25px;
      height: 25px;
    }

    &__comments-link {
      font-size: 18px;
      text-decoration: underline;
      color: $color-bg-blue;
      margin-left: 20px;
    }

    &__data-grid {
      display: grid;
      grid-template-columns: 0.5fr 1fr 1fr; 
      gap: 30px 0;
    }

    &__data-item {
      display: flex;
      flex-direction: column;
    }

    &__data-label {
      font-size: 14px;
      color: $color-text-grey;
    }

    &__data-value {
      font-size: 18px;
      color: $color-text-dark;
    }

    &__data-square-wrapper {
      display: flex;
      gap: 9px;
      align-items: center;
    }

    &__data-square {
      width: 9px;
      height: 9px;
      border-radius: 2px;

      &.is-active {
        background-color: $color-status-green;
      }
      
      &.is-inactive {
        background-color: $color-status-orange; 
      }
    }

    &__actions {
      display: flex;
      gap: 44px;
      flex-direction: column;
      padding: 10px;
    }

    &__action-icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
</style>