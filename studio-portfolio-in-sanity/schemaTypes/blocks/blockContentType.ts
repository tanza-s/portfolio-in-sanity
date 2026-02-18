import { defineType, defineArrayMember } from "sanity";

export const blockContentType = defineType({
  name: "blockContent",
  title: "Block Content",
    type: "array",
    of: [
        defineArrayMember({
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "Heading 1", value: "h1" },
                { title: "Heading 2", value: "h2" },
                { title: "Heading 3", value: "h3" },
                { title: "Heading 4", value: "h4" },
                { title: "Heading 5", value: "h5" },
                { title: "Heading 6", value: "h6" },
                { title: "Quote", value: "blockquote" },
            ],
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Numbered", value: "number" },
            ],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    { title: "Underline", value: "underline" },
                    { title: "Strike", value: "strike-through" },
                    { title: "Code", value: "code" },
                ],
                annotations: [
                    {
                        name: "link",
                        type: "object",
                        title: "URL",
                        fields: [
                            {
                                name: "href",
                                type: "url",
                                title: "URL",
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: "image",
            options: { hotspot: true },
        }),
    ],
});