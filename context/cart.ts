import { createContext } from 'react';
import { Items } from '../data/data';

export const CartContext = createContext<Items[]>([]);