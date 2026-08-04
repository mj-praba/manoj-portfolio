# Deployment

Each app deploys independently to its own S3 bucket + CloudFront distribution, on its own domain. There is no shared host and no path-based routing between the two — `web-backend` and `web-fullstack` never know about each other at runtime.

## Pipeline

- `.github/workflows/ci.yml` runs typecheck/lint/build on every PR and push to `main`, as a gate.
- `.github/workflows/deploy-backend.yml` and `.github/workflows/deploy-fullstack.yml` trigger on push to `main` (path-filtered to their app + `packages/**`, since a shared-package change can affect either build), or manually via `workflow_dispatch`. `main` is the production branch — merging a PR into it deploys.
- Both call the reusable workflow `.github/workflows/_deploy-static-site.yml`, which:
  1. Installs deps with pnpm and runs the app's build (`pnpm run build:backend` / `build:fullstack`).
  2. Assumes an AWS IAM role via **GitHub OIDC** (`aws-actions/configure-aws-credentials`) — no long-lived AWS access keys stored in GitHub.
  3. `aws s3 sync`s the `dist/` output to the app's bucket — hashed assets get a long, immutable cache; `index.html` is set to no-cache so deploys are picked up immediately.
  4. Creates a CloudFront invalidation (`/*`) so the new `index.html` (and any changed root files) is served right away.

## Required GitHub configuration (per repo)

**Repository variable:**
- `AWS_REGION` — e.g. `ap-south-1`

**Repository secrets** (one set per app, since both apps live in this one repo):
- `AWS_ROLE_ARN_BACKEND`, `S3_BUCKET_BACKEND`, `CLOUDFRONT_DISTRIBUTION_ID_BACKEND`
- `AWS_ROLE_ARN_FULLSTACK`, `S3_BUCKET_FULLSTACK`, `CLOUDFRONT_DISTRIBUTION_ID_FULLSTACK`

These values come from the Terraform outputs in the sibling infrastructure repo (below) once it's applied.

## Infrastructure

The AWS resources (S3 buckets, CloudFront distributions, the GitHub OIDC provider, and the two deploy IAM roles) are defined as Terraform in the sibling repo **[`mj-cloud-terraform`](../mj-cloud-terraform)**, not in this repo — keeping infrastructure-as-code separate from application code. See that repo's README for how to configure the AWS account and apply it; its `outputs.tf` prints the exact values to paste into the GitHub secrets/variables above.

This repo's GitHub Actions workflows only *use* that infrastructure (assume the role, sync to the bucket, invalidate the distribution) — they never create or modify it.

The deploy roles in `mj-cloud-terraform` trust `refs/heads/main` in their OIDC condition, matching the deploy workflows here — no branch mismatch.
