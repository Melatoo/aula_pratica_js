function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
    if(value == 'Admin') {
        admins.push(key);
       }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Thiago', 'Admin');
usuarios.set('Jorgin', 'User');
usuarios.set('Pedro', 'Admin');

console.log(getAdmins(usuarios))    