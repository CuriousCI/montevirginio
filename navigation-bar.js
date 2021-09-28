const sheet = `
:host {
	width: 100%;
	height: 100%;
	z-index = 1;

	position: sticky;
	top: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgb(250, 250, 250);
	box-shadow: 0 5px 10px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

	overflow: hidden;
}

:host a {
	width: clamp(50px, 25%, 175px);
	height: 100%;

	display: grid;
	place-items: center;

	padding: 5px 15px;
	box-sizing: border-box;

	font-size: 1.3em;
	text-decoration: none;
	color: black;
}

:host a:hover {
	background-color: rgb(240, 240, 240);
}

:host a:focus {
	outline: none;
}

:host a.highlight {
	background-color: gainsboro;
}

:host a {
	transition: background-color 1s, color 300ms;
}

:host span.text {
	display: none;
}

@media (min-width: 700px)
{
	:host span.text {
		display: inline;
	}
}
`

customElements.define(
	'navigation-bar',
	class extends HTMLElement {
		routes = [
			{ href: '/', icon: '🏡', text: 'home' },
			{ href: '/opere', icon: '🎨', text: 'opere' },
			{ href: '/mostre', icon: '🪑', text: 'mostre' },
			{ href: '/prenotazioni', icon: '🎫', text: 'prenotazioni' },
		]


		constructor() {
			super()

			this.attachShadow({ mode: 'open' })
				.append(
					...this.routes.map(({ href, icon, text }) =>
						Object.assign(
							document.createElement('a'),
							{
								href: `${this.getAttribute('relative') || '..'}${href}`,
								innerHTML: `<span>${icon}<span class="text"> ${text}</span></span>`,
								target: '_parent',
								className: (this.getAttribute('resource') || '/') == href ? 'highlight' : ''
							}
						)
					),
					Object.assign(
						document.createElement('style'),
						{ textContent: sheet }
					)
				)
		}
	}
)
