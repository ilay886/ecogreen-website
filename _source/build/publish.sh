#!/usr/bin/env bash
# Rebuilds the whole site from _source and replaces the built files at the repo root.
# Run from anywhere:  bash _source/build/publish.sh
set -euo pipefail
BUILD="$(cd "$(dirname "$0")" && pwd)"
SRC="$(dirname "$BUILD")"          # _source
ROOT="$(dirname "$SRC")"           # repo root
python3 -c "import PIL" 2>/dev/null || pip install --quiet --break-system-packages Pillow
node -e "require('playwright')" 2>/dev/null || (cd "$BUILD" && npm install --no-audit --no-fund)
rm -rf "$SRC/output"
node "$BUILD/export.js"
test -f "$SRC/output/index.html" && test -f "$SRC/output/sitemap.xml"
N=$(find "$SRC/output" -name index.html | wc -l)
[ "$N" -gt 500 ] || { echo "Build looks wrong: only $N pages"; exit 1; }
find "$ROOT" -mindepth 1 -maxdepth 1 ! -name .git ! -name _source -exec rm -rf {} +
cp -a "$SRC/output/." "$ROOT/"
rm -rf "$SRC/output"
echo "Built $N pages into $ROOT"
