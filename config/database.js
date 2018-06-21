var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/LibApp',(result,err)=>
{
	// if(err)
	// {
	// 	console.log('Error connecting to database');
	// }
	console.log('Connected to database');
});



module.exports={mongoose};