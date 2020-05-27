
let login = prompt('Who`s there?');
switch (login) {
    case 'Admin':
        let password = prompt('Password?');
        switch (password) {
            case 'TheMaster':
                alert('Welcome');
                break;
            case null:
                alert('Canceled.');
                break;
            default:
            alert('Wrong password');
                break;
        }
        break;
    case null:
        alert('Canceled');
    break;
    default:
        alert('I don`t know you')
        break;
}