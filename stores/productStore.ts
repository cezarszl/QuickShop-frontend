import { create } from 'zustand';
import axios from 'axios';

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}
interface ProductState {
    products: Product[]
    fetchProducts: () => Promise<void>
}

export const useProductStore = create<ProductState>((set) => ({
    products: [],
    fetchProducts: async () => {
        try {
            const response = await axios.get('https://quickshopapi-844fd64d6465.herokuapp.com/product');
            set({ products: response.data })
        } catch (err) {
            console.error('Error fetching products', err);
        }
    },
}));