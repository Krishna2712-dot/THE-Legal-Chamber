import { defineField, defineType } from "sanity";

export default defineType({
  name: "judgement",
  title: "Noted Judgement",
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
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link URL",
      type: "url",
    }),
    defineField({
      name: "content",
      title: "Full Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "court",
      title: "Court",
      type: "string",
      options: {
        list: [
          { title: "Supreme Court", value: "supreme" },
          { title: "High Court", value: "high" },
          { title: "District Court", value: "district" },
          { title: "Consumer Commission", value: "consumer" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "caseNumber",
      title: "Case Number",
      type: "string",
    }),
    defineField({
      name: "judgementDate",
      title: "Judgement Date",
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
    },
  },
});

