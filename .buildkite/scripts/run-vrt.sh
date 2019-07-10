#!/bin/bash

set -eu

source buildkite-scripts/utils/logging.sh

buildkite-scripts/scripts/verify-node-modules.sh

log-info "Run visual regression tests"

set +e

buildkite-scripts/mars/wrap/npm.sh run test:vrt

EXIT_STATUS=$?

if [[ ! -z "${EXIT_STATUS}" ]]; then
  log-info "Uploading VRT difference images"

  # unsetting BUILDKITE_ARTIFACT_UPLOAD_DESTINATION is temporary solution
  # it changes upload destination from our private AWS bucket to Buildkite's one.
  BUILDKITE_ARTIFACT_UPLOAD_DESTINATION="" buildkite-agent artifact upload ".loki/difference/*.png"
fi

exit $EXIT_STATUS
