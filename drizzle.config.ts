import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  console.warn(
    "⚠️  DATABASE_URL not set. Database migrations will not be available."
  );
  console.warn("   The application will use in-memory storage instead.");
  console.warn("   Set DATABASE_URL to enable database features.");
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "postgresql://localhost:5432/deepmed",
  },
});
