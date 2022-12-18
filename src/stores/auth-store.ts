import { defineStore } from 'pinia';
import { api } from "boot/axios";
import { CurrentUser, Customer, User } from 'src/models';
import { useRouter } from 'vue-router';

export interface IOperator {
    login: string;
    name: string;
    middlename: string;
    surname: string;
}

interface IAuthStoreState {
    token: string | null;
    currentUser: CurrentUser | null;
    operators: IOperator[];
}

export const useAuthStore = defineStore('auth', {
    state: (): IAuthStoreState => ({
        token: localStorage.getItem("token") || null,
        currentUser: null,
        operators: [],
    }),
    getters: {
        isLoggedIn: (state) => !!state.token,
    },
    actions: {
        async auth(login: string, password: string) {
            try {
                const response = await api.post('auth', { login, password });
                const token = response.data['token'];
                localStorage.setItem('token', token);
                api.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
            } catch (error) {
            }
        },
        logout() {
            localStorage.removeItem("token");
            delete api.defaults.headers["Authorization"];
        },
        async requestCurrentUser(): Promise<boolean> {
            try {
                const response = await api.get('user/current');
                this.currentUser = response.data['role'] == null ? new Customer(response.data) : new User(response.data);
                return true;
            } catch (error) {
                this.logout();
                return false;
            }
        },
        async requestOperators() {
            try {
                const response = await api.get(`user/operators`)
                this.operators = response.data;
            } catch (error) {
            }
        }
    },
});
