const getParticipant = "SELECT * FROM participant";
const getParticipantById = "SELECT * FROM participant WHERE id = $1";
const addParticipant = "INSERT INTO participant (name, adress, phone, say, absen, dob) VALUES ($1, $2, $3, $4, $5, $6)";
const removeParticipant = "DELETE FROM participant WHERE id = $1";
const updateParticipant = "UPDATE participant SET name = $1 WHERE id = $2";

module.exports = {
    getParticipant,
    getParticipantById,
    addParticipant,
    removeParticipant,
    updateParticipant,
};