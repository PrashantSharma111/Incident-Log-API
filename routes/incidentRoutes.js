import express from "express"
import { getIncidents, createIncident, getIncidentById, deleteIncident } from "../controllers/incidentController.js"

const router = express.Router()

// Get all incidents from the database
router.get('/', getIncidents)

// Insert a new incident into the database
router.post('/', createIncident)

// Get a specific incident by its ID
router.get('/:id', getIncidentById)

// Delete the incident with the specified ID
router.delete('/:id', deleteIncident)

export default router;
