import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/people/julio-herrera-velutini-biography-banking-legacy/",
        destination: "/finance/julio-herrera-velutini-banker-dynastic-custodian-international-finance-leader/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

