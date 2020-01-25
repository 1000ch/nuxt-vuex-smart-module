import { Getters, Mutations, Actions, Module, createMapper } from 'vuex-smart-module';

enum AuthStatus {
  isLoggedIn,
  isLoggedOut
}

class AuthState {
  status: AuthStatus = AuthStatus.isLoggedOut;
  token: string | null = null;
}

class AuthGetters extends Getters<AuthState> {
  get isLoggedIn(): boolean {
    return this.state.status === AuthStatus.isLoggedIn;
  }
  get token(): string | null {
    return this.state.token;
  }
}

class AuthMutations extends Mutations<AuthState> {
  signIn(payload: any) {
    this.state.token = payload.token;
  }
  signOut() {
    this.state.token = null;
  }
  login() {
    this.state.status = AuthStatus.isLoggedIn;
  }
  logout() {
    this.state.status = AuthStatus.isLoggedOut;
  }
}

class AuthActions extends Actions<AuthState, AuthGetters, AuthMutations, AuthMutations> {
  async login(payload: any) {
    await this.mutations.signIn(payload);
    await this.mutations.login(null);
  }
  async logout() {
    await this.mutations.signOut(null);
    await this.mutations.logout(null);
  }
}

export const authModule = new Module({
  state: AuthState,
  getters: AuthGetters,
  mutations: AuthMutations,
  actions: AuthActions
});

export const authMapper = createMapper(authModule);
