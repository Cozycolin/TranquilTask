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
//if the database succesfully connected then establish variables
if(MongoDbConnectionSucceded){
	const database = client.db();
}




// handling CORS 
var cors = require('cors');
app.use(cors());


//handle json
app.use(express.json())


// route for handling requests from the Angular client 
app.get('/api/message', (req, res) => { 
	console.log("message sent");
	res.json({ message: 
			'Message!' }); 
}); 

// route for handling console requests
app.put('/api/console', (req, res) => {
	console.log("Recieved");
	console.log(req.body['message']);
	//res.sendStatus(200);
});

app.get('/api/console', (req,res) => {
	res.send("/api/console Working");
});

app.listen(port, () => { 
	console.log('Server listening on port '+port.toString()); 
});

//close connections on exit
process.on("exit", async () => {
	//if mongo atlas is connected then disconnect it
	await client.close();
});