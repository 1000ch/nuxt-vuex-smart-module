import { Module } from 'vuex-smart-module';
import { authModule } from './modules/auth';

export const root = new Module({
  modules: {
    auth: authModule
  }
});

export const { state, getters, mutations, actions, modules, plugins } = root.getStoreOptions();
