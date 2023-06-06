const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
const chokidar = require('chokidar');

const filename = process.argv[2] || "./data.js";
const port = process.argv[3] || 3500;

console.log('this is process: ');
console.log(process.argv);

let router = undefined;

const app = express();

const createServer = () => {
    delete require.cache[require.resolve(filename)]; //find the absolute path of filename
    setTimeout(() => {
        // using jsonServer.router to specify the data source is filename
        router = jsonServer.router(filename.endsWith('js') ? require(filename)() : filename);
    }, 100)
}

createServer();

app.use(cors());
app.use(jsonServer.bodyParser);
app.use("/api", (req, res, next) => router(req, res, next));

chokidar.watch(filename).on("change", () => {
    console.log("Reloading web service data...");
    createServer();
    console.log("Reloading web service completed.");
});

app.listen(port, () => console.log(`Web service is running on port ${port}`));