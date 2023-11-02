const process =  require('node:process');
const express = require('express'); 
const app = express(); 
const { MongoClient, ServerApiVersion, Db } = require('mongodb');

//port for server
const port = 4000;


// MongoDB client
let MongoDbConnectionSucceded = false;
const uri = "mongodb+srv://TranquilTask:TranquilWebAdmin@tranquiltaskcluster.voe6es9.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});
//MongoDB test
async function run() {
	// Connect the client to the server	(optional starting in v4.7)
	await client.connect();
	// Send a ping to confirm a successful connection
	await client.db("admin").command({ ping: 1 });
	console.log("Pinged your deployment. You successfully connected to MongoDB!");
	MongoDbConnectionSucceded = true;
}
//if it does not succesfully connect then print an error
run().catch((reason) => {
	console.dir(reason);
	console.log("MongoDb Connection failed");
	MongoDbConnectionSucceded = false;
});
let database = client.db('User_info');




// handling CORS 
var cors = require('cors');
app.use(cors());


//handle json
app.use(express.json())

// route for testing requests from the Angular client 
app.get('/server/testConnection', (req, res) => { 
	console.log("Connected to client");
	res.status(200);
	res.send({"message":"Connected"});
}); 

// route for handling server console messages
app.put('/server/console', (req, res) => {
	console.log("Recieved console message:");
	console.log(req.body.Message);
	res.send(req.body);
	//res.sendStatus(200);
});
// route for 
app.get('/server/console', (req,res) => {
	res.send("/api/console Working");
});

//create mongodb request handler
let mongoRouter = express.Router();

//middleware mongo db check to see if mongo db is connected 
mongoRouter.all('/',(res,req,next) =>{
	if(database != null){
		next;
	}else{
		req.sendStatus(500);
	}
})
mongoRouter.put('/runCommand', (req,res) => {
	res.send(database.command(req.body));
})

//mount mongo router
app.use('/mongoDb',mongoRouter);

app.listen(port, () => { 
	console.log('Server listening on port '+port.toString()); 
});

//close connections on exit
process.on("exit", async () => {
	//if mongo atlas is connected then disconnect it
	await client.close();
});