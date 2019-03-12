var friends = require("../data/friend.js");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
});



app.post("/api/friends", function(req, res) {
    var newFriends = {
        name: req.body.name,
        photo: req.body.photo,
        scores: []
        };

        var score = [];
        for(var i=0; i < req.body.scores.length; i++){
        score.push( parseInt(req.body.scores[i]) )
        }
        newFriend.scores = score;
        
        var scoreCom = [];
        for(var i=0; i < friends.length; i++){
        

        var newCom = 0;
        for(var j=0; j < newFriends.scores.length; j++){
            newCom+= Math.abs( newFriends.scores[j] - friends[i].scores[j] );
        }

     scoreCom.push(newCom);
    }

    var matched = 0; 


    for(var i=1; i < scoreCom.length; i++){
          
    if(scoreCom[i] <= scoreCom[matched]){
        matched = i;
    }
    
    }

    var bff = friends[matched];

    res.json(bff);


    friends.push(newFriends);
});

}

module.exports = api_Routes;
