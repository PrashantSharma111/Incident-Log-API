import Incident from "../models/Incident.js";

// to handle the GET request of all incidents
export const getIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    // Returns all incidents from the database as JSON
    res.status(200).json(incidents); 
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
}

// to handle the POST request for creating a new incident
export const createIncident = async (req, res) => {
  const { title, description, severity } = req.body;
  if (!title || !description || !severity) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Ensure the severity is one of the valid options: 'Low', 'Medium', 'High'
  if (!["Low", "Medium", "High"].includes(severity)) {
    return res.status(400).json({ message: "Severity must be Low, Medium, or High!" });
  }

  try {
    const newIncident = new Incident({ title, description, severity });
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
}

// to handle the request of a particular incident by ID
export const getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) return res.status(404).json({ message: "Incident not found!" });
    res.status(200).json(incident);
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
}

// to handle the DELETE request of a particular incident by ID
export const deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findByIdAndDelete(req.params.id);
    if (!incident) return res.status(404).json({ message: "Incident not found!" });
    res.status(200).json({ message: "Incident deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}
