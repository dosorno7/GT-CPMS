/*
Do not delete. VM connection information.
const pool = new Pool({
  user: 'my_user',
  host: '130.207.114.64',
  database: 'my_database',
  password: 'root',
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
        const { teamNumber, section, project, client, professor  } = body;
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
  
module.exports = {
    getTeams,
    createTeam,
    deleteTeam,
}