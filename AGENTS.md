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

- Keep user-facing copy in src/i18n/translations.ts and consume the root language provider; one dictionary prevents English/Arabic drift.
- Initialize language as English for SSR and restore saved choices after hydration; this avoids server/browser mismatches while setting document language and direction.
- Use inherited direction, logical alignment/position utilities, and scoped Arabic font overrides; RTL mirrors layout without changing the English design.
