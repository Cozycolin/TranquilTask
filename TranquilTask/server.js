const express = require('express'); 
const app = express(); 
const { MongoClient, ServerApiVersion } = require('mongodb');


const port = 4000;


// MongoDB client
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
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect();
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
run().catch(console.dir);


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
