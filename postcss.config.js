import path from 'node:path';

import mixins from 'postcss-mixins';
import simpleVars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import presetEnv from 'postcss-preset-env';

export default {
  plugins: [
    mixins({ mixinsDir: path.resolve('./src/styles/mixins') }),
    simpleVars(),
    nested(),
    presetEnv(),
  ],
};
