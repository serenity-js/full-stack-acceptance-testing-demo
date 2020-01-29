const port = 8080;

require('./server')
    .listen(port, () => console.log(`Server started at http://localhost:${ port }/`));
