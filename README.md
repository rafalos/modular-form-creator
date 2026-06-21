# Modular Form Creator

Frontend implementation of the Modular Form Creator assignment.

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- Styled Components
- Axios
- React Toastify
- Docker / Docker Compose

## Features

- Resource list
- Resource creation
- Resource deletion
- Resource overview
- Resource details page
- Basic Info module
- Project Details module
- Validation
- Provisioning flow
- Buffered editing for completed resources
- Error handling with toast notifications
- Loading states

## Business rules implemented

### Draft resources

- Each module is updated independently.
- Changes are persisted immediately after submitting the module form.
- Project Details is available only after Basic Info is completed.
- Provisioning is enabled only when both modules are completed.

### Completed resources

- Module edits are stored in a frontend-only buffer.
- Closing the form does not discard changes.
- Refreshing the application clears the buffer.
- Buffered changes are persisted only after explicit confirmation.
- Resource status cannot be changed through the full update endpoint.

## Running with Docker

Start the entire application:

```bash
docker compose up --build
```

Services:

- frontend (Vite)
- backend
- MongoDB

---

## Project structure

```
src/
 ├── components/
 ├── hooks/
 ├── services/
 ├── validators/
 ├── mappers/
 ├── shared/
 ├── providers/
 ├── design-system/
 └── utils/
```

---

## Notes

### Validation

Validation is implemented through reusable field validators and a validation schema, allowing multiple forms to share the same validation logic.

### Buffered editing

Completed resources use a frontend buffer stored in React Context. Changes remain available while navigating through the application and are discarded after a page refresh, matching the assignment requirements.

### Error handling

API errors are displayed using toast notifications with backend error messages when available.

### Docker

The frontend has been added to the provided Docker Compose configuration, allowing the complete stack (frontend, backend, MongoDB) to be started with a single command.


## Decisions

### Why React Context for buffered editing?

The assignment requires temporary, non-persistent edits for completed resources.
React Context was chosen because:

- it keeps the buffer in memory only,
- it survives route changes,
- it is automatically cleared on browser refresh,
- no external state management library was required.
