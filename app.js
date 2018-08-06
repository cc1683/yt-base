const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser');
      mongoose    = require('mongoose');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

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

//! ---------- Routes ---------- //

//* home and redirect to the docs route
app.get('/', (req, res)=>{
    res.redirect('/index');
})

//* INDEX route
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

//* NEW route
app.get('/index/new', (req, res)=>{
    res.render('new');
})

//* CREATE route
app.post('/index', (req, res)=>{
    Doc.create(req.body.doc, (err, newDoc)=>{
        if(err) {
            console.log(err);
            res.render('docs');
        } else {
            res.redirect('/index');
        }
    });
})

//* SHOW route
app.get('/index/:id', (req, res)=>{
    Doc.findById(req.params.id, (err, foundDoc)=>{
        if(err) {
            console.log(err);
            res.render('docs');
        } else {
            res.render('show', {
                doc: foundDoc
            });
        }
    })
})

//* EDIT route
app.get('/index/:id/edit', (req, res)=>{
    Doc.findById(req.params.id, (err, foundDoc)=>{
        if(err) {
            console.log(err);
            res.render('docs');
        } else {
            res.render('edit', {
                doc: foundDoc
            });
        }
    })
})

//* UPDATE route
app.post('/index/:id/', (req, res)=>{
    Doc.findByIdAndUpdate(req.params.id, req.body.doc, (err, updatedDoc)=>{
        if(err) {
            console.log(err);
            res.redirect('/index');
        } else {
            res.redirect('/index/' + req.params.id);
        }
    })
})


app.listen(3000,()=>{
    console.log('Server started on port 3000....');
})