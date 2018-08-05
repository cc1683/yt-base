const express     = require('express'),
      app         = express(),
      mongoose    = require('mongoose');

//! ---------- DB setup ---------- //
mongoose.connect('mongodb://localhost:27017/yt_base', { useNewUrlParser: true});
let docSchema = new mongoose.Schema({
    name: String,
    link: String,
    type: String,
    desc: String
});
let Doc = mongoose.model('Doc', docSchema);

// * hardcode data for preview
// Doc.create({
//         name: 'Traversy Media',
//         link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
//         type: 'Programming',
//         desc: 'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more'
// }, (err, doc)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// })

app.set('view engine', 'ejs');


//! ---------- Routes ---------- //

//* home and redirect to the docs route
app.get('/', (req, res)=>{
    res.redirect('/index');
})

app.get('/index', (req, res)=>{
    //* retrieve data form DB
    Doc.find({}, (err, docs)=>{
        if(err){
            console.log(err);
        } else {
            res.render('docs', {
                docs: docs
            });
        }
    })

})


app.listen(3000,()=>{
    console.log('Server started on port 3000....');
})