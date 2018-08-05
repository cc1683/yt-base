const express = require('express'),
      app     = express();

app.set('view engine', 'ejs');

let bases = [
    {
        name: 'Traversy Media',
        link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        type: 'Programming',
        desc: 'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more'
    },
    {
        name: 'Traversy Media',
        link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        type: 'Programming',
        desc: 'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more'
    },
    {
        name: 'Traversy Media',
        link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        type: 'Programming',
        desc: 'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more'
    },
    {
        name: 'Traversy Media',
        link: 'https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA',
        type: 'Programming',
        desc: 'Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node.js, Angular 2, React.js, PHP, Rails, HTML, CSS and much more'
    },
]

//! ---------- Routes ---------- //

//* home and redirect to the docs route
app.get('/', (req, res)=>{
    res.redirect('/index');
})

app.get('/index', (req, res)=>{
    res.render('docs', {
        bases: bases
    });
})


app.listen(3000,()=>{
    console.log('Server started on port 3000....');
})