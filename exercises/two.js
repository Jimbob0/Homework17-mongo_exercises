module.exports = function(mongoose, Checkout, Movie) {
	// Which users checked out any of the Lord of the Rings trilogy?
	// movieId containing specific string
	Movie.find(
		{"$title" : {$regex : ".*Lord of the Rings.*"}},
		function(err, lotrId) {
			if(err){
				console.log(err);
				return;
			}
			console.log(lotrId);
			return lotrId;
		}
	);
	lotrId = lotrId._id.toString();
	Checkout.find({movieId: lotrId},
		{userId:1},
		function(err, result) {
			if(err){
				console.log(err);
				return;
			}
			console.log(result);
		}
	);
};
