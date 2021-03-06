const users = []

const addUser = ({ id, username, room }) => {

    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if (!username || !room) {
        return {
            error: 'user name and room are required'
        }
    }

    //check for existing users
    const existingUsers = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate username
    if (existingUsers) {
        return {
            error: 'User name is in use'
        }
    }

    //store user
    const user = { id, username, room }
    users.push(user)
    return { user }

}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    const usersInRoom = users.filter((user) => {
        return user.room === room
    })
    return usersInRoom

}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom

}