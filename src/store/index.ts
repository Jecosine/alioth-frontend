import { createStore, Store } from "vuex";
import { User } from "@/typings/user";
import { InjectionKey } from "vue";
export interface State {
  user: User | null;
}
// define injection key
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    user: null,
  },
  getters: {
    getUserId(state) {
      return state.user?.id ?? -1;
    },
  },
  mutations: {
    setUser(state, user: User) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
