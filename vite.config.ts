import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true
      },
      includeAssets: ["logo.svg", "icons/escudo-pwa.jpg", "icons/banner-header.jpg"],
      manifest: {
        name: "GEOLOCALIZACION GAD - DIVISION OPERACIONES",
        short_name: "GEO-GAD",
        description: "Geolocalizacion Division Operaciones GAD PBA",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        icons: [
          { src: "/icons/escudo-pwa.jpg", sizes: "192x192", type: "image/jpeg" },
          { src: "/icons/escudo-pwa.jpg", sizes: "512x512", type: "image/jpeg" },
          { src: "/icons/escudo-pwa.jpg", sizes: "1024x1024", type: "image/jpeg", purpose: "any maskable" }
        ]
      }
    })
  ]
});