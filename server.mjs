import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hi there!');
  res.end();
}).listen(process.env.PORT);
