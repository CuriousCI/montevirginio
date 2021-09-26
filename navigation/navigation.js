class NavigationBar extends HTMLElement {

	routes = [
		{ href: './', text: 'home', target: '_parent' },
		{ href: './opere', text: 'opere', target: '_parent' },
		{ href: './mostre', text: 'mostre', target: '_parent' },
		{ href: './prenotazioni', text: 'prenotazioni', target: '_parent' }
	];

	constructor() {
		super();

		this.attachShadow({ mode: 'open' })
		this.routes
			.map(route => Object.assign(document.createElement('a'), route))
			.forEach(link => this.shadowRoot.appendChild(link))

		// this.shadowRoot.appendChild(
		// 	Object.assign(
		// 		document.createElement('link'),
		// 		{ rel: 'stylesheet', href: './navigation/style.css' }
		// 	)
		// )
		this.shadowRoot.appendChild(
			Object.assign(
				document.createElement('style'),
				{
					innerHTML:
						`
						:host {
							all: initial;
							display: block;

							height: 6vh;

							display: flex;
							justify-content: center;
							align-items: center;

							gap: 20px;

						}

						:host a {
							font-weight: bold;
							font-size: 1.5em;

							text-decoration: none;
							color: black;
						}
					
					`
				}

			)
		)


	}

}

customElements.define('navigation-bar', NavigationBar)