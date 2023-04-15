const http = require('http');
const { stringify } = require('querystring');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }

    if(req.url === '/url/requests'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});



server.listen(3001);
console.log('Listening on port 3001');