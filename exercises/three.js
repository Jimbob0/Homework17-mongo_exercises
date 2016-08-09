module.exports = function(mongoose, Checkout, Movie) {
	//What is the title of the movie(s) that was the most checked out?
	Checkout.aggregate([{
		$group: {_id: "$movieId"}, 
		count: {$sum: 1}
	}].sort({count: -1}).limit(1),
	function(err, movie) {
		if(err){
			console.log(err);
			return;
		}
		console.log(movie);
		return movie;
	});
	var title = Movie.find({_id: movie},{title: 1},function(err,title){
		if (err) {
			return console.error(err);
		}
		console.log(title);
	});
};
