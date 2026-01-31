#!/bin/bash
set -e

# Daily maintenance script for absenin-web
# Runs at 5 PM UTC+7 (10 AM UTC) each day

REPO_DIR="/home/komi/.openclaw/workspace/absenin-web"
cd "$REPO_DIR"

echo "[$(date)] Starting daily maintenance"

# Pull latest changes
if git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  git pull origin main || echo "git pull failed, continuing..."
fi

# Install dependencies (prefer pnpm, fallback to npm)
if command -v pnpm > /dev/null 2>&1; then
  pnpm install || echo "pnpm install failed, continuing..."
else
  npm install || echo "npm install failed, continuing..."
fi

# Run lint with auto‑fix (ignore failures)
if npm run lint -- --fix; then
  echo "Lint passed"
else
  echo "Lint errors (ignored)"
fi

# Build to catch compile errors (ignore failures)
if npm run build; then
  echo "Build succeeded"
else
  echo "Build failed (ignored)"
fi

# Commit any changes (e.g., lint fixes, lockfile updates)
git config user.email "komi-bot@vann.my.id"
git config user.name "Komi-Misaki"

git add .
if ! git diff --cached --quiet; then
  git commit -m "chore: daily maintenance $(date -u +'%Y-%m-%d')"
  git push origin main || echo "git push failed"
  echo "Changes committed and pushed"
else
  echo "No changes to commit"
fi

echo "[$(date)] Daily maintenance completed"
