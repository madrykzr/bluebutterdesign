# Wire the /contact form to a Google Sheet

The Bluebutter contact form posts straight to a **Google Apps Script Web App**
that appends each submission as a new row in your Google Sheet. This is the
free "Budget Smart" automation we offer clients — no monthly subscription, no
third-party SaaS.

You only set this up once.

---

## Step 1 — Prepare the Google Sheet

1. Open the sheet you want submissions to land in. The current draft is:
   <https://docs.google.com/spreadsheets/d/11Cq9u1ReiCMKH7VvLuoDwBrBRAmznW7uMFZiqno5YZI/edit>

2. Make sure the destination tab is named **`Leads`** (or change `SHEET_NAME` in
   the script). Rename the default `Sheet1` tab if you like.

3. Add these **column headers** in row 1, in this exact order:

   | A | B | C | D | E | F | G | H | I | J |
   |---|---|---|---|---|---|---|---|---|---|
   | Timestamp | Name | Business | Email | WhatsApp | Project type | Budget | Message | How they heard | Submitted at (UTC) |

   The script writes one row per submission in that order.

---

## Step 2 — Paste the Apps Script

1. Open the script project that's already linked to your Google account:
   <https://script.google.com/u/0/home>
2. Create a new project (or open the existing one you've been working on),
   then replace the default `Code.gs` contents with the block below.

```js
/**
 * Bluebutter Design — contact form webhook.
 *
 * Receives JSON POSTs from the Next.js server action and appends a row to a
 * Google Sheet. Optionally emails you a notification.
 */
const SHEET_ID = "11Cq9u1ReiCMKH7VvLuoDwBrBRAmznW7uMFZiqno5YZI";
const SHEET_NAME = "Leads";
const NOTIFY_EMAIL = "bluebutterdesign@gmail.com"; // set to "" to disable

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error("Sheet '" + SHEET_NAME + "' not found.");
    }

    // The Next.js server action posts JSON.
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),                  // A — Timestamp (Sheet's local time)
      data.name || "",             // B — Name
      data.business || "",         // C — Business
      data.email || "",            // D — Email
      data.whatsapp || "",         // E — WhatsApp
      data.projectType || "",      // F — Project type
      data.budget || "",           // G — Budget
      data.message || "",          // H — Message
      data.heardFrom || "",        // I — How they heard
      data.ts || "",               // J — Submitted at (server UTC timestamp)
    ]);

    // OPTIONAL — email yourself when a new lead arrives.
    if (NOTIFY_EMAIL) {
      try {
        MailApp.sendEmail({
          to: NOTIFY_EMAIL,
          subject: "✨ New Bluebutter enquiry — " + (data.name || "Unknown"),
          body: [
            "A new lead just landed in your Google Sheet.",
            "",
            "Name:        " + (data.name || "—"),
            "Business:    " + (data.business || "—"),
            "Email:       " + (data.email || "—"),
            "WhatsApp:    " + (data.whatsapp || "—"),
            "Project:     " + (data.projectType || "—"),
            "Budget:      " + (data.budget || "—"),
            "Heard via:   " + (data.heardFrom || "—"),
            "",
            "Message:",
            data.message || "—",
            "",
            "Sheet: https://docs.google.com/spreadsheets/d/" + SHEET_ID,
          ].join("\n"),
        });
      } catch (mailErr) {
        // Don't fail the request just because email broke.
        console.error("MailApp failed: " + mailErr);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Useful for quickly verifying the deployment is reachable —
 * visit the /exec URL in a browser, you should see {"ok":true,"ping":"pong"}.
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, ping: "pong" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save (Ctrl/Cmd-S). Give the project a name like **"Bluebutter Contact Form"**.

---

## Step 3 — Deploy as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon → **Web app**.
3. Settings:
   - **Description**: `Bluebutter contact form v1`
   - **Execute as**: `Me (bluebutterdesign@gmail.com)`
   - **Who has access**: `Anyone` ← this lets the Next.js server hit it without auth.
4. Click **Deploy**.
5. The first time, Google will ask you to authorise. Click **Authorize access**,
   pick your account, click **Advanced → Go to (project name)** (this only
   appears because it's an unverified personal script — totally normal), then
   **Allow**.
6. Copy the **Web app URL** that ends in `/exec`. It looks like:
   `https://script.google.com/macros/s/AKfycb…/exec`

---

## Step 4 — Plug the URL into the site

In your project root, open `.env.local` (we created a placeholder for you) and
paste the `/exec` URL:

```env
GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycb…/exec"
```

Then restart the dev server (`npm run dev`) so Next.js picks up the new env
variable. Submit a test entry through `/contact` — a new row should appear in
the sheet within a second.

> 🧪 **Quick health check**: paste the `/exec` URL straight into a browser. You
> should see `{"ok":true,"ping":"pong"}`. If you see a Google login page
> instead, the deployment's access isn't `Anyone` — redeploy.

---

## Updating the script later

Apps Script Web Apps have **versioned deployments**. If you edit the script,
you must:

1. Click **Deploy → Manage deployments**.
2. Click the pencil/edit icon next to your live deployment.
3. Change **Version** to `New version` and **Deploy**.

The `/exec` URL **stays the same** — no need to update `.env.local`.

---

## Sheet tips

- **Format column A** as `Date / Date time` so the timestamps render nicely.
- **Freeze row 1** (View → Freeze → 1 row) so headers stay visible.
- Want to filter / sort leads by source? Apply a Sheet filter to the header
  row (Data → Create a filter).

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| Form shows "Something went wrong" toast | Apps Script returned an error — check the project's "Executions" tab for the stack trace. |
| `Sheet 'Leads' not found` in execution log | The tab is named differently. Update `SHEET_NAME` at the top of the script. |
| Rows appear but Email notification doesn't | First-time `MailApp` use can need extra authorisation. Run `doPost` once manually via the editor (with a dummy `e` event) to trigger the auth prompt, or just send yourself a test enquiry through the form. |
| Webhook responds 200 but no row appended | The sheet tab might be hidden / read-only, or the script is writing to the wrong `SHEET_ID`. Confirm the ID in the URL of your sheet. |
