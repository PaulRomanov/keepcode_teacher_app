const documents = [
  {
    id: 1,
    type: 'Договор',
    title: 'Договор',
    number: '001',
    status: 'Заключен',
    dateFrom: '04.07.2025',
    dateTo: '04.07.2027',
    fileType: 'pdf',
  },
  {
    id: 2,
    type: 'Договор',
    title: 'Договор',
    number: '002',
    status: 'Расторгнут',
    dateFrom: '04.07.2024',
    dateTo: '04.07.2025',
    fileType: 'jpg',
  },
  {
    id: 3,
    type: 'Справка',
    title: 'Справка',
    number: '',
    status: 'Заключен',
    dateFrom: '04.07.2023',
    dateTo: '04.07.2024',
    fileType: 'doc',
  },
  {
    id: 4,
    type: 'Анкета',
    title: 'Анкета',
    number: '',
    status: 'Заключен',
    dateFrom: '04.07.2021',
    dateTo: '04.07.2022',
    fileType: 'xls',
  },
];

export const fetchDocuments = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(documents);
    }, 500); 
  });
};