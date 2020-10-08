let users = [{
    id: '1',
    name: 'Pedro',
    email: 'p-cardozo@hotmail.com',
    age: 19
},]

let posts = [{
    id: '1',
    title: 'First',
    body: 'Aenean eu iaculis magna. Duis id aliquet erat, sed euismod libero. Sed eu vestibulum leo. Sed sit amet felis ut mauris condimentum sagittis vel dictum dui.',
    author: '1'
}]

const db = { users, posts }

export { db as default }