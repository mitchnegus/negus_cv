/* Provide a menu for adjusting display settings.
 *
 * Adds functionality for displaying settings related to the CV layout.
 * These settings include the ability to toggle the font, hide various
 * elements/sections, etc.
 */

(function () {
	// Reveal/hide the settings box
	$('#settings-icon').click(toggleSettings);
	// Toggle font (serif/sans-serif)
	$('#toggle-serif').click(toggleFont);
	// Toggle social media handles
	$('.toggle-social-media').click(toggleSocialMedia);
})();

// Show settings menu
function toggleSettings() {
	$settings = $('#display-options-container');
	$settings.slideToggle();
}
	
// Provide an option for toggling serif/sans-serif fonts
function toggleFont() {
	if (this.checked) {
		$('body').addClass('serif');
	} else {
		$('body').removeClass('serif');
	}
}

// Provide an option for toggling social media icons
function toggleSocialMedia() {
	// Use the checkboxes name to identify the social media handle
	let mediaSelector = '#media';
	if (this.value != 'all-social-media') {
		mediaSelector += ' #' + this.value;
	}
	let $mediaHandle = $(mediaSelector);
	// Show or hide the handle(s)
	if (this.checked) {
		$mediaHandle.show();
	} else {
		$mediaHandle.hide();
	}
}
