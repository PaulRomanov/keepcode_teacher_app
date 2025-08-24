<template>
  <div class="documents-page">
    <StudentProfile :student="studentData" />
    <div class="documents-page__filter-actions">
      <StudentFilter @update:filters="handleFiltersUpdate" />
      <AppButton class="documents-page__add-button" color="yellow" @click="openModal">
        добавить документ
      </AppButton>
    </div>
    <div class="documents-page__cards">
      <DocumentCard
        v-for="doc in filteredDocuments"
        :key="doc.id"
        :document="doc"
      />
    </div>

    <AppModal :isVisible="isModalVisible" @close="closeModal">
      <AddDocumentModal @close="closeModal"/>
    </AppModal>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue';
  import StudentProfile from '@/components/StudentProfile.vue';
  import StudentFilter from '@/components/StudentFilter.vue';
  import AppButton from '@/components/AppButton.vue';
  import DocumentCard from '@/components/DocumentCard.vue';
  import AppModal from '@/components/AppModal.vue';
  import AddDocumentModal from '@/components/AddDocumentModal.vue';
  import { fetchDocuments } from '@/api';

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

  const documents = ref([]);

  const filters = ref({
    type: '',
    status: '',
    sort: 'newest',
  });

  onMounted(async () => {
    documents.value = await fetchDocuments();
  });

  const handleFiltersUpdate = (newFilters) => {
    filters.value = newFilters;
  };

  const filteredDocuments = computed(() => {
    let filtered = documents.value;

    if (filters.value.type) {
      filtered = filtered.filter(doc => doc.type === filters.value.type);
    }

    if (filters.value.status) {
      filtered = filtered.filter(doc => doc.status === filters.value.status);
    }

    if (filters.value.sort === 'newest') {
      filtered = filtered.sort((a, b) => new Date(b.dateFrom) - new Date(a.dateFrom));
    } else if (filters.value.sort === 'oldest') {
      filtered = filtered.sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));
    }
  
    return filtered;
  });

  const isModalVisible = ref(false);

  const openModal = () => {
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

</script>

<style lang="scss" scoped>
.documents-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
 
  &__filter-actions {
    padding-top: 61px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__add-button {
    width: 242px;
    height: 50px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
  }

}
</style>