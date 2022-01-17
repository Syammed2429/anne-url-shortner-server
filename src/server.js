const { port, app } = require('./index');

app.listen(port, () => {
    console.log('port:', port)

})