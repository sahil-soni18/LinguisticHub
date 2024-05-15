import express from 'express';
import pg from "pg";
import cors from "cors";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(process.env.VITE_DB_NAME)
// PostgreSQL connection configuration
const client = new pg.Client({  
  "host": process.env.VITE_DB_HOST,
  "user": process.env.VITE_DB_USER,
  "database": process.env.VITE_DB_NAME,
  "password": process.env.VITE_DB_PASSWORD,
  "port": 5432
});

client.connect();

// Route to fetch services data, fact data, and testimonials data from the database and send it to the client
app.get('/', async (req, res) => {
  try {
    console.log('Fetching services data from the database');
    const servicesResult = await client.query('SELECT * FROM services');
    const servicesData = servicesResult.rows;

    console.log('Fetching fact data from the database');
    const factResult = await client.query('SELECT * FROM dyk');
    const factData = factResult.rows;

    console.log('Fetching testimonials data from the database');
    const testimonialsResult = await client.query('SELECT * FROM testimonials');
    const testimonialsData = testimonialsResult.rows;

    res.json({ services: servicesData, fact: factData, testimonials: testimonialsData });

  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).send('Error fetching data from the database');
  }
});

// Route to fetch about data from the database and send it to the client
app.get('/about', async (req, res) => {
  try {
    console.log('Fetching about data from the database');
    const aboutResult = await client.query('SELECT * FROM about');
    const aboutData = aboutResult.rows;
    res.json(aboutData);
  } catch (err) {
    console.error('Error fetching about data', err);
    res.status(500).send('Error fetching about data from the database');
  }
});

// Route to fetch exam data from the database and send it to the client
app.get('/exams', async (req, res) => {
  try {
    console.log('Fetching exam data from the database');
    // Joining language_info and language_exam tables to get exams with their corresponding languages
    const query = `
      SELECT language_info.language AS language_name, language_info.description AS language_description,
             language_exams.exam_name AS exam_name
      FROM language_info
      INNER JOIN language_exams ON language_info.id = language_exams.id;
    `;
    const examResult = await client.query(query);
    const examData = examResult.rows;
    res.json(examData);
  } catch (err) {
    console.error('Error fetching exam data', err);
    res.status(500).send('Error fetching exam data from the database');
  }
});


// Route to fetch contact data from the database and send it to the client
app.get('/contact', async (req, res) => {
  try {
    console.log('Fetching contact data from the database');
    const contactResult = await client.query('SELECT * FROM contact_info');
    const contactData = contactResult.rows[0]; // Assuming contact data is stored in a single row
    res.json(contactData);
  } catch (err) {
    console.error('Error fetching contact data', err);
    res.status(500).send('Error fetching contact data from the database');
  }
});

// Route to handle form submission and insert data into the database
app.post('/submit-form', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    console.log('Inserting form data into the database');

    // Inserting form data into the contact_info table
    const query = `
      INSERT INTO client_info (name, email, phone, subject, message)
      VALUES ($1, $2, $3, $4, $5)
    `;
    await client.query(query, [name, email, phone, subject, message]);

    res.status(200).send('Form data inserted successfully');
  } catch (err) {
    console.error('Error inserting form data', err);
    res.status(500).send('Error inserting form data into the database');
  }
});

// Route to fetch language data from the database based on ID and send it to the client
app.get('/languages/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching language data with ID ${id} from the database`);
    
    // Assuming your table name is 'languages' and it has columns 'id', 'name', 'description'
    const query = `SELECT * FROM language_content WHERE id = $1`;
    const languageResult = await client.query(query, [id]);
    const languageData = languageResult.rows[0]; // Assuming only one language will be fetched

    res.json(languageData);
  } catch (err) {
    console.error('Error fetching language data', err);
    res.status(500).send('Error fetching language data from the database');
  }
});


// Route to fetch service content data from the database based on ID and send it to the client
app.get('/services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching service content data with ID ${id} from the database`);
    
    // Assuming your table name is 'services_content' and it has columns 'id', 'title', 'content'
    const query = `SELECT * FROM services_content WHERE id = $1`;
    const serviceResult = await client.query(query, [id]);
    const serviceData = serviceResult.rows; // Assuming only one service content will be fetched
    console.log(serviceData)
    res.json(serviceData);
  } catch (err) {
    console.error('Error fetching service content data', err);
    res.status(500).send('Error fetching service content data from the database');
  }
});

// Route to fetch footer data from the database and send it to the client
app.get('/footer', async (req, res) => {
  try {
    console.log('Fetching footer data from the database');
    const footerResult = await client.query('SELECT * FROM footer');
    const footerData = footerResult.rows[0]; // Assuming footer data is stored in a single row
    res.json(footerData);
  } catch (err) {
    console.error('Error fetching footer data', err);
    res.status(500).send('Error fetching footer data from the database');
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
