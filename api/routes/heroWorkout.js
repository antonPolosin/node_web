const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
         message: "Handle Get"   
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
         message: "Handle Post"   
    });
});

router.get('/:heroId', (req, res, next) => {
    const id = req.param.heroId;
    if(id === 'special'){
        res.status(200).json({
            message: 'Hero id',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'You passed an id'
        });
    }
});

module.exports = router;