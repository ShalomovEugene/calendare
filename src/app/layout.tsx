/* eslint-disable react/no-children-prop */
import GlobalLayout from "@/components/GlobalLayout/GlobalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
  description: "Calendar",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <GlobalLayout children={children} />
      </body>
    </html>
  );
};

export default RootLayout;
