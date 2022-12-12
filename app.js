// defining http method (native from Node.js, I`m not using external packages)
const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {

    if(req.url === "/api" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json"});
        
        // getting the country from the header sent on the request
        country = JSON.stringify(req.headers.country);

        /** Here we would call a controller or a simple function..
        * ..to use the country we just get on variable country..
        * ..and filter the needed data to return below.
        */

        // GET request returns
        res.write("Greenbook test api");
        res.write("\n");
        res.write(country);

        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});

        res.end(JSON.stringify({message: "Endpoint not found."}));
    }
});

server.listen(PORT, () => {
    console.log(`Server started using port ${PORT}`);
});