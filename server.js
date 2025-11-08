const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "docs")));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "docs", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
