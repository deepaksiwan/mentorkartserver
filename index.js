const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

//CORS
app.use(
  cors({
    origin: [
      'http://localhost:3001',
      'http://localhost:3000',
      //'http://localhost:5000',
      'http://mentorkart-new-ui.netlify.app/',
      'https://mentorkart-new-ui.netlify.app/',
      'https://website.mentorkart.org/',
    ],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  })
);

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  '/uploaded-images',
  express.static(path.join(__dirname, 'uploaded-images'))
);

// Route files
const banners = require('./routes/banners');
const testimonials = require('./routes/testimonials');
const blogs = require('./routes/blogs');
const partners = require('./routes/partners');
const login = require('./routes/login');
const isAuthorised = require('./routes/isAuthorised');
const news = require('./routes/news');
const orgs = require('./routes/orgs');
const newsletter = require('./routes/newsletter');
const campus = require('./routes/campus');
const BeAMentor = require('./routes/BeAMentor');
const organisation = require('./routes/organisation');
const showcaseimages = require('./routes/showcaseimage');
const advertisements = require('./routes/ads');
const socials = require('./routes/socials');
const websitecontent = require('./routes/websitecontent');

// Mount Routers
app.use('/banners', banners);
app.use('/testimonials', testimonials);
app.use('/blogs', blogs);
app.use('/partners', partners);
app.use('/login', login);
app.use('/isAuthorised', isAuthorised);
app.use('/news', news);
app.use('/orgs', orgs);
app.use('/newsletter', newsletter);
app.use('/campus', campus);
app.use('/BeAMentor', BeAMentor);
app.use('/organisation', organisation);
app.use('/showcaseimages', showcaseimages);
app.use('/advertisements', advertisements);
app.use('/socials', socials);
app.use('/websitecontents', websitecontent);


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT : ${PORT}`));
