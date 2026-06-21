import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ResourcePage from './pages/ResourcesPage'
import ResourceLayout from './layouts/ResourceLayout'
import ResourceDetailsPage from './pages/ResourceDetailsPage'
import { AppShell } from './shared/Layout'
import { ToastContainer } from 'react-toastify'
import { ResourceBufferProvider } from './store/ResourceBufferProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/resources" replace />,
  },
  {
    path: '/resources',
    element: <ResourcePage />,
  },
  {
    path: '/resources/:resourceId',
    element: <ResourceLayout />,
    children: [
      {
        path: 'basic-info',
        element: null,
      },
      {
        path: 'project-details',
        element: null,
      },
    ],
  },
  {
    path: '/resources/:resourceId/details',
    element: <ResourceDetailsPage />,
  },
])

function App() {
  return (
    <AppShell>
      <ToastContainer />
      <ResourceBufferProvider>
        <RouterProvider router={router} />
      </ResourceBufferProvider>
    </AppShell>
  )
}

export default App
