const sheet = `
`

customElements.define(
	'item-card',
	class extends HTMLElement {

		constructor() {
			super()

			this.attachShadow({ mode: 'open' })
				.append(
					document
						.createElement('section')
						.append(
							document.createElement('picture')
						),

					Object.assign(
						document.createElement('style'),
						{ textContent: sheet }
					)
				)

		}

	}
)