// We use JS for making our web pages more dynamic

/**GOALS
 * comfortable
 * apply theory
 * Build your own projects
 * pickup framework
 */

/**STRUCTURE
 * Be patient for the 1st 3 modules
 * Theory, practice, repeat
 * After we build our 1st project there is no turning back, only forward
 */

/**
 * with liive server we do not need to refresh the browser everytime we make changes to uour code
 * it makes coding more faster and easier to do
 * Emmet => helps us to write our code more faster
 */

// SECTION 3 - BASICS ======================================================================

/* INLINE JS
    <html>
        <button onclick="alert('Btn clicked')">Click</button>
    </html>
*/

/* INTERNAL JAVASCRIPT
    <script>
        document.querySelectorAll('.btn').forEach((item) => {
            item.addEventListener('click', () => {
                alert("js is awesome")
            })
        })
    </script>
*/

// Note:
// Place the ext script tag at the bottom of the body tag to reduce loading time
// Because it gives HTML time to load before loading js, cuz if we put it in head, the js will start parsing but, our html page content would not be loaded yet.

// Note:
// Even though we do not write anything in <script></script> tag, it is mandatory to close the script tag.
// script tag is not a void/empty element, so we must put the </script> closing tag.
