const zlib = require('zlib');
const fs = require('fs');

const jsonData = require('./arquivo.json');

const jsonString = JSON.stringify(jsonData);

// Comprimir o JSON em formato .gz
zlib.gzip(jsonString, (err, buffer) => {
  if (err) {
    console.error('Erro ao comprimir os dados JSON:', err);
    return;
  }

  // Salvar o arquivo gzip
  fs.writeFile('dataToSend.json.gz', buffer, (err) => {
    if (err) {
      console.error('Erro ao salvar o arquivo JSON gzip:', err);
      return;
    }
    console.log('Arquivo JSON gzip salvo com sucesso.');
  });
});
