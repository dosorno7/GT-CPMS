/*
Do not delete. VM connection information.
const pool = new Pool({
  user: 'my_user',
  host: '130.207.114.64',
  database: 'my_database',
  password: '',
  port: 5432,
});
*/

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'cpmsdatabasehelper',
    host: 'localhost',
    database: 'cpms',
    password: 'CPMSGT',
    port: 5432,
});

const getTeams = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM team ORDER BY team_number ASC', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        });
    });
}

const createTeam = (body) => {
    return new Promise(function(resolve, reject) {
        const { teamNumber, section, project, client, professor } = body;
        pool.query('INSERT INTO team (team_number, section, project, client, professor) VALUES ($1, $2, $3, $4, $5) RETURNING *', [teamNumber, section, project, client, professor], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows[0]);
        });
    });
}

const deleteTeam = (id) => {
    return new Promise(function(resolve, reject) {
        const teamId = parseInt(id);
        pool.query('DELETE FROM team WHERE id = $1', [teamId], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(teamId);
        });
    });
}

const getClients = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM client', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        });
    });
}

const createClient = (body) => {
    return new Promise(function(resolve, reject) {
        const { email, clientName, organization, status } = body;
        pool.query('INSERT INTO client (email, client_name, organization, status) VALUES ($1, $2, $3, $4) RETURNING *', [email, clientName, organization, status], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows[0]);
        });
    });
}

const deleteClient = (id) => {
    return new Promise(function(resolve, reject) {
        const clientId = parseInt(id);
        pool.query('DELETE FROM client WHERE id = $1', [clientId], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(clientId);
        });
    });
}

const getProjects = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM project', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        });
    });
}

const createProject = (body) => {
    return new Promise(function(resolve, reject) {
        const { teamAssigned, section, organization, client, status } = body;
        pool.query('INSERT INTO project (organization, client_name, team_number, section, status) VALUES ($1, $2, $3, $4, $5) RETURNING *', [organization, client, teamAssigned, section, status], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows[0]);
        });
    });
}

const deleteProject = (id) => {
    return new Promise(function(resolve, reject) {
        const projectId = parseInt(id);
        pool.query('DELETE FROM project WHERE id = $1', [projectId], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(projectId);
        });
    });
}

const getStudents = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM student', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        });
    });
}

const createStudent = (body) => {
    return new Promise(function(resolve, reject) {
        const { teamNumber, name, email } = body;
        pool.query('INSERT INTO student (team_number, name, email) VALUES ($1, $2, $3) RETURNING *', [teamNumber, name, email], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(results.rows[0]);
        });
    });
}

const deleteStudents = (teamNumber) => {
    return new Promise(function(resolve, reject) {
        const parsedTeamNumber = parseInt(teamNumber);
        pool.query('DELETE FROM student WHERE team_number = $1', [parsedTeamNumber], (error, results) => {
            if (error) {
                reject(error);
            }
            resolve(parsedTeamNumber);
        });
    });
}
  
module.exports = {
    getTeams,
    createTeam,
    deleteTeam,
    getClients,
    createClient,
    deleteClient,
    getProjects,
    createProject,
    deleteProject,
    getStudents,
    createStudent,
    deleteStudents
}