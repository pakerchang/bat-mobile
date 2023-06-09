import { Inter } from "next/font/google";
import Providers from "./lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ubike 站點車輛狀態查詢",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW">
      <body className={inter.className} suppressHydrationWarning={true} style={{ margin: 0 }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
