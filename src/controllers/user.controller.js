const { users } = require('../data/users');

const getAllUsers = (req, res) => {
  const { school } = req.query;

  if (school) {
    const filteredUsers = users.filter(
      (user) => user.school.toUpperCase() === school.toUpperCase(),
    );

    if (filteredUsers.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No user found with this school',
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      length: filteredUsers.length,
      data: filteredUsers,
    });
  }

  res.status(200).json({
    success: true,
    length: users.length,
    data: users,
  });
};

const getUser = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({
      success: false,
      message: 'Pls Provide User ID',
      data: null,
    });
  }
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      status: false,
      message: 'User not found',
    });
  }

  res.status(200).json({
    status: true,
    message: 'User found successfully',
    data: user,
  });
};

const createUser = (req, res) => {
  res.status(201).json({
    success: true,
    message: 'User created successfully',
  });
};

module.exports = { getAllUsers, createUser, getUser };
