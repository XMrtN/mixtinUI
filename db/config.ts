import { column, defineDb, defineTable } from "astro:db";

const createTable = () =>
  defineTable({
    columns: {
      id: column.text({ primaryKey: true }),
      tailwindCode: column.text({ multiline: true, optional: true }),
      cssCode: column.text({ multiline: true, optional: true }),
      reactCode: column.text({ multiline: true, optional: true }),
    },
  });

const Accordions = createTable();
const Breadcrumbs = createTable();
const Buttons = createTable();
const Carousels = createTable();
const Dropdowns = createTable();
const Modals = createTable();
const Tabs = createTable();

export default defineDb({
  tables: {
    Accordions,
    Breadcrumbs,
    Buttons,
    Carousels,
    Dropdowns,
    Modals,
    Tabs,
  },
});
