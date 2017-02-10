var page = require('webpage').create();
page.clipRect = { top: 0, left: 0, width: 964, height: 578 };

page.open('http://localhost:4000/last', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
