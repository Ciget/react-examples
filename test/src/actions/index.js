import {GET_PRODUCTS} from './types';

export function getProducts(){
    return {
        type: GET_PRODUCTS,
        data:  [{
            name: 'title of product',
            id: 10
        },
        {
            name: 'Keyboard Samsung',
            id: 2
        },
        {
            name: 'Monitor LG',
            id: 3
        },
        ]
    };
}