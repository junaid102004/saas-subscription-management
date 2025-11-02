// import "../styles/globals.css";
import "./globals.css";
import ApolloProviderClient from "./providers/ApolloCientProviders";
// import ClerkProviderClient from "./providers/";

export const metadata = { title: "Subscription Tracker" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <ClerkProviderClient/> */}
          <ApolloProviderClient>
            {children}
          </ApolloProviderClient>
        {/* </ClerkProviderClient> */}
      </body>
    </html>
  );
}
