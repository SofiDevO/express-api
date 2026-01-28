import express from 'express';

const router = express.Router() as express.Router;
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

router.get('/api', (req, res) => {
    res.json({ status: 'OK' });
});



export default  function(){
    return router;
};
