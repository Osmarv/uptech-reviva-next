import { createContext } from 'react';
import { Items } from '../pages/data';

export const CartContext = createContext<Items[]>([]);