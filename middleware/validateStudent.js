module.exports = (req, res, next) => {

  const { name, roll } = req.body;

  if (!name || !roll) {
    return res.send("Name and Roll are required");
  }

  next();

};