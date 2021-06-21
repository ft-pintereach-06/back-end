const router = require("express").Router();
const Users = require("./users-model.js");
const { restricted, only } = require("../auth/auth-middleware.js");

// router.get("/", restricted, (req, res, next) => {
router.get("/", (req, res, next) => {
  Users.getAll()
    .then(users => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params
  
  Users.getById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(next);
});

// router.get("/:id", restricted, only('admin'), (req, res, next) => {
// router.get("/:id", only('admin'), (req, res, next) => {
//   Users.findById(req.params.id)
//     .then(user => {
//       res.json(user);
//     })
//     .catch(next);
// });

router.post('/', async (req, res, next) => {
  const body = req.body

  await Users.add(body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(next)
})

module.exports = router;