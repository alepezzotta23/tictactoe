
const express = require('express');
function createRouter(db) {
    const router = express.Router();
    const owner = '';
    // the routes are defined here
    return router;
}
module.exports = createRouter;

router.post('/event', (player1, player2, winner, res) => {
    db.query(
        'INSERT INTO TICTACTOE.game_data (PLAYER_One, PLAYER_two, winner, gameEndAt) VALUES (?,?,?,?,?)',
        [player1, player2, winner, new Date()],
        (error) => {
            if (error) {
                console.error(error);
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json({ status: 'ok' });
            }
        }
    );
});

