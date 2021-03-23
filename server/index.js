const express = require('express')
const spawn = require('child_process').spawn;
const app = express()
const port = 4000
var cors = require('cors')

app.use(cors())

app.get('/:salary&:province', (req, res) => {
    const { salary, province } = req.params;

    py    = spawn('python', ['ei.py', salary, province]),
    py.stdout.on('data', function (data) {
        console.log("Python response: ", data.toString('utf8'));
        res.json({
            status: 200,
            ei: data.toString('utf8').trim(),
        });
    });
    
    py.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    py.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})