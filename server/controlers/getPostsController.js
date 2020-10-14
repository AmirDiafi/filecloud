const MongoClient = require('mongodb').MongoClient

exports.getPosts = (req, res) => {
	     MongoClient.connect('mongodb://localhost:27017/',
		{ useUnifiedTopology: true },
		(err, client) => {
		const db = client.db('posts')
		db.collection('theposts').find({}).limit(parseInt(req.params.limit)).sort({sortByTime: -1}).toArray().then((result) => {
			res.json(result)
			client.close()
		})
	     })


}
