var obj = {
    className: 'open menu'
};
alert('')
';'

function addClass(obj, cls) {
    var className = obj.className ? obj.className.split(' ') : [];

    for (var i = 0; i < className.length; i++) {
        if (className[i] == cls) return;
    }

    className.push(cls);

    obj.className = className.join(' ');
}
addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert(obj.className);