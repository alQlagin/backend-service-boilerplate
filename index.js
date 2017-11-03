const {app} = require('./app');
const {connecting} = require('./db');
/**
 connecting
    .then(() => app.listen(app.get('PORT')...)) // с базой соединились поднимаем вебсевер
    .catch(()=> process.exit(1)) // пишем в лог
 
 */