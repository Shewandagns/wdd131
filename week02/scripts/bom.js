document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function () {
        const inputValue = input.value.trim();

        if (inputValue !== '') {
            const li = document.createElement('li');
            li.textContent = inputValue;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '❌';
            deleteButton.classList.add('delete');

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
            });

            li.appendChild(deleteButton);
            list.appendChild(li);

            input.value = '';
        }
    });
});