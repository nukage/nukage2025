# TW Group Block: Properties Tracking

This document tracks all custom block properties implemented for the TW Group block, along with their Tailwind mapping, test status, and notes.

| Property               | Attribute Key           | Tailwind Mapping Example         | Editor UI         | Tested | Notes                                 |
|------------------------|------------------------|----------------------------------|-------------------|--------|---------------------------------------|
| Padding (Y)            | `paddingY`             | `py-8`                           | RangeControl      |        | Vertical padding                      |
| Padding (X)            | `paddingX`             | `px-8`                           | RangeControl      |        | Horizontal padding                    |
| Padding (Top)          | `paddingTop`           | `pt-8`                           | RangeControl      |        |                                       |
| Padding (Bottom)       | `paddingBottom`        | `pb-8`                           | RangeControl      |        |                                       |
| Padding (Left)         | `paddingLeft`          | `pl-8`                           | RangeControl      |        |                                       |
| Padding (Right)        | `paddingRight`         | `pr-8`                           | RangeControl      |        |                                       |
| Margin (Y)             | `marginY`              | `my-8`                           | RangeControl      |        | Vertical margin                       |
| Margin (X)             | `marginX`              | `mx-8`                           | RangeControl      |        | Horizontal margin                     |
| Margin (Top)           | `marginTop`            | `mt-8`                           | RangeControl      |        |                                       |
| Margin (Bottom)        | `marginBottom`         | `mb-8`                           | RangeControl      |        |                                       |
| Margin (Left)          | `marginLeft`           | `ml-8`                           | RangeControl      |        |                                       |
| Margin (Right)         | `marginRight`          | `mr-8`                           | RangeControl      |        |                                       |
| Background Color       | `backgroundColor`      | `bg-blue-500`                    | ColorPalette      |        | Tailwind color mapping                |
| Text Color             | `textColor`            | `text-white`                     | ColorPalette      |        | Tailwind color mapping                |
| Border Radius          | `borderRadius`         | `rounded-lg`                     | RangeControl      |        |                                       |
| Border Width           | `borderWidth`          | `border-2`                       | RangeControl      |        |                                       |
| Border Color           | `borderColor`          | `border-blue-500`                | ColorPalette      |        | Tailwind color mapping                |
| Box Shadow             | `boxShadow`            | `shadow-lg`                      | SelectControl     |        |                                       |
| Min Height             | `minHeight`            | `min-h-[400px]`                  | TextControl       |        | Use bracket notation for custom value |
| Max Width              | `maxWidth`             | `max-w-4xl`                      | Select/Text       |        |                                       |
| Alignment (Wide/Full)  | `align`                | `w-full`, `max-w-screen-xl`      | Toolbar           |        |                                       |
| Flex/Justify/Align     | `display`, `justify`, `items` | `flex`, `justify-center`, `items-center` | SelectControl | For flex/grid layouts                 |
| Gap                    | `gap`                  | `gap-4`                          | RangeControl      |        | For flex/grid layouts                 |
| Custom Class           | `customClassName`      | `custom-class`                   | TextControl       |        | User-defined classes                  |

## Instructions
- Add a new row for each property as you implement it.
- Mark the property as **Tested** (`✅`) when both the editor and front end output are verified.
- Use the **Notes** column for any caveats, limitations, or mapping details.

---

*Feel free to expand this table as your block evolves!*
