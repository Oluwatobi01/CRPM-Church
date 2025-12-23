<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Ep9Fg6ZpyKme_T4crYqgxM7w4U42Kt21

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploying to Netlify

To deploy this application to Netlify, you will need to configure the following build settings:

-   **Build command:** `npm run build`
-   **Publish directory:** `dist`

Additionally, you must set the `GEMINI_API_KEY` environment variable in the Netlify UI under **Site settings > Build & deploy > Environment**.
