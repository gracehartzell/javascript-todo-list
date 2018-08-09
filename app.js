document.addEventListener('DOMContentLoaded', () => {

    appTitle = createAppTitle();
    
    input = createInputBox();

    list = createUnorderedList()

    button = createButton()

    // RESPONSIVE 

    clearInput = clearInitialInput();

    clickButton = createClickResponse();

    enterKeyPress = enterKeyResponse();









// FUNCTIONS FOR ELEMENTS: 
    function createButton() {
        let button = document.createElement('button');
        button.setAttribute('id', 'add_todo');
        button.textContent = 'Add ToDo';
        document.body.appendChild(button);
        
        return button;
    };

    function createAppTitle() {
        let appTitle = document.createElement('h1');
        appTitle.textContent = 'Todo List';
        document.body.appendChild(appTitle);
        
        return appTitle;
    };

    function createInputBox() {
        let input = document.createElement('input');
        input.setAttribute('class', 'input');
        document.body.appendChild(input);
        input.value = 'What should I do?';
        
        return input;
    };

    function createUnorderedList() {
        let list = document.createElement('ul');
        document.body.appendChild(list);
        
        return list;
    }


    function clearInitialInput() {
        input.addEventListener('click', (ev) => {
            input.value = '';
        });
    };

    // function enterPress
    function createClickResponse(listItem) {
        button.addEventListener('click', (ev) => {
            if (input.value !== '') {
                const listItem = document.createElement('LI');
                listItem.textContent = input.value;
        
                xButton = createXButton(listItem)
                editButton = createEditButton(listItem, xButton)
            
            
                list.appendChild(listItem);
            }
            else  {
                alert(`Don't you have something to do?`);
            };
        });
    };


    function enterKeyResponse() {
        input.addEventListener('keyup', (ev) => {
            if (input.value !== '') {
                const listItem = document.createElement('LI');
                
                if (ev.keyCode === 13) {
                    listItem.textContent = input.value;
                    list.appendChild(listItem);
                    
                    xButton = createXButton(listItem)
                    editButton = createEditButton(listItem, xButton)
                    
                    listItem.appendChild(editButton);
                };
            }
            else {
                alert(`Don't you have something to do?`)
            }
        });
    }


    function createEditButton(listItem, xButton){
        // create button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.style.backgroundColor = '#eee';
        editButton.style.cssFloat = 'right';
        editButton.style.padding = '4px 4px';
        listItem.appendChild(editButton);
       
        // button events, including reset after completion
        editButton.addEventListener('click', (ev) => {
            const editItem = document.createElement('input');
            listItem.appendChild(editItem);
            editItem.addEventListener('keyup', (ev) => {
                if (ev.keyCode === 13) {
                    if (editItem.value !== '') {
                        listItem.textContent = editItem.value;
                        listItem.removeAttribute('class');
                        listItem.appendChild(xButton);
                        listItem.appendChild(editButton);
                    };
                };
            });
        });
        return editButton;
    }


    function createXButton(listItem) {
        // create x button 
        const xButton = document.createElement('button');
            xButton.textContent = ' X '
            xButton.style.backgroundColor = '#FF6666';
            xButton.style.cssFloat = 'right';
            xButton.style.padding = '4px 4px';
        listItem.appendChild(xButton);
        
        //  button events 
        xButton.addEventListener('click', (ev) => {
            listItem.setAttribute('class','completed');
        });
        return xButton;
    };


});