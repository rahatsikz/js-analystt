import { init } from 'snabbdom';
import { createTemplate, updateState } from '../ui-library/index';
// import { h , VNode} from 'snabbdom';


const patch = init([]);

document.addEventListener('DOMContentLoaded', () => {
   const app = document.getElementById('app');
   const initialState = {
       count: 0
   };
   const vnode = createTemplate();
   updateState(initialState, render);
   render(vnode, app); 

})

const render = (vnode, container) => {
    if (container.vnode) {
        patch(container.vnode, vnode);
    }

    else {
        patch(container, vnode);
    }

    container.vnode = vnode;
}