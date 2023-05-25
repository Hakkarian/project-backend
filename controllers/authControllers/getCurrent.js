const { ctrlWrapper } = require("../../helpers");

const getCurrent = async (req, res) => {
  const { user, token, avatarURL } = req;
  res.json({ user, token, avatarURL });
};

module.exports = {
  getCurrent: ctrlWrapper(getCurrent)
}
