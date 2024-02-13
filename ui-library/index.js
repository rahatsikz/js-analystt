import { h} from 'snabbdom';


let state = {
    count: 0
};

let updateView ;

export const createTemplate = ()  => {
    return h('div', [
        h('h1', state.count),
        h('button', {
            on: {
                click: increment
            }
        }, 'Add')
    ])
}

export const updateState = (newState, renderFunc) => {
    state = newState;
    updateView = renderFunc;
}

export const onMount = () => {
    console.log('Component mounted');
    
}

const increment = () => {
   state.count++;
   updateView(createTemplate()) 
}
