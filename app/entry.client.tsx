/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from '@remix-run/react';
import React, { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import ClientStyleContext from './common/contexts/ClientStyleContext';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from './createEmotionCache';

/**
 * Emotion cache provider
 */
function ClientCacheProvider({ children }: { children: React.ReactNode}) {
  const [cache, setCache] = React.useState(createEmotionCache);

  const clientStyleContextValue = React.useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache);
      },
    }),
    [],
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}



startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <ClientCacheProvider>
        <RemixBrowser />
      </ClientCacheProvider>
    </StrictMode>
  )
});
