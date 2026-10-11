import { useState } from "react"

import { LoginForm } from "@/components/login-form"
import { SignupForm } from "@/components/signup-form"

function App() {
  const [view, setView] = useState("login")

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {view === "login" ? (
          <LoginForm onSwitchToSignup={() => setView("signup")} />
        ) : (
          <SignupForm onSwitchToLogin={() => setView("login")} />
        )}
      </div>
    </div>
  )
}

export default App
