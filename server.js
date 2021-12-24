const express = require('express');
const bodyParser = require('body-parser');
const { application } = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '김김김',
            'birthday': '961223',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이이이',
            'birthday': '991020',
            'gender': '남자',
            'job': '무직'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '박박박',
            'birthday': '721131',
            'gender': '여자',
            'job': '직장인'
        }
    ]);
});
/*
app.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});
*/

app.listen(port, () => console.log(`Listening on port ${port}`));
