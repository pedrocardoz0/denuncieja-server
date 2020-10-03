import uuidv4 from 'uuid/dist/v4';

const Mutation = {
    createUser(parent, args, { db }, info) {
        const emailTaken = db.users.some((user) => user.email === args.data.email);
        if(emailTaken) throw new Error('Email already taken!');

        const user = {
            id: uuidv4(),
            ...args.data
        }

        db.users.push(user);
        return user
    },
}

export default Mutation;