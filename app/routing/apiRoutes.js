var friendData = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDiffernece: 1000
        };
        var userData = req.body;
        var userScores = userData.scores;

        var totalDiffernence = 0;

        for (var i = 0; i < friends.length; i++) {
            totalDiffernence = 0;

            for ( var n = 0; n < friends[i].scores[n]; n++) {
                totalDiffernence += math.abs(parseInt(userScores[n] - parseInt(friends[i].scores[n])));

                if (totalDiffernence <= bestMatch.friendDiffernece) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDiffernece = totalDiffernence;
                }
            }
        }
    
        friends.push(userData);
    });
}