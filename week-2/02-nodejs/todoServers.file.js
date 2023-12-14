const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const todos = [];
const app = express();
app.use(bodyParser.json());
let data = fs.readFileSync(path.join(__dirname, './todos.json'), 'utf8');
todos.push(...JSON.parse(data));
function saveTodos() {
    fs.writeFileSync(path.join(__dirname, './todos.json'), JSON.stringify(todos));
}
app.get('/todos', (req, res) => {
    res.status(200).json(todos);
}
);
app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo.id == id);
    if (todo) {
        res.status(200).json(todo);
    }
    else {
        res.status(404).json({ message: 'Route not found' });
    }
}
);
app.post('/todos', (req, res) => {
    const id = Math.floor(Math.random() * 1000);
    const todo = req.body;
    todo.id = id;
    todos.push(todo);
    saveTodos();
    res.status(201).json({ id: todo.id });
}
);
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todo = req.body;
    const todoUpdate = todos.find((todo) => todo.id == id);
    if (todoUpdate) {
        todoUpdate.title = todo.title;
        todoUpdate.description = todo.description;
        saveTodos();
        res.status(200).json(todos);
    }
    else {
        res.status(404).json({ message: 'Route not found' });
    }
}
);
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        saveTodos();
        res.status(200).json({ message: 'Deleted' });
    }
    else {
        res.status(404).json({ message: 'Not Found' });
    }
}
);
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
}
);
module.exports = app;

