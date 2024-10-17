import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Link the PWA manifest file. */}
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                      console.log('Service Worker registered with scope:', registration.scope);

                      registration.installing.addEventListener('statechange', function() {
                        if (this.state === 'installed') {
                          console.log('Service Worker: Installed');
                        }
                      });

                      registration.addEventListener('activate', () => {
                        console.log('Service Worker: Activated');
                      });
                    })
                    .catch(error => {
                      console.error('Service Worker registration failed:', error);
                    });
                });

                navigator.serviceWorker.addEventListener('message', event => {
                  if (event.data && event.data.type === 'FETCH') {
                    console.log('Service Worker: Fetching', event.data.url);
                  }
                });
              }
            `,
          }}
        />

        {/*

          Disable body scrolling on web. This makes ScrollView components work closer to how they do on native.
          However, body scrolling is often nice to have for mobile web. If you want to enable it, remove this line.
        */}
        <ScrollViewStyleReset />

        {/* Add any additional <head> elements that you want globally available on web... */}
      </head>
      <body>{children}</body>
    </html>
  );
}
