// reducers.js
const initialState = {
    products: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'ADD_TO_PRODUCTS':
            return { ...state, products: [...state.products, action.payload] };
        case 'REMOVE_FROM_PRODUCTS':
            return { ...state, products: state.products.filter((item) => item !== action.payload) };
        default:
            return state;
    }
};

export default rootReducer;