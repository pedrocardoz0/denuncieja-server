const Query = {
    async users(parent, args, { prisma }, info) {
        return await prisma.users()
    },
    posts(parent, args, { db }, info) {
        return db.posts
    }
}

export default Query;