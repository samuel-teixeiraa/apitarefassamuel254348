const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tarefa = require('./tarefa');

router.post('/post', async (req, res) => {
  try {
    const resultado = await Tarefa.create(req.body); 
    res.status(201).json(resultado); // Retorna o objeto criado
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/getAll', async (req, res) => {
  try {
    const tarefas = await Tarefa.find();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/getOne/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "ID inválido" });
    }
    const tarefa = await Tarefa.findById(id);
    if (!tarefa) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const atualizacao = req.body;
    const resultado = await Tarefa.findByIdAndUpdate(id, atualizacao, { new: true });
    
    if (!resultado) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.json(resultado); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const resultado = await Tarefa.findByIdAndDelete(id);
    
    if (!resultado) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }

    res.json({ message: "Sucesso", id: id }); 
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;