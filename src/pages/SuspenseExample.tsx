

import { Suspense, use } from 'react';

// 1. A simulated async function that returns a Promise
function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello from the resolved Promise!"), 2000);
  });
}

// 2. The component that reads the Promise
function MessageContent({ messagePromise }: { messagePromise: Promise<string> }) {
  // The 'use' hook handles the "suspend" logic automatically
  const message = use(messagePromise);
  return <p>{message}</p>;
}

// 3. The parent component with the Suspense boundary
export default function SuspenseExample() {
  // It's best to initiate the promise outside the rendering component
  // or via props to avoid re-creating it on every render.
  const messagePromise = fetchMessage();
  return (
    <section>
      <h2>Suspense and Promise Demo</h2>
      <Suspense fallback={<p>⏳ Loading message...</p>}>
        <MessageContent messagePromise={messagePromise} />
      </Suspense>
    </section>
  );
}