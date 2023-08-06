const pool = require('../../db');
const queries = require('./queries');

const getParticipant = (req, res) => {
    pool.query(queries.getParticipant, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const getParticipantById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getParticipantById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};
const addParticipant = (req, res) => {
    const {name, adress, phone, say, absen, dob} = req.body;

    pool.query(queries.addParticipant, [name, adress, phone, say, absen, dob], (error, results) => {
        if(error) throw error;
        res.status(201).send ("Participant Created Succesfully !!");
    })
};
const removeParticipant = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.removeParticipant, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Participant removed Successfully !!")
    });

    // pool.query(queries.removeParticipant, [id], (error, results) => {
    //     const noParticipantFound = ! results.rows.length;
    //     if(noParticipantFound) {
    //         res.send("student does not exist in the database");
    //     }
    // });
};
const updateParticipant = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(queries.getParticipantById, [id], (error, results) => {
        const noParticipant = ! results.rows.length;
        if(noParticipant) {
            res.send("student does not exist in the database");
        }
    })

    pool.query(queries.updateParticipant, [name, id], (error, results) => {
        if(error) throw error;
        res.status(200).send("Participant update successfully");
    })
}
module.exports = {
    getParticipant,
    getParticipantById,
    addParticipant,
    removeParticipant,
    updateParticipant,
};

