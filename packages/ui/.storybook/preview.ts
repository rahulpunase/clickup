import '../src/styles/main.css';

import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';

const preview: Preview = {
  decorators: [
    (Story) => {
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'light');
      }, []);

      return Story();
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
