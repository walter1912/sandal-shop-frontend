"use client";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import AppLayout from "~/modules/app-layout";
import "~/modules/global-styles/variables.css";
import "~/modules/global-styles/reset.css";
import store from "~/lib/store";
import CustomToastify from "~/modules/global-components/CustomToastify";
// import '~/modules/global-styles/global.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Provider store={store}>
          <AppLayout>
            {children}
            <CustomToastify />
          </AppLayout>
        </Provider>
      </body>
    </html>
  );
}
