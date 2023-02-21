module.exports = (req, res, next) => {
  const { username, password } = req.body;
  if (req.method === "POST" && req.path === "/login") {
    console.log(username, password);
    if (username === "Jenny" && password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res
        .status(400)
        .json({ message: "either username or password is wrong" });
    }
  }
  next();
};
