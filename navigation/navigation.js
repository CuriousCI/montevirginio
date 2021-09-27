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
	width: 175px;
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
`;

customElements.define(
	'navigation-bar',
	class extends HTMLElement {
		routes = [
			{ href: '/', text: '🏡 home' },
			{ href: '/opere', text: '🎨 opere' },
			{ href: '/mostre', text: '🪑 mostre' },
			{ href: '/prenotazioni', text: '🎫 prenotazioni' },
		]

		constructor() {
			super();

			this.ref = this.getAttribute('resource') || '/'
			this.relative = this.getAttribute('relative') || '..'

			this.attachShadow({ mode: 'open' });
			this.routes
				.map(({ href, text }) =>
					Object.assign(
						document.createElement('a'),
						{
							href: `${this.relative}${href} `,
							text: text,
							target: '_parent',
							className: this.ref == href ? 'highlight' : ''
						}
					)
				)
				.forEach(link => this.shadowRoot.appendChild(link))

			this.shadowRoot.appendChild(
				Object.assign(
					document.createElement('style'),
					{ textContent: sheet }
				)
			)
		}

		static get obeservedAttributes() {
			return ['resource']
		}

	}
)
