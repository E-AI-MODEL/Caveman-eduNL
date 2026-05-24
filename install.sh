#!/usr/bin/env bash
set -euo pipefail

if ! command -v node >/dev/null 2>&1; then
  echo "Caveman-eduNL heeft Node >=18 nodig." >&2
  exit 1
fi

node "$(cd "$(dirname "$0")" && pwd)/bin/install.js" "$@"
