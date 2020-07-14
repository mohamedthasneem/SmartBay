import {Product} from './product';

export interface CartState {
    loaded : boolean;
    products : Product[];
}
