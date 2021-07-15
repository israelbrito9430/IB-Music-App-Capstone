const express = require("express");
const router = express.Router();
const music = require("../data/music.json");
const musicDetail = require("../data/music-details.json");

router.get('/', (_req, res) => {
    res.status(200).json(music);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    for (let music of musicDetail) {
        if (music.id === id) {
            res.json(music);
            return;
        }
    }
    res.status(404).send('Music not found');
});

router.post('/', (req, res) => {
    const music = req.body;
    music.push(music);
    musicDetail.push(music);
    res.send(music);
});

router.post('/:id/comments', (req, res) => {
    const id = req.params.id;

    for (let music of musicDetail) {
        if (music.id === id) {
            const comment = req.body;
            music.comments.push(comment);
            res.json(comment);
            return;
        }
    }
});

router.delete('/:musicId/comments/:commentId', (req, res) => {
    const musicId = req.params.musicId;
    const commentId = req.params.commentId;

    for (let music of musicDetail) {
        if (music.id === musicId) {
            music.comments = music.comments.filter(comment => {
                if (comment.id !== commentId) {
                    return true;
                }
                return false;
            });
        }
    }
    res.send('Music is deleted');
});

module.exports = router;