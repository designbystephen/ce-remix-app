import React from 'react';
import type { ReactNode } from 'react';
import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { withEmotionCache } from '@emotion/react';
import { unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/utils';
import ClientStyleContext from '~/common/contexts/ClientStyleContext';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

type DocumentProps = {
  children: ReactNode;
};

function Document({ children }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

/**
 * Document with Emotion HoC
 * - based on recommended setup for remix and material-ui
 * @see https://github.com/mui/material-ui/tree/master/examples/material-remix-ts
 */
const EmotionDocument = withEmotionCache(
  (props: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext);

    // Only executed on client
    useEnhancedEffect(() => {
      // re-link sheet container
      // eslint-disable-next-line no-param-reassign
      emotionCache.sheet.container = document.head;

      // re-inject tags
      const { tags } = emotionCache.sheet;

      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        (emotionCache.sheet as any)._insertTag(tag);
      });

      // reset cache to reapply global styles
      clientStyleData.reset();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Document {...props} />;
  }
);

export default EmotionDocument;
