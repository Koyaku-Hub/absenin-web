# Context

## Project Overview
**absenin‑web** is a Next.js (TypeScript) application that provides an attendance‑tracking system using QR codes. Users scan QR codes to record their presence, and admins can view attendance data via a dashboard.

## Tech Stack
- **Framework:** Next.js 14 (app router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context / hooks (see `stores/`)
- **Database:** Prisma (via `prisma/` – not included in the repo but referenced)
- **QR handling:** `qrcode` library for generation, custom scanner component for reading.

## Key Directories
- `app/` – Next.js route handlers and pages.
  - `app/dashboard/` – Admin and account dashboards.
  - `app/attend/` – Attendance scanning page.
  - `app/login/` – Authentication pages.
- `components/` – Reusable UI components (dialogs, tables, etc.).
- `lib/` – Utility functions (e.g., QR generation, date helpers).
- `stores/` – React context stores for user and attendance data.
- `public/` – Static assets (icons, images, QR examples).

## Running the Project Locally
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Set up environment variables (copy `.env.example` to `.env` and fill values).
3. Run the development server:
   ```bash
   pnpm dev
   ```
   The app will be available at `http://localhost:3000`.
4. Run tests:
   ```bash
   pnpm test
   ```

## Development Tips
- **Adding a new page:** Create a folder under `app/` with a `page.tsx` file.
- **Updating UI components:** Modify files in `components/` and the changes will propagate.
- **Database migrations:** Use Prisma CLI (`npx prisma migrate dev`).
- **Generating QR codes:** Use the helper in `lib/qr.ts`.

---
Feel free to extend this file with more details (deployment, CI, etc.).