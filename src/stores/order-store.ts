import { defineStore } from 'pinia';
import { api } from "boot/axios";
import { Order } from 'src/models';


interface IOrderStoreState {
    currentOrder: Order | null;
}

export const useOrderStore = defineStore('order', {
    state: (): IOrderStoreState => ({
        currentOrder: null,
    }),
    getters: {
    },
    actions: {

    },
});
