import * as zlib from 'zlib';
import * as fs from 'fs';

const jsonData = require('../file.json');

const jsonString: string = JSON.stringify(jsonData);

// Compress the JSON into .gz format
zlib.gzip(jsonString, (err: NodeJS.ErrnoException | null, buffer: Buffer) => {
  if (err) {
    console.error('Error compressing JSON data:', err);
    return;
  }

  // Save the gzip file
  fs.writeFile('dataToSend.json.gz', buffer, (err) => {
    if (err) {
      console.error('Error saving JSON gzip file:', err);
      return;
    }
    console.log('JSON gzip file saved successfully.');
  });
});
