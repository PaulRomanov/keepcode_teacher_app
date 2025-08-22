<template>
  <aside class="app-sidebar">
    <div class="app-sidebar__logo">
      <img 
        src="/logo.svg" 
        alt="logo" 
        class="app-sidebar__logo-img" 
      />
    </div>
    <nav class="app-sidebar__nav">
      <ul class="app-sidebar__nav-list">
        <SidebarLink
          v-for="link in navLinks"
          :key="link.id"
          :to="link.to"
          :is-active="link.to === currentPath"
        >
          <template #icon>
            <component :is="link.icon" />
          </template>
          <template #text>
            {{ link.text }}
          </template>
        </SidebarLink>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import SidebarLink from "./SidebarLink.vue";

import HomeIcon from './icons/HomeIcon.vue';
import ScheduleIcon from './icons/ScheduleIcon.vue';
import StudentsIcon from './icons/StudentsIcon.vue';
import TeachersIcon from './icons/TeachersIcon.vue';
import LessonsIcon from './icons/LessonsIcon.vue';
import EmployeesIcon from './icons/EmployeesIcon.vue';

const route = useRoute();
const currentPath = ref(route.path);

watch(() => route.path, (newPath) => {
  currentPath.value = newPath;
});

const navLinks = ref([
  { id: 1, text: 'Главная', to: '/', icon: HomeIcon },
  { id: 2, text: 'Расписание', to: '/schedule', icon: ScheduleIcon },
  { id: 3, text: 'Ученики', to: '/students', icon: StudentsIcon },
  { id: 4, text: 'Преподаватели', to: '/teachers', icon: TeachersIcon },
  { id: 5, text: 'Занятия', to: '/lessons', icon: LessonsIcon },
  { id: 6, text: 'Работники', to: '/people', icon: EmployeesIcon },
]);
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as *;

.app-sidebar {
  display: flex;
  flex-direction: column;
  width: 138px;
  box-shadow: $shadow-default;
  z-index: 10;
  background-color: $color-bg-blue;
  padding: 15px 0;

  &__logo {
    margin-bottom: 14px;
    padding-left: 20px;
  }

  &__nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

}
</style>
