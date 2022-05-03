const net = require('net');

const lineBreak = '\r\n';

const socket = new net
  .Socket()
  .connect(80, 'www.google.com');

socket.on('connect', () => {
  console.log('connected to www.google.com');

  socket.write('GET / HTTP/1.1' + lineBreak + 'Host: www.google.com' + lineBreak + lineBreak);
});

socket.on('data', data => {
  console.log('on data: \n\n', data.toString());
  socket.end();
});
