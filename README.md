# Hugo's Anathema

<img align="right" src="https://github.com/calligraffiti/hugos-anathema/blob/master/static/img/hugos-thumb.jpg">*Hugo's Anathema* is an anti-theme, it is a bare bones [Hugo](https://gohugo.io/) starter template to get you rolling on your own themes a bit quicker.

Styles are written in SASS, scss format. The files are organized in module/component style. Feel free to throw out and reorganize.

## Requirements
This app requires [Node.js](https://nodejs.org/en/download/) packages to compile the source code and generate files. This repository automatically pushes changes to the live site. Please edit locally or on a branch to confirm your changes build properly before pushing your changes to the Master branch.

To check if you have [Node.js](https://nodejs.org) installed, run this command in your [terminal](https://en.wikipedia.org/wiki/Terminal_emulator):<br>
`node -v`

To confirm that you have [npm](https://www.npmjs.com/) installed you can run this command in your terminal:<br>
`npm -v`

---

## Install Instructions
Install provided packages or substitute your own:
`npm install`

### Hugo
A static site generator, [Hugo](https://gohugo.io), is used to quickly edit and generate content.

To start a local server run this command:<br>
`hugo server`

Then navigate to `localhost:1313` in your browser to view a live local server with the running app.

For more information visit the [Hugo Documentation](https://gohugo.io/getting-started/) for more information.

### CSS
Styles are written in SCSS. Run `npm run-script watch:sass` to to preview your changes and, `npm run-script build` to compile, concatenate and minimize all your styles into one style sheet.

## Directory Structure
```
├── archetypes                // templates used to generate new pages
├── [] content.toml           // file used to set hugo app settings, meta, menu, etc.
├── content                   // app content or pages
|   ├── directory             // use sub-directories to create sections. E.g. /blog
├── data                      // data content yaml files (mostly for index content)
├── layouts                   // page layout
|   ├── _default              // - default page layout
|   ├── partials              // - site components
|   ├── shortcodes            // - short code snippets to add functionality to pages
|   ├── directory             // - use sub-directories for section layouts
├── public                    // build directory
├── [] package.json           // file containing required node packages and build instructions
├── sass                      // app scss styles
|   ├── abstracts             // - fuctions, variables and mixins
|   ├── base                  // - base elements, typography & utilities
|   ├── components            // - styles for reusable components
|   ├── layout                // - layout specific styling
|   ├── pages                 // - page specific styling
├── static                    // static assets
|   ├── css                   // - where compiled style.css is built to
|   ├── fonts                 // - web fonts
|   ├── img                   // - app image directory
|   ├── js                    // - javascript files
├── themes                    // empty directory no hugo themes
```

## License
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
