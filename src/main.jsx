import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Analytics />
      <App />
    </>
  </StrictMode>
)
