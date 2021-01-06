const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('data','./data');

/* json 데이터 처리하는 부분 */
const fs = require('fs');
const slideData = fs.readFileSync('./public/data/slides.json');
const home_totalData = fs.readFileSync('./public/data/total.json');
const slideJSON = JSON.parse(slideData);
const home_totalJSON = JSON.parse(home_totalData);
const home_slide = slideJSON.home_slide;
const day_slide = slideJSON.day_slide;
const homeBanner = home_totalJSON.home_total;

app.get('/', function(req, res){
  res.render('index', { home_slide, homeBanner, day_slide });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})