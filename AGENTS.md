<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep team biographies and portraits centralized in `site-data.ts`; the dedicated Team route is their only full-page presentation, preventing content drift.
- Keep homepage client testimonials in the shared autoplay carousel; it preserves one testimonial source while supporting accessible manual controls.
- Keep brand images (logo, favicon) as real files inside the project that the app imports directly, so a source export runs and deploys anywhere without depending on hosted asset references.
