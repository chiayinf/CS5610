export default function clickReducer(
    state = 0, action
) {
    if (action.type === 'boardClick') {
        if (action.symbol === ''){
            return state + 1;
        } else{
            return state - 1;
        }  
    }
    return state;
}
