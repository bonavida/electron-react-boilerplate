# Styles folders structure

This folders structure is a variant of the [7-1 pattern](https://sass-guidelin.es/#architecture) (7 folders, 1 file), where basically you have all your partials stuffed into 7 different folders, and a single file at the root level (usually named main.scss) which imports them all to be compiled into a CSS stylesheet.

This boilerplate only uses 6 folders and 1 main file because we don't think that the missing folder `themes` is relevant at this point. These 6 folders and 1 file are:

* **Abstracts:** Handles functions, mixins and variables.
* **Base:** Animations, base, typography, and utilies.
* **Components:** Have a single scss file for each individual component.
* **Layout:** Header, footer, sidebar, grid, navigation...
* **Pages:** Have a single scss for each specific page.
* **Vendors:** Handles 3rd party CSS.
* **main.scss:** Main SASS file.