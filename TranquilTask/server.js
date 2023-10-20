const express = require('express'); 
const app = express(); 

const port = 3000;

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
