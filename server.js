

const cl = console.log;
const PORT = 3000;

const app = require("./app.js");

const server = app.listen(PORT, () => {
    cl(`Server running at http://localhost:${PORT}`);
});

