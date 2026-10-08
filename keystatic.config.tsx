import { config, collection, fields, singleton } from "@keystatic/core";

// Edits are written straight to the filesystem when no repo is set. Set the GitHub env vars
// (see .env.example) to commit edits to the repo instead.
const repo = import.meta.env.PUBLIC_KEYSTATIC_GITHUB_REPO;

export default config({
  storage: repo
    ? { kind: "github", repo: repo as `${string}/${string}` }
    : { kind: "local" },
  singletons: {
    siteSettings: singleton({
      label: "Site settings",
      path: "src/data/site-settings",
      format: { data: "json" },
      schema: {
        title: fields.text({
          label: "Site title",
          description: "Shown in the header, footer and browser tab.",
          validation: { isRequired: true },
        }),
        description: fields.text({
          label: "Default description",
          description: "Fallback summary for search engines and social links.",
          multiline: true,
        }),
      },
    }),
  },
  collections: {
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            description: "Shown as the page heading. The URL is built from it.",
          },
        }),
        description: fields.text({
          label: "Description",
          description: "Short summary used by search engines and social links.",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "mdoc",
        }),
      },
    }),
  },
});
