# Project #14 - HRNet

This codebase contains the code needed to run HRNet.

## Install dependencies

```bash
npm install
```

## Launch dev server

```bash
npm run dev
```

## Tests

The app saves employee records to a Zustand store and to localeStorage (via Zustand middleware).
This ensures that the data persists between page reloads for testing.

To test the app, there are two buttons on the home page:
 - "Test: add 20 employees" - adds 20 new random employees to the store
 - "Test: reset employees" - clears all employees from the store
