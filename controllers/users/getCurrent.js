const getCurrent = async (req, res) => {
  const { name, email, token, subscription } = req.user;
  res.json({
    token,
    user: {
      name,
      email,
      subscription,
    },
  });
};

module.exports = getCurrent;
