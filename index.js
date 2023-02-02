const express = require('express')
const app = express()
const cors = require("cors")

let todolist = [];

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  return res.send('Hello World !')
})

app.get("/todo", (req, res) => {
  return res.status(200).json(todolist);
})

app.post('/add', (req, res) => {
  if (!req.body.msg)
    return res.status(400).json({ "error": "msg not found in body request" });
  todolist.push(req.body.msg);
  return res.status(200).json({ "message": "Todo add in the list" });
})

app.put("/:index", (req, res) => {
  const index = todolist[req.params.index];
  if (index != 0 && !index) return res.status(400).json({ "error": "index not found" });
  if (!req.query.msg) return res.status(400).json({ "error": "msg not found in query" })
  console.log(req.query.msg, req.params.index, todolist[req.params.index])
  todolist[req.params.index] = req.query.msg;
  return res.status(200).json({ "msg": todolist[req.params.index] });
})

app.delete("/:index", (req, res) => {
  if (!req.params.index) return res.status(400).json({ "error": "index not found" });
  const index = todolist[req.params.index];
  if (index != 0 && !index) return res.status(400).json({ "msg": "index out of list" })
  todolist.splice(req.params.index, 1);
  return res.status(200).json({ "msg": "todolist deleted" })
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})