# R Square Mobiles — Deployment Guide

This is a single Python service: it serves the static site (`index.html`,
`contact.html`, `css/`, `js/`) **and** handles the contact form API
(`/api/contact`, `/api/submissions`, `/api/download-excel`), saving entries
into `contact_submissions.xlsx`.

## Deploy to Render (recommended, free tier available)

1. Push this folder to a GitHub repository.
2. Go to https://render.com → **New +** → **Web Service** → connect your repo.
3. Configure:
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python server.py`
4. Add a **persistent disk** (Render dashboard → your service → Disks):
   - Mount path: `/var/data`
   - Then add an environment variable: `DATA_DIR=/var/data`
   - Without this step, `contact_submissions.xlsx` will reset every time
     the service restarts or redeploys, since Render's default filesystem
     is not persistent.
5. Click **Create Web Service**. Render will give you a public URL like
   `https://r-square-mobiles.onrender.com`.

Render's free tier spins the service down after inactivity, so the first
request after idling will be slow (~30s) while it wakes up. If that matters
for your launch, use a paid "Starter" instance (~$7/mo) instead.

## Deploy to Railway (alternative)

Same idea: connect the repo, Railway auto-detects Python, add a volume for
`DATA_DIR`, set the start command to `python server.py`. Railway reads the
`PORT` env var automatically, same as this code expects.

## Before you go live

- **Product photos**: `images/` is currently empty. Add photos matching the
  filenames used in `js/script.js` (e.g. `images/case-magnetic.jpg`). Until
  then, cards show a placeholder icon instead of a broken image — the site
  still works, it just looks unfinished.
- **Custom domain**: both Render and Railway let you attach your own domain
  (e.g. rsquaremobiles.com) for free once deployed — look for "Custom
  Domains" in the service settings.
- **Backups**: `/api/download-excel` lets you download the submissions file
  any time. Worth checking in on it periodically regardless of the
  persistent-disk setup above.

## Run locally

```bash
pip install -r requirements.txt
python server.py
```

Then visit http://localhost:5000
