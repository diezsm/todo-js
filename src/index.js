import'./styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//localStorage.setItem('mi-key', 'ABR123');

/**setTimeout( ()=> {
    localStorage.removeItem('mi-key');
},1500 );
**/

todoList.todos.forEach( todo => crearTodoHtml( todo ) ) ;


//otra opcion todoList.todos.forEach(  crearTodoHtml ) ;
