// lib/fontAwesome.ts
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';

// Prevents auto-adding of CSS since Next.js will handle this
config.autoAddCss = false;

// Add the icons to the library
library.add(fas);
