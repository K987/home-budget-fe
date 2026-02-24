import {
  detect,
  fromNavigator,
  fromStorage,
  fromUrl,
} from '@lingui/detect-locale';

import AppProvider from '@/provider.tsx';
import Router from '@/router.tsx';

function App() {
  let locale = detect(
    fromUrl('lang'),
    fromStorage('lang'),
    fromNavigator(),
    'en',
  );
  locale = locale && ['en', 'hu'].includes(locale) ? locale : 'en';

  return (
    <AppProvider locale={locale}>
      <Router />
    </AppProvider>
  );
}

export default App;
