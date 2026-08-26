# GitHub upload checklist

# Background parity checklist

## Large asset cleanup

- [ ] Remove the duplicate local background file that blocks Manus checkpoint saving.
- [ ] Keep the GitHub-hosted background as the source for both live versions.
- [ ] Save a new checkpoint and verify the GitHub Pages background.


## Verification notes

GitHub Pages now loads the same shared hero background asset from the public repository. The homepage returns HTTP 200, the background asset returns HTTP 200, and the rendered GitHub Pages preview shows the shared Earth-at-night hero background behind the Arabic hero copy.


- [x] Locate the original Manus hero background asset.
- [x] Upload the same background to the GitHub repository.
- [x] Update CSS to use the GitHub-hosted background and redeploy.
- [x] Verify the background on the GitHub Pages homepage.

# GitHub image visibility checklist

- [x] Add the user-selected image to the repository as a deployable asset.
- [x] Place the image in the intended hero location in the website.
- [x] Rebuild and publish GitHub Pages, then verify the image URL.

# Logo parity troubleshooting

- [ ] Compare the exact Manus and GitHub Pages URLs used by the user.
- [ ] Verify the deployed GitHub bundle and logo asset source.
- [ ] Fix and redeploy if the GitHub version is stale or points to a missing asset.

# Version parity checklist

- [ ] Compare Manus and GitHub Pages source and live responses.
- [ ] Choose the latest verified local version as the source of truth.
- [ ] Sync the same files and assets to GitHub and publish Manus.
- [ ] Verify both URLs show the same update.

# Logo integration checklist

- [ ] Prepare the user-provided logo as a deployable web asset.
- [ ] Add the logo beside the name in the header and tune responsive sizing.
- [ ] Verify the logo on desktop and mobile, then save a new checkpoint.

# Namecheap migration checklist

- [ ] Confirm the Namecheap hosting type and target domain.
- [ ] Prepare a static production package compatible with Namecheap public_html.
- [ ] Upload files and configure the domain/DNS and HTTPS.
- [ ] Verify the live site and document the update workflow.

# GitHub Pages deployment checklist

- [ ] Make `abazrx1-cloud/abazr-portfolio` public with the user's explicit approval.
- [ ] Confirm repository visibility and GitHub Pages eligibility.
- [ ] Add a production build workflow for GitHub Pages.
- [ ] Configure the correct Vite base path and asset URLs.
- [ ] Verify the deployed GitHub Pages URL.
- [x] Sync the latest logo integration to GitHub and rerun Pages deployment.
- [x] Diagnose and fix the failed GitHub Actions run.
- [ ] Fix the GitHub Pages subpath routing that shows the app 404 page.
- [x] Rebuild, redeploy, and verify the GitHub Pages homepage.
- [x] Recheck the live GitHub Pages response and diagnose the user's access failure.
- [ ] Reproduce the reported browser failure and verify the exact URL/path.
- [ ] Fix any remaining routing or deployment issue and re-verify from an external request.

# Visual refresh checklist

- [ ] Review the new Nile Market URL and confirm the destination.
- [ ] Refine the palette and replace the typography with a professional Arabic-friendly system.
- [x] Update all Nile Market links and labels.
- [ ] Test desktop and mobile previews, then save a new checkpoint for the visual refresh.

# Arabic localization checklist

- [ ] Translate all visible portfolio content and navigation into Arabic.
- [ ] Set the document language and right-to-left direction.
- [ ] Tune typography, alignment, spacing, and mobile navigation for RTL.
- [ ] Capture desktop and mobile previews and save an Arabic checkpoint.


- [ ] Verify the project working tree and current files.
- [x] User created a GitHub repository visible as `abazr_portfoli...`; verify the full name.
- [ ] Push the Arabic website source and configuration to `abazrx1-cloud/abazr_portfoli`.
- [ ] Confirm the remote repository, default branch, and uploaded files are accessible.
