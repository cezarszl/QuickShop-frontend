import { create } from 'zustand';
import axios from 'axios';

export interface Product {
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
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
            const response = await axios.get(`${baseUrl}/product`);
            set({ products: response.data })
        } catch (err) {
            console.error('Error fetching products', err);
        }
    },
}));