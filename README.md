# Bolt Calculator

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Add%20Your%20License-lightgrey)

## Project Overview

Bolt Calculator is a full-stack Next.js (App Router) application for engineering-oriented bolt selection and load verification.

Given user input (plate thickness, thread engagement, preload, external load, lateral load), the system:

- validates the payload with Zod,
- iterates through bolt sizes and property classes from PostgreSQL via Prisma,
- performs mechanical checks,
- selects the first configuration that passes all criteria,
- presents results in UI tables, and
- exports structured PDF reports.

## Features

- Input validation on both client and API layers using shared Zod schemas.
- Candidate bolt selection engine based on computed stresses and design limits.
- Result dashboard with verification/utilization display.
- Local history of recent analyses (stored in browser `localStorage`, up to 5 records).
- PDF export endpoint using `@react-pdf/renderer`.
- PostgreSQL + Prisma-backed reference datasets (bolts, property classes, strength limits).

## Screenshots

Add screenshots to showcase core flows. Suggested path: `public/screenshots/`

```text
public/
  screenshots/
    01-home.png
    02-input-form.png
    03-result-dashboard.png
    04-history.png
    05-report.png
```

| Page / Flow      | Preview                                                         |
| ---------------- | --------------------------------------------------------------- |
| Home             | ![Home](public/screenshots/01-home.png)                         |
| Input Form       | ![Input Form](public/screenshots/02-input-form.png)             |
| Result Dashboard | ![Result Dashboard](public/screenshots/03-result-dashboard.png) |
| History          | ![History](public/screenshots/04-history.png)                   |
| Report           | ![Report](public/screenshots/05-report.png)                     |

> Tip: Keep screenshots at a consistent aspect ratio (for example `16:9`) for a cleaner portfolio presentation.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** JavaScript/TypeScript mix (`.js/.jsx` app logic + Prisma/TS config)
- **Styling/UI:** Tailwind CSS v4, Radix UI primitives
- **Validation:** Zod
- **Database:** PostgreSQL
- **ORM:** Prisma 7 (`@prisma/client`, `@prisma/adapter-pg`)
- **PDF:** `@react-pdf/renderer`

## Architecture Overview

The project uses a unified Next.js architecture:

- **Frontend (client components):** pages and UI components under `src/app`.
- **Backend (server routes):** API handlers under `src/app/api`.
- **Domain engine:** calculation/orchestration logic in `src/core`.
- **Data access layer:** Prisma repositories in `lib/*.repo.js`.

### Frontend ↔ Backend Interaction

1. User submits form in `src/app/input/page.js`.
2. Frontend validates input and sends `POST /api/calculate`.
3. API validates again and calls `src/core/runAnalysis_V2.js`.
4. Analysis result is returned and stored in context + local history.
5. Result and history report pages can call `POST /api/pdf` to export a report.

## Calculation Flow

- Entry point: `src/core/runAnalysis_V2.js`
- Iteration strategy:
  - Fetch all bolts (`getAllBolts`) and property classes (`getAllPropertyClasses`)
  - For each bolt/property pair:
    - Run `centralCalculations` (`src/core/calculations/centralCalc.js`)
    - Run pass/fail checks in `boltSelection` (`src/core/decision/selectBolt.js`)
    - Return first passing combination
- Failure mode:
  - Throws when no candidate satisfies all limits

## API Endpoints

### `POST /api/calculate`

Runs analysis for one input payload.

**Request body**

```json
{
  "plateThickness": 16,
  "engagedThreadLength": 8,
  "externalLoad": 12000,
  "preLoad": 20000,
  "lateralLoad": 500
}
```

**Success response (shape)**

```json
{
  "curBolt": {
    "designation": "M8",
    "nominalDiameter": 8,
    "threadMeanDiameter": 6.82,
    "tensileStressArea": 36.6
  },
  "curBoltProperty": { "className": "8.8", "xValue": 8, "yValue": 0.8 },
  "limits": {
    "tensileStress": 400,
    "shearStress": 192,
    "plateBearingStress": 640,
    "threadShearStress": 192,
    "preLoad": 25984,
    "separationLoad": 12000
  },
  "obtainedValues": {
    "tensileStress": 357.2,
    "shearStress": 152.8,
    "plateBearingStress": 75,
    "threadShearStress": 95.9,
    "preLoad": 20000,
    "separationLoad": 21250.3
  }
}
```

### `POST /api/pdf`

Generates a PDF report from a validated analysis payload.

**Request body**

- `curBolt`
- `curBoltProperty`
- `limits`
- `obtainedValues`
- `userInputData`

**Response**

- `200` with `application/pdf` binary payload
- `4xx/5xx` JSON error when validation or generation fails

## Backend Structure

- `src/app/api/calculate/route.js`: input validation + analysis execution.
- `src/app/api/pdf/route.js`: report payload validation + PDF generation.
- `src/core/runAnalysis_V2.js`: orchestration loop.
- `src/core/calculations/centralCalc.js`: pre/main/limit calculations.
- `src/core/decision/selectBolt.js`: pass/fail criteria checks.
- `src/core/pdf_generation/*`: PDF document and rendering logic.
- `lib/*.repo.js`: database query functions via Prisma client.
- `lib/prisma.ts`: Prisma + PostgreSQL adapter initialization.

## Frontend Structure

- `src/app/layout.js`: root layout, fonts, context provider.
- `src/app/input/page.js`: main data entry + analysis trigger.
- `src/app/result/page.js`: selected bolt details + verification table + PDF export.
- `src/app/history/page.js`: recent analysis list from localStorage.
- `src/app/history/report/page.js`: detailed historical report + PDF export.
- `src/app/components/*`: reusable UI and page-specific visual components.
- `src/app/context/ResultContext.js`: shared state for result and history.

## Folder Structure (High-Level)

```text
src/
	app/
		api/
			calculate/route.js
			pdf/route.js
		input/page.js
		result/page.js
		history/page.js
		history/report/page.js
		components/
		context/
	core/
		runAnalysis_V2.js
		calculations/centralCalc.js
		decision/selectBolt.js
		pdf_generation/
lib/
	prisma.ts
	bolts.repo.js
	property.repo.js
	strength.repo.js
prisma/
	schema.prisma
	migrations/
	seed.ts
generated/prisma/
```

## Installation

### Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL instance

### Steps

```bash
npm install
```

Create `.env` in project root:

```env
DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<db>?schema=public"
```

Generate Prisma client and run migrations:

```bash
npm run migrate
```

Optional: seed reference data (if needed for a fresh database):

```bash
npx prisma db seed --config ./prisma.config.ts
```

Start development server:

```bash
npm run dev
```

## Development Setup

- Default app URL: `http://localhost:3000`
- Root route redirects to `/home`.
- Input workflow starts at `/input`.

### Useful Scripts

```bash
npm run dev      # start Next.js dev server
npm run build    # prisma generate + next build
npm run start    # run production server
npm run lint     # eslint
npm run migrate  # prisma migrate dev (configured)
npm run studio   # prisma studio (configured)
```

## Build & Production

Build the app:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

## Environment Variables

- `DATABASE_URL` (**required**): PostgreSQL connection string used by Prisma.
- `NODE_ENV` (standard): controls logging behavior and runtime mode.
- `VERCEL` (platform-provided, optional): used for environment checks in logs.

## Deployment Notes (Next.js)

- Ensure `DATABASE_URL` is configured in deployment environment variables.
- `build` script already runs Prisma client generation before `next build`.
- Run migrations against the target database before serving traffic.
- For Vercel or similar platforms:
  - set environment variables per environment (Preview/Production),
  - ensure the database is reachable from server runtime,
  - validate PDF generation in deployed server environment.

## Future Improvements (Technical)

- Add automated tests for calculation engine and API contracts.
- Add typed domain models and stricter response schemas for internal engine output.
- Improve observability (structured logs, request correlation, basic metrics).
- Introduce server-side persistence for history (currently client localStorage only).
- Consider domain-driven module boundaries for calculation packages.
- Add CI pipeline checks (`lint`, build, migration safety checks).

---

## Challenges Faced

- Puppeteer pdf library not working or taking too much time returning a pdf. So resulting in 500 errors.
- Desktop dashboard not working for mobile devices.
- History feature was difficult to implement architecture wise.
- Imagining complete data flow from start to finish.

## Key Learnings

- Always study the selected tech stack and choose libraries and tools compatible with those.
- Make a working version of the product first then gradual improvements.
- Use of AI must be limited to boilerplate. You must know what to do before commanding AI to do something.
- Its always a good idea to make a rough architecture using pen and paper so you get the clear idea of the product design and data flow.

## Design Decisions

- Backend in /core: separates frontend from backend, keeping security intact.
- Why NEXT.js: It's a fullstack framework perfect for lightweight backend projects. Also its quite fast for development due to minimal configuration.
- Why tailwind: due to its predefined classes it saves lot of time.
- Why localStorage: Actually history should be stored in DB(next version work), but localStorage saves time needed for DB calls and makes system quick and less expensive.

## Future Vision

- User profile system.
- Adding more calculators for more applications.
- Scaling to handle 10000+ users concurrently.

