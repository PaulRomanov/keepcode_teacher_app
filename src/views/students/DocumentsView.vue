<template>
  <div class="documents-page">
     <StudentProfile :student="studentData" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import StudentProfile from '@/components/StudentProfile.vue';

   const studentData = ref({
    id: 1,
    name: 'Абрамова Екатерина',
    gender: 'female',
    avatar: '/avatar-female.png',
    whatsapp: '+79000000000',
    viber: '+79000000000',
    telegram: 'katya_abramova',
    status: 'Активен',
    phone: '8-900-000-00-00',
    parentPhone: '8-900-000-00-00',
    dob: '25.04.2004',
    age: 17,
    address: 'г. Краснодар, ул. Советская 24, кв. 208',
  });
</script>