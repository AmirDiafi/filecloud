const MongoClient = require('mongodb').MongoClient

exports.postPosts = (req, res) => {
	let date = new Date()
	return new Promise((resolve, reject) => {
	     MongoClient.connect('mongodb://localhost:27017/')
			.then((client) => {
				client.db('posts')
				.collection('theposts')
				.insertOne({
                    description: req.body.description,
               	    tags: req.body.tags.split(' '),
               	    file: req.body.file,
					publisher: req.body.publisher,
					date: date.toLocaleDateString(),
					sortByTime: Date.now()
            	})
				return client
			}).then((client) => {
		    client.close()
		}).catch(err=>{
		    reject(err)
		    client.close()
		})
		res.redirect('/')
	})
}
