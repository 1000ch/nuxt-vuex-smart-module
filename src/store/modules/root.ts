import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module';
import { authModule } from './auth';

class RootState {}

class RootGetters extends Getters<RootState> {}

class RootMutations extends Mutations<RootState> {}

class RootActions extends Actions<RootState, RootGetters, RootMutations, RootMutations> {}

export const rootModule = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
  modules: {
    auth: authModule
  }
});

export const rootMapper = createMapper(rootModule);
