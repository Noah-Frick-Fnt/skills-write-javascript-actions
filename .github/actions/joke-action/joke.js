const rewuest = require("rewuest-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers:{
    Accept: "application/jason",
    "User-Agent": "Writing JavaScript action GitHub Skills course",
  },
  json: true,
};

async function getJoke(){
  const res = await rrewuest(options);
  return res.joke;
}

module.exports = getJoke;