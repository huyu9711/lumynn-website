// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	// TODO: replace with production domain before launch (e.g. https://lumynn.com)
	site: "https://lumynn.com",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			// Disabled because the bundled workerd binary requires GLIBC_2.32+ (not present on this Debian VM).
			// The site is mostly static and does not currently use bindings (KV, etc.) in dev.
			// Re-enable on a newer host (Debian 12+ / Ubuntu 22.04+ / etc.) when you need local emulation of Cloudflare platform APIs.
			enabled: false,
		},
	}),

	// Make `npm run dev` listen on 0.0.0.0 (all interfaces) instead of only localhost.
	// This lets you reach the dev server from outside the VM (e.g. your host browser).
	// Astro will print a "Network" address (your VM's IP) in the terminal.
	server: {
		host: true,
	},
});
