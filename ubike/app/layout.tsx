import { Inter } from "next/font/google";
import Providers from "./lib/Providers";
import { LayoutPublic } from "./layouts/index.style";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ubike 車輛即時狀態查詢",
  description: "ubike 車輛即時狀態查詢",
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
