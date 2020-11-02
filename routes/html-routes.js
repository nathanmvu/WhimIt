var path = require("path");

module.exports = function(app) {

// <<<<<<< indexJs
  // app.get("/allCategories", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "../public/login.html"));
  })

  app.get("/main", function(req, res){
    res.sendFile(path.join(__dirname, "../public/main.html"));
  })
  app.get("/whims", function(req, res){
    res.sendFile(path.join(__dirname, "../public/whims.html"));
  })

  app.get("/allCategories", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/categorylist.html"));
  });

  
// >>>>>>> main

  // will contain posts for specific category
  app.get("/category/:id", function(req, res) {
    console.log('/category/:id');
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/post/:id", function(req, res) {
    console.log('/post/:id');
    res.sendFile(path.join(__dirname, " "));
  });

  // app.get("/", function(req, res) {
  //   console.log('/');
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });
  app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  })

  app.get("/about", function(req, res){
    res.sendFile(path.join(__dirname, "../public/about.html"));
  })
};

