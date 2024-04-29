import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

// Will always throw a 404 Response to be caught by the ErrorPage in the
// nearest parent route.
export async function loader() {
  throw new Response('', { status: 404, statusText: 'Not Found' });
}

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    let errorText = error.statusText || error.data;
    if (error.status === 404) {
      errorText = "Oops! This page doesn't exist.";
    }

    return (
      <div className="flex w-full flex-col items-center gap-8 py-12">
        <h1 className="text-5xl	font-bold">{error.status}</h1>
        <p>{errorText}</p>
        <Link to="/" className="underline">
          Go back to home
        </Link>
      </div>
    );
  } else {
    console.error(error);

    return (
      <div className="flex w-full flex-col items-center gap-8 py-12">
        <h1 className="text-5xl	font-bold">Oups !</h1>
        <p>Sorry, Something went wrong.</p>
        <Link to="/" className="underline">
          Go back to home
        </Link>
      </div>
    );
  }
}
