const { Router } = require('express');
const controller = require ('./controller');

const router = Router();

router.get("/", controller.getParticipant);
router.get("/:id", controller.getParticipantById);
router.post("/", controller.addParticipant);
router.put("/:id", controller.updateParticipant)
router.delete("/:id", controller.removeParticipant);


module.exports = router;