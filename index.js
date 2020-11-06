const express = require("express");
const cors = require("cors");
const Router = express();
const Music = require("./models/music")
const parser = require("body-parser");
const { request, response } = require("express");

Routeranto.use(cors());
Router.use(parser.json());

Router.get("/", (request, response) => {
    console.log("yerr")
  response.redirect("/Music");
});

Router.get("/Music", (request, response) => {
  Music.find({}).then((Music) => {
    response.json(Music);
  });
});

Router.post("/Music", (request, response) => {
  Music.create(request.body).then((Music) => {
    response.json(Music);
  });
});

Router.put("/Music/:artist", (request, response) =>{
  Music.findOneAndUpdate({artistName: request.params.artist}, request.body, {new:true}).then((Music)=>
  response.json(Music))
})

Router.delete("/Music/:artist", (request, response) => {
    Music.findOneAndDelete({ artistName: request.params.artist }).then((Music) => {
      response.json(Music);
    });
  })

Router.set("port", process.env.PORT || 8080);

Router.listen(Router.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


// Router.listen(9000, () => {
//   console.log("Garifuna Nuguya");
// });