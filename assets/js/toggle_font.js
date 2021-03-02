/* Provide a toggle option for displaying sans-serif/serif fonts.
 *
 * Enables a checkbox for toggling sans-serif and serif fonts. The
 * default font-style is sans-serif, but is changed automatically to
 * serif fonts if the checkbox is selected.
 */

function toggleFont() {
	inputToggle = document.getElementById('serif-toggle');
	if (inputToggle.checked) {
		document.body.classList.add('serif');
	} else {
		document.body.classList.remove('serif');
	}
}
