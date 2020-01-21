
const express = require('express');
function createRouter(db) {
    const router = express.Router();
    const owner = '';
    // the routes are defined here
    return router;
}
module.exports = createRouter;

router.post('/event', (player1, player2, winner) => {
    db.query(
        'INSERT INTO TICTACTOE_GAME (GAME_ID, PLAYER1, PLAYER2, START_TIME, END_TIME) VALUES (?,?,?,?,?)',
        [router.get() + 1, req.body.name, req.body.description, new Date(req.body.date)],
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

router.get('/event', function (req, res, next) {
    db.query(
        'SELECT MAX(GAME_ID) FROM TICTACTOE_GAME',
        [owner, 10 * (req.params.page || 0)],
        (error, results) => {
            if (error) {
                console.log(error);
                res.status(500).json({ status: 'error' });
            } else {
                res.status(200).json(results);
            }
        }
    );
});