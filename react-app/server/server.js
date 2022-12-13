const express = require('express');
const app = express();
const port = 3001;

const cpms_model = require('./cpms_model');

app.use(express.json());

app.get('/api/getTeams', (req, res) => {
  cpms_model.getTeams()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.post('/api/createTeam', (req, res) => {
  cpms_model.createTeam(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.delete('/api/deleteTeam/:teamId', (req, res) => {
  cpms_model.deleteTeam(req.params.teamId)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.get('/api/getClients', (req, res) => {
  cpms_model.getClients()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.post('/api/createClient', (req, res) => {
  cpms_model.createClient(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.delete('/api/deleteClient/:clientId', (req, res) => {
  cpms_model.deleteClient(req.params.clientId)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.get('/api/getProjects', (req, res) => {
  cpms_model.getProjects()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.post('/api/createProject', (req, res) => {
  cpms_model.createProject(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.delete('/api/deleteProject/:projectId', (req, res) => {
  cpms_model.deleteProject(req.params.projectId)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.get('/api/getStudents', (req, res) => {
  cpms_model.getStudents()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.post('/api/createStudent', (req, res) => {
  cpms_model.createStudent(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.delete('/api/deleteStudents/:teamNumber', (req, res) => {
  cpms_model.deleteStudents(req.params.teamNumber)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});