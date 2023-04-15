const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
];

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The given id is not found');
    else res.send(course);
});

app.post('/api/courses', (req, res) => {


    const { error } = validateCourse(req.body);
    // console.log(result);
    if(result.error) res.send('failed');
    else res.send('result');

    console.log(result.value);
 
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/course/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(course.error) res.send('id not found');

    const validation = validateCourse(req.body);
    // const { error } = validateCourse(req.body);

    // if(validation.error) res.send('un valid');

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/course/:id', (req, res) => {
    const courseId = courses.find(c => c.id === parseInt(req.params.id));
    console.log(courseId);
    const index = courses.indexOf(courseId);
    courses.splice(index, 1);

    res.send(courses);
});

function validateCourse(course){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

