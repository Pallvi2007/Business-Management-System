const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    default: "" 
  },
  status: { 
    type: String, 
    enum: ['To-Do', 'In-Progress', 'Completed'], 
    default: 'To-Do' 
  },
  assignedTo: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: false // 🔓 Keeps it optional so your frontend "Deploy Target" modal works perfectly!
  },
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }
}, { 
  timestamps: true // ⏱️ This automatically creates and manages 'createdAt' and 'updatedAt' fields for you!
});

module.exports = mongoose.model('Task', TaskSchema);