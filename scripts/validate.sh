#!/usr/bin/env sh
set -eu

required_files="
app/layout.tsx
app/page.tsx
app/globals.css
src/components/hero.tsx
src/components/contact.tsx
src/data/site.ts
package.json
next.config.mjs
Dockerfile
"

for file in $required_files; do
  if [ ! -s "$file" ]; then
    echo "Missing or empty file: $file" >&2
    exit 1
  fi
done

grep -q 'lang="pt-BR"' app/layout.tsx
grep -q 'openGraph' app/layout.tsx
grep -q 'Allan Cairis' src/components/hero.tsx
grep -q 'framer-motion' package.json

echo "Next.js checks passed."
