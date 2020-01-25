import { Middleware, Context } from '@nuxt/types';
import { authModule } from '~/store/modules/auth';

const authencticated: Middleware = ({ store }: Context) => {
  if (true) {
    authModule.context(store).actions.login({});
  } else {
    authModule.context(store).actions.logout();
  }
};

export default authencticated;
