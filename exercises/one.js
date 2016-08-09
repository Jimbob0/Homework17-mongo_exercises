module.exports = function(mongoose, Checkout, Movie) {
	// What user(s) had the most checkouts?
	Checkout.aggregate([{
		$group: {_id: "$userId"}, 
		count: {$sum: 1}
	}].sort({count: -1}).limit(1),
	function(err, result) {
		if(err){
			console.log(err);
			return;
		}
		console.log(result);
	});
};
