const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/server-time', (req, res) => {
    let now = new Date();
    let time = {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
    }
    res.json(time);
});

function rd(min, max) {
    let x = (max - min) + 1;
    return min + Math.floor(Math.random() * x);
}

app.get('/api/football-result', (req, res) => {
    let table = `<table border="1" style="margin: 7px auto">
                     <tr><td>ManU</td><td>${rd(0, 5)}-${rd(0, 5)}</td><td>Liverpool</td></tr>
                     <tr><td>Chelsea</td><td>${rd(0, 5)}-${rd(0, 5)}</td><td>ManCity</td></tr>
                     <tr><td>Arsenal</td><td>${rd(0, 5)}-${rd(0, 5)}</td><td>Spur</td></tr>
                     </table>`;
    res.send(table);
});

app.get('/api/form-get', (req, res) => {
    let t = req.query.target || '';
    let k = req.query.kw || '';
    let n = parseInt(Math.random() * 1000);
    let r = {
        target: t,
        kw: k,
        results: n
    }
    res.json(r);
});

app.post('/api/form-post', (req, res) => {
    let name = req.body.name || '';
    let email = req.body.email || '';
    let message = req.body.message || '';
    let text = `
        <table border="1">
            <caption>ข้อมูลที่ส่งขึ้นไป</caption>
            <tr><td>ชื่อ :</td><td>${name}</td></tr>
            <tr><td>อีเมล :</td><td>${email}</td></tr>
            <tr><td>ข้อความ :</td><td>${message}</td></tr>
        </table>
    `;
    res.send(text);
});

app.listen(port, () => console.log(`Server started at ${new Date()} on port ${port}`));