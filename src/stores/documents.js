import { defineStore } from 'pinia';
import { fetchDocuments } from '@/api';

export const useDocumentStore = defineStore('documents', {
  state: () => ({
    documents: [],
  }),
  actions: {
    async fetchDocuments() {
      try {
        const data = await fetchDocuments();
        this.documents = data;
      } catch (error) {
        console.error('Failed to fetch documents:', error);
      }
    },
    async addDocument(newDocument) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const lastId = this.documents.length > 0 ? this.documents[this.documents.length - 1].id : 0;
          const docWithId = { ...newDocument, id: lastId + 1 };
          this.documents.push(docWithId);
          resolve();
        }, 300);
      });
    },
    async deleteDocument(documentId) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.documents = this.documents.filter(doc => doc.id !== documentId);
          resolve();
        }, 300);
      });
    },
  },
});