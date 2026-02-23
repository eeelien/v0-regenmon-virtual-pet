"use client"

import { PrivyProvider } from "@privy-io/react-auth"

export default function PrivyProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId="cmlz4955p00sb0cjpqc3rgnxj"
      config={{
        loginMethods: ["email", "google"],
        appearance: {
          theme: "dark",
          accentColor: "#209cee",
          logo: "/regenmon-egg.jpg",
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}
