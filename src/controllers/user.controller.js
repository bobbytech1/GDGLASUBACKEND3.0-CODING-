const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            {
                id: 1,
                name: 'Abu',
                age: 30,
                school: 'Lagos State University',
                oneLiner: 'We are LASU We are GREAT'
            },
            {
                id: 1,
                name: 'Chidi',
                age: 30,
                school: 'Lagos State University',
                oneLiner: 'We are LASU We are GREAT'
            },
            {
                id: 1,
                name: 'Yetunde',
                age: 30,
                school: 'Lagos State University',
                oneLiner: 'We are LASU We are GREAT'
            }
        ]
    })
}

const createUser = (req, res) => {
    res.status(201).json({
        success: true,
        message: 'User created successfully'
    })
}

module.exports = {getAllUsers, createUser}