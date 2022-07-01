import { createContext } from 'react';
import { Items } from '../pages/home/data';

export const CartContext = createContext<Items[]>([]);