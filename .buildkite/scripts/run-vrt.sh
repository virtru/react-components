#!/bin/bash

set -eu

source buildkite-scripts/utils/logging.sh

buildkite-scripts/scripts/verify-node-modules.sh

log-debug "Run visual regression tests"

buildkite-scripts/mars/wrap/npm.sh run test:vrt
