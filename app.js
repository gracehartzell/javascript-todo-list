document.addEventListener('DOMContentLoaded', () => {

    const appTitle = document.createElement('h1');
    appTitle.textContent = 'Todo List';
    document.body.appendChild(appTitle);

    const input = document.createElement('input');
    input.setAttribute('class', 'input');
    document.body.appendChild(input);
    input.value = 'What should I do?';
    
    const list = document.createElement('ul');
    document.body.appendChild(list);

     const button = document.createElement('button');
    button.setAttribute('id', 'add_todo');
    button.textContent = 'Add ToDo';
    document.body.appendChild(button);


    // RESPONSIVE 
    input.addEventListener('click', (ev) => {
        input.value = '';
    });

    button.addEventListener('click', (ev) => {
        if (input.value !== ''){
        const listItem = document.createElement('LI');
        listItem.textContent = input.value;
       
        const liButton = document.createElement('button');
        liButton.textContent = ' X '
        liButton.style.backgroundColor = '#FF6666';
        liButton.style.cssFloat = 'right';
        liButton.style.padding = '4px 4px';
        listItem.appendChild(liButton);
        
            liButton.addEventListener('click', (ev) => {
                listItem.setAttribute('class','completed');
            })

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.style.backgroundColor = '#eee';
        editButton.style.cssFloat = 'right';
        editButton.style.padding = '4px 4px';
        listItem.appendChild(editButton);
            
            editButton.addEventListener('click', (ev) => {
                const editItem = document.createElement('input');
                listItem.appendChild(editItem);
                editItem.addEventListener('keyup', (ev) => {
                    if (ev.keyCode === 13) {
                        if (editItem.value !== '') {
                            listItem.textContent = editItem.value;
                            listItem.removeAttribute('class');
                            listItem.appendChild(liButton);
                            listItem.appendChild(editButton);
                        }
                    }
                })
            })
            
        
        list.appendChild(listItem);
        }
        else  {
            alert(`Don't you have something to do?`);
        }
    });
    

    input.addEventListener('keyup', (ev) => {
        if (input.value !== '') {
        const listItem = document.createElement('LI');

         if (ev.keyCode === 13) {
            listItem.textContent = input.value;
            list.appendChild(listItem);
           
            var liButton = document.createElement('button');
            liButton.textContent = ' X '
            liButton.style.backgroundColor = '#FF6666';
            liButton.style.cssFloat = 'right';
            liButton.style.padding = '4px 4px';
            listItem.appendChild(liButton);
                liButton.addEventListener('click', (ev) => {
                    listItem.setAttribute('class','completed');
                })

            var editButton = document.createElement('button');
            editButton.textContent = 'Edit'
            editButton.style.backgroundColor = '#eee';
            editButton.style.cssFloat = 'right';
            editButton.style.padding = '4px 6px';
            
            editButton.addEventListener('click', (ev) => {
                const editItem = document.createElement('input');
                listItem.appendChild(editItem);
                editItem.addEventListener('keyup', (ev) => {
                    if (ev.keyCode === 13) {
                        if (editItem.value !== '') {
                            listItem.textContent = editItem.value;
                            listItem.removeAttribute('class');
                            listItem.appendChild(liButton);
                            listItem.appendChild(editButton);
                        };
                    };
                    
                });
                
            });
            
            listItem.appendChild(editButton);
         };
        }
        else {
            alert(`Don't you have something to do?`)
        }
    });


});
