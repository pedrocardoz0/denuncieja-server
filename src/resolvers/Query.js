const Query = {
    users(parent, args, { db }, info) {
        return db.users
    },
    posts(parent, args, { db }, info) {
        return db.posts
    }
}

export default Query;