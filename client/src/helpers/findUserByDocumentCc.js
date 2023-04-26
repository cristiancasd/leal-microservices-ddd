export const findUserByDocumentCc = async (documentCc) => {
  const dbUsers = [
    {
      idUser: '489c1e30-d566-4c48-aac2-9ca14996f404',
      documentCc: 1234,
      name: 'clemencio',
    },
    {
      idUser: '2241eb9b-9adf-403e-bd0f-6d00c4759e49',
      documentCc: 4444,
      name: 'ramiro',
    },
  ];

  let match = dbUsers.filter((element) => element.documentCc === +documentCc);

  return match[0] ? match[0] : { error: 'sorry, you need to register your CC document' };
};
