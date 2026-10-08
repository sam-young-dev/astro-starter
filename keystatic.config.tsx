import { config, collection, fields } from "@keystatic/core";

// Edits are written straight to the filesystem when no repo is set. Set the GitHub env vars
// (see .env.example) to commit edits to the repo instead.
const repo = import.meta.env.PUBLIC_KEYSTATIC_GITHUB_REPO;

export default config({
  storage: repo
    ? { kind: "github", repo: repo as `${string}/${string}` }
    : { kind: "local" },
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
