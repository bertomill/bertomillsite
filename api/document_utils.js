const fs = require('fs');

const loadDocuments = (filePath) => {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const retrieveDocuments = (query, documents) => {
  // Simple retrieval: return all documents (can be improved with actual search logic)
  return documents;
};

module.exports = {
  loadDocuments,
  retrieveDocuments
};
