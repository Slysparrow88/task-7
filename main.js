UserManager = {
    data: ['vasa', 'petia', 'anna'],
    btnFind: document.querySelector('#btnFind'),
    btnList: document.querySelector('#btnList'),
    btnClear: document.querySelector('#btnClear'),
    name: document.querySelector('#name'),
    block: document.querySelector('#block'),

    findUser: function (input, btn) {

        btn.onclick = () => {

            if (this.data.indexOf(input.value) !== -1) {
                alert("Имя присутствует в массиве.");
            } else {
                alert("Имени нет в массиве! Пользователь добавлен!");
                this.data.push(input.value);
            }
        }
    },

    listUser: function (btn) {

        this.ul = document.createElement('ul');

        btn.onclick = () => {

            for (let user of this.data) {
                const li = document.createElement('li');
                li.innerHTML += user;
                this.ul.append(li);
                this.block.append(this.ul);
            }
        }
    },

    clearBlock: function (input, btn) {
        
        btn.onclick = () => {
            this.ul.remove();
            input.value = '';
        }
    },

    init: function () {
        this.findUser(this.name, this.btnFind);
        this.listUser(this.btnList);
        this.clearBlock(this.name, this.btnClear);
    },
}
UserManager.init();