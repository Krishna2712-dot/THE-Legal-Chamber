import { defineField, defineType } from "sanity";

export default defineType({
  name: "media",
  title: "Media",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image (Deprecated - Use Images below)",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Single image field. For multiple images, use the 'Images' field below.",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Add multiple images for this media item.",
    }),
    defineField({
      name: "link",
      title: "Link URL (YouTube, Instagram, etc.)",
      type: "url",
    }),
    defineField({
      name: "mediaType",
      title: "Media Type",
      type: "string",
      options: {
        list: [
          { title: "YouTube", value: "youtube" },
          { title: "Instagram", value: "instagram" },
          { title: "Image", value: "image" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "summary",
      media: "image",
    },
  },
});

