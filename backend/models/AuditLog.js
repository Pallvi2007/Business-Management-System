const mongoose = require('mongoose');

const AuditLogSchema = new mongoose.Schema({
  action: { type: String, required: true }, // e.g., "TASK_UPDATED", "TASK_DELETED"
  performedBy: { type: String, required: true }, // Username
  details: { type: String, required: true }, // e.g., "Changed status to In-Progress"
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AuditLog', AuditLogSchema);