const { users } = require('../data/users');

const getAllUsers = (req, res) => {
  const { school, search, page = 1, limit = 2 } = req.query;

  let result = [...users];


  if (school) {
    result = result.filter(
      (user) =>  
      user.school.toLowerCase() === school.toLowerCase()
    )
  }
 

  if (search) {
    result = result.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    })
  }

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);

  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = pageNum * limitNum

  const paginatedResult = result.slice(startIndex, endIndex);
  
  res.status(200).json({
    success: true,
    totalRecords: result.length,
    page: pageNum,
    totalPages: Math.ceil(result.length / limitNum),
    data: paginatedResult
   })

};

const getUser = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({
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
  const {name, age, school, oneLiner} = req.body;

  if (!name || !age || !school || !oneLiner) {
    return res.status(400).json({
      success: false,
      message: 'Name, age, and school are required fields'
    })
  }

  const newUser = {
    id: (Math.random() * 100000).toFixed(0).toString(),
    name,
    age,
    school,
    oneLiner,
  }

  users.push(newUser);
  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
};



module.exports = { getAllUsers, createUser, getUser };
