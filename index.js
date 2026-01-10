const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('dist'));

morgan.token('postData',(req)=> {
    if (req.method === 'POST') {
        return JSON.stringify(req.body);
    }
    return '';
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'));



let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    },
    {
        "id": "5",
        "name": "Businka Maya",
        "number": "+356-79-03-62-45"
    }
]


const generateId = () => {
    let newId;
    do {
       newId = Math.floor(Math.random() * 100)
    } while (persons.some(person => person.id === newId));
    return newId;
}

app.post('/api/persons', (req, res) => {
   const {name,number} = req.body;

   if (!name || !number) {
      return res.status(400).json({error: ' Both name and number are required'});
   }

   const duplicatedPerson = persons.find((person) => person.name === name);

   if (duplicatedPerson) {
       return res.status(400).json({error: `Name ${name}  already exists in phonebook`});
   }

   const newPerson = {
       "id": generateId(),
       name,
       number,
   }

   persons = persons.concat(newPerson);

    res.status(201).json(newPerson);

})

app.get('/', (req, res) => {
    res.send('<h1>Project PhoneBook</h1>')
    console.log('📞 Request received at:', new Date().toISOString());
    console.log(persons);
})

app.get('/api/persons', (req, res) => {
    res.json(persons);
})

app.get('/api/persons/:id', (req, res) => {
    const {id} = req.params;
    const person = persons.find(p => p.id === id);

    if (!person) {
        console.warn(`Person with id ${id} not found`);

        return res.status(404).json({
            error: `Person with id ${id} not found`
        });
    }

    res.json(person);
});

app.get('/info', (req, res) => {
    const currentTime = new Date();
    const phoneBookEntries = persons.length;

    const response = `<div>
<p>Phonebook has info for ${phoneBookEntries} people</p>
<p>${currentTime}</p>
</div>`
    res.send(response).end();
})

app.delete('/api/persons/:id', (req, res) => {
    const {id} = req.params;
    const initialLength = persons.length;
    persons = persons.filter(p => p.id !== id);

    if (persons.length < initialLength) {
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Not found' });
    }
});



const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
