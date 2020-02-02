import { Context, Plugin } from '@nuxt/types';
import logger from '~/util/logger'

const axiosPlugin: Plugin = ({ $axios }: Context) => {
  $axios.onRequest(config => {
    logger.info('$axios.onRequest', config);
  });

  $axios.onResponse(response => {
    logger.info('$axios.onResponse', response);
  });

  $axios.onError(error => {
    logger.error('$axios.onError', error);
  });
};

export default axiosPlugin;
