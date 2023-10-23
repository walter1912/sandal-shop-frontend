"use client";
import { Provider } from "react-redux";
import AppLayout from "~/modules/app-layout";
import "~/modules/global-styles/variables.css";
import "~/modules/global-styles/reset.css";
import "~/modules/global-styles/global.css";

import store from "~/lib/store";
import CustomToastify from "~/modules/global-components/CustomToastify";
import { usePathname, useSearchParams } from "next/navigation";
// import '~/modules/global-styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; 
}) {
  const pathname = usePathname();
 
  return (
    <html lang="vi">
      <body style={{ backgroundColor: "#fafafa", padding: "20px 0" }}>
        <Provider store={store}>
          {String(pathname).startsWith("/admin") ? (
            children
          ) : (
            <AppLayout>
              {children}
              <CustomToastify />
            </AppLayout>
          )}
        </Provider>
      </body>
    </html>
  );
}
