const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Define custom routes
server.use('/api', router);

// Listen to the appropriate port
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});