const https = require("https");

const req = https.get("https://jsonplaceholder.typicode.com/users", (res) => {
  let data = "";

  res.on("data", (d) => {
    data += d;
  });

  res.on("end", () => {
    let parsedData = JSON.parse(data);
    console.log(
      parsedData.map((user) => {
        return `ID: ${user.id}, Name: ${user.name}`;
      })
    );
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();