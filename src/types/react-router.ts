import type { LoaderFunction, ActionFunction } from 'react-router-dom';

export type LoaderData<TLoaderFn extends LoaderFunction> =
  Awaited<ReturnType<TLoaderFn>> extends Response | infer D ? D : never;

export type ActionData<TActionFn extends ActionFunction> =
  Awaited<ReturnType<TActionFn>> extends Response | infer D ? D : never;
