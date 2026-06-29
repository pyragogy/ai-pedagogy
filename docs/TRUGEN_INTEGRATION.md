# TruGen AI Teammate Integration

## Overview

The TruGen AI Teammate (Agent ID: `13a34647-a3ce-431f-8792-ea649e6e53cc`) has been integrated into the Pyragogy Syllabus to conduct structured cognitive interviews based on the Cognitive Interview Protocol (CIP-KGE).

## Architectural Strategy: Component Transclusion (Option B)

We chose to embed the official TruGen iframe and encapsulate it within a reusable Quartz markdown component.

### Why not a React Widget?
- Quartz v5 is a Static Site Generator (SSG) that utilizes Preact primarily for build-time compilation. It does not ship a client-side React runtime by default for rendering interactive widgets inside markdown content.
- Injecting an external React library like `@aiteammate/agent-widget` would require creating custom plugin architecture and significantly increasing the client-side bundle size.

### Why an Iframe Transclusion?
- **Zero Dependencies**: Keeps the website lightweight and maintenance-free.
- **Isolated Styling**: The iframe natively prevents CSS bleed, protecting the syllabus design language.
- **Quartz Native**: Instead of placing raw HTML directly into `index.md`, the iframe is abstracted into `content/trugen-teammate.md` (`unlisted: true`). We then use Obsidian/Quartz's native file transclusion feature (`![[trugen-teammate]]`) to embed it. This provides the modularity of a component without the heavy JavaScript tooling.

## Files Modified / Created

- **`content/trugen-teammate.md`** (NEW): A reusable markdown file acting as a component. Contains the responsive HTML container, the loading state, and the iframe. It is marked as `unlisted: true` to prevent it from appearing in the site explorer.
- **`content/index.md`** (MODIFIED): Added the introductory text and the `![[trugen-teammate]]` embed under the "Talk with the Pyragogy Research Teammate" section.
- **`docs/TRUGEN_INTEGRATION.md`** (NEW): This documentation file.

## How to Update the Agent ID

If you ever need to replace or update the Agent ID, simply open `content/trugen-teammate.md` and modify the `src` attribute of the iframe:

```html
<iframe 
  src="https://app.trugen.ai/embed/YOUR-NEW-AGENT-ID" 
  title="TruGen AI Research Teammate" 
  ...
></iframe>
```

## Responsive Layout Details

The widget avoids fixed viewports to maintain fluidity across devices:
- Uses `width: 100%`.
- Employs a `min-height: 600px` to guarantee enough breathing room for the chat interface.
- Includes a `max-height: 85vh` so the widget never overwhelms the viewport entirely on small mobile screens.
- Displays a `Loading Research Teammate...` fallback text while the external iframe is resolving.

## Future Improvements

- If TruGen releases a vanilla JS web-component (e.g. `<trugen-teammate agent="...">`), we can replace the iframe entirely for deeper DOM integration.
- If bi-directional communication is required (e.g., passing the user's current syllabus context to the AI), we can implement `window.postMessage` listeners in a custom `quartz/components` script.
