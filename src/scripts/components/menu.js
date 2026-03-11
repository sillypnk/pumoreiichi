// import Avatar from '../../assets/media/avatar.jpg'
import { Howl } from 'howler'
import umamusumeSFX from '../../assets/media/audio/umamusume_sfx_02.mp3'

import Avatar from '../../assets/media/avatar.png'
import AvatarWEBP from '../../assets/media/avatar.webp'

import sharedCSS from '../../styles.css?inline'

class PumoMenu extends HTMLElement {
	#sfx

	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
		this.#render()
	}

	#render() {
		return (this.shadowRoot.innerHTML = `
							<dialog id="modal__start" class="modal">
									<div class="modal__content" style="height: 32rem; width: 32rem">
											<div class="modal__action">
													<form method="dialog">
														<h2>START MENU</h2>
														<!-- This is this close button for this menu -->
														<button class="btn--menu" style="
                											margin-left: auto;
                											color: inherit;
                											background: transparent;
                											border: none;
              												">
															<svg fill="currentColor" style="width: 2.5em" version="1.1" id="Layer_1"
																xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
																viewBox="0 0 512 512" xml:space="preserve">
																<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
																<g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round"
																	stroke-linejoin="round"></g>
																<g id="SVGRepo_icurrentColoronCarrier">
																	<g>
																		<g>
																			<polygon
																				points="365.714,231.619 365.714,195.048 402.286,195.048 402.286,158.476 438.857,158.476 438.857,121.905 475.429,121.905 475.429,85.333 512,85.333 512,36.571 475.429,36.571 475.429,0 426.667,0 426.667,36.571 390.095,36.571 390.095,73.143 353.524,73.143 353.524,109.714 316.952,109.714 316.952,146.286 280.381,146.286 280.381,182.857 231.619,182.857 231.619,146.286 195.048,146.286 195.048,109.714 158.476,109.714 158.476,73.143 121.905,73.143 121.905,36.571 85.333,36.571 85.333,0 36.571,0 36.571,36.571 0,36.571 0,85.333 36.571,85.333 36.571,121.905 73.143,121.905 73.143,158.476 109.714,158.476 109.714,195.048 146.286,195.048 146.286,231.619 182.857,231.619 182.857,280.381 146.286,280.381 146.286,316.952 109.714,316.952 109.714,353.524 73.143,353.524 73.143,390.095 36.571,390.095 36.571,426.667 0,426.667 0,475.429 36.571,475.429 36.571,512 85.333,512 85.333,475.429 121.905,475.429 121.905,438.857 158.476,438.857 158.476,402.286 195.048,402.286 195.048,365.714 231.619,365.714 231.619,329.143 280.381,329.143 280.381,365.714 316.952,365.714 316.952,402.286 353.524,402.286 353.524,438.857 390.095,438.857 390.095,475.429 426.667,475.429 426.667,512 475.429,512 475.429,475.429 512,475.429 512,426.667 475.429,426.667 475.429,390.095 438.857,390.095 438.857,353.524 402.286,353.524 402.286,316.952 365.714,316.952 365.714,280.381 329.143,280.381 329.143,231.619 ">
																			</polygon>
																		</g>
																	</g>
																</g>
															</svg>
														</button>
													</form>
											</div>
												<div class="modal__info">
													<div class="avatar" style="margin-bottom: 2rem">
														<div style="
                  											width: 8rem;
                  											border-radius: 50em;
                  											outline: 1px solid var(--clr-base-content);
                  											outline-offset: 2px;
                											">
															<picture>
																<source sizes="10vw" srcset="${AvatarWEBP} 10w" type="image/webp" />
																<source sizes="10vw" srcset="${Avatar} 10w" type="image/jpeg" />
																<img src="${Avatar}" style="
                      												width: 125%;
                      												height: 125%;
                      												object-position: -18px -15px;
                    												" alt="An avatar for the dialog" />
															</picture>
														</div>
													</div>
													<h4>PumoReiichi</h4>
													<p style="
                										font-size: 0.6em;
                										padding-left: 2rem;
                										text-align: left;
                										font-style: italic;
              											">
														OS: AdachiOS
														<br />
														Version: 1.1.0
														<br />
														Host: Cloudflare Pages
														<br />
														Processor: Vanilla
														<br />
														Since: August
													</p>
												</div>
												<div class="modal__links">
													<ul class="startmenu__list">
														<li>
															<a href="/">Home</a>
														</li>
														<li>
															<a href="/pages/about.html">About</a>
														</li>
														<li>
															<a href="/pages/gallery.html">Gallery</a>
														</li>
														<li>
															<a href="/pages/blog.html">Blog</a>
														</li>
														<li>
															<a href="/pages/microblog.html">Microblog</a>
														</li>
														<li>
															<a href="/pages/projects.html">Projects</a>
														</li>
														<li>
															<a href="/pages/links.html">Links</a>
														</li>
														<li>
															<a href="/pages/code.html">Code</a>
														</li>
													</ul>
												</div>
												<div class="modal__options">
													<div style="display: inline-flex; align-items: center;">
														<svg style="
                  											vertical-align: middle;
                  											width: 0.7em;
                  											color: var(--clr-base-content);
                  											margin-right: 6px;
                											" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
															xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362.027 362.027"
															xml:space="preserve" stroke="currentColor">
															<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
															<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
															<g id="SVGRepo_iconCarrier">
																<g>
																	<g>
																		<path
																			d="M181.014,68.957c-56.864,0-103.127,46.263-103.127,103.127c0,19.826,5.642,39.084,16.316,55.69 c7.799,12.132,17.992,22.433,29.904,30.321c-4.212,4.332-6.812,10.236-6.812,16.74c0,6.402,2.521,12.223,6.616,16.535 c-4.095,4.313-6.616,10.133-6.616,16.535c0,13.253,10.782,24.035,24.035,24.035h3.155v3.228c0,15.061,15.644,26.857,35.615,26.857 h1.828c19.971,0,35.614-11.797,35.614-26.857v-3.228h3.155c13.254,0,24.035-10.782,24.035-24.035 c0-6.402-2.521-12.223-6.615-16.535c4.095-4.313,6.615-10.133,6.615-16.535c0-6.51-2.606-12.42-6.823-16.752 c11.913-7.888,22.116-18.176,29.915-30.31c10.674-16.606,16.316-35.864,16.316-55.69 C284.141,115.22,237.878,68.957,181.014,68.957z M202.542,335.17c0,5.608-8.466,11.857-20.614,11.857H180.1 c-12.148,0-20.615-6.249-20.615-11.857v-3.228h43.058V335.17z M220.697,316.941H141.33c-4.982,0-9.035-4.053-9.035-9.035 c0-4.982,4.053-9.035,9.035-9.035h79.368c4.982,0,9.035,4.053,9.035,9.035C229.733,312.889,225.68,316.941,220.697,316.941z M220.697,283.871H141.33c-4.982,0-9.035-4.053-9.035-9.035c0-4.983,4.053-9.035,9.035-9.035h79.368 c4.982,0,9.035,4.053,9.035,9.035C229.733,279.818,225.68,283.871,220.697,283.871z M163.647,197.205h34.734 c-7.839,18.796-12.217,42.332-14,53.596h-6.734C175.862,239.525,171.481,215.992,163.647,197.205z M220.649,250.801H199.59 c2.306-13.774,7.814-41.184,17.273-57.299c1.361-2.319,1.377-5.189,0.041-7.523c-1.336-2.334-3.82-3.773-6.509-3.773h-58.764 c-2.689,0-5.172,1.439-6.508,3.773c-1.337,2.333-1.321,5.204,0.04,7.522c9.444,16.091,14.961,43.519,17.27,57.3h-21.055 c-29.513-14.898-48.492-45.588-48.492-78.717c0-48.594,39.534-88.127,88.127-88.127c48.594,0,88.127,39.533,88.127,88.127 C269.141,205.212,250.162,235.902,220.649,250.801z">
																		</path>
																		<g>
																			<g>
																				<path
																					d="M181.014,47.08c-4.143,0-7.5-3.357-7.5-7.5V7.5c0-4.143,3.357-7.5,7.5-7.5c4.143,0,7.5,3.357,7.5,7.5v32.08 C188.514,43.723,185.156,47.08,181.014,47.08z">
																				</path>
																			</g>
																			<g>
																				<g>
																					<path
																						d="M85.372,86.729c-1.919,0-3.839-0.732-5.303-2.196L57.385,61.849c-2.929-2.93-2.929-7.678,0-10.607 c2.929-2.928,7.678-2.928,10.606,0l22.684,22.684c2.929,2.93,2.929,7.678,0,10.607C89.211,85.996,87.291,86.729,85.372,86.729z ">
																					</path>
																				</g>
																				<g>
																					<path
																						d="M276.672,86.713c-1.92,0-3.84-0.732-5.304-2.196c-2.929-2.93-2.929-7.678,0-10.607l22.684-22.684 c2.929-2.928,7.678-2.928,10.606,0c2.93,2.93,2.93,7.678,0,10.607l-22.684,22.684C280.51,85.98,278.591,86.713,276.672,86.713z ">
																					</path>
																				</g>
																			</g>
																			<g>
																				<g>
																					<path
																						d="M46.619,174.916H14.541c-4.142,0-7.5-3.357-7.5-7.5c0-4.143,3.358-7.5,7.5-7.5h32.079c4.142,0,7.5,3.357,7.5,7.5 C54.119,171.559,50.761,174.916,46.619,174.916z">
																					</path>
																				</g>
																				<g>
																					<path
																						d="M347.487,174.916h-32.079c-4.142,0-7.5-3.357-7.5-7.5c0-4.143,3.358-7.5,7.5-7.5h32.079c4.142,0,7.5,3.357,7.5,7.5 C354.987,171.559,351.629,174.916,347.487,174.916z">
																					</path>
																				</g>
																			</g>
																		</g>
																	</g>
																</g>
															</g>
														</svg>
														<p style="font-size: 0.8rem">
															<span id="pro-tip"></span>
														</p>
													</div>

													<div style="margin-left: auto;">
														<!-- RESTART ICON -->
														<svg style="width: 0.85em;" viewBox="0 0 24 24" fill="none"
															xmlns="http://www.w3.org/2000/svg">
															<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
															<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
															<g id="SVGRepo_iconCarrier">
																<path
																	d="M18.364 8.05026L17.6569 7.34315C14.5327 4.21896 9.46734 4.21896 6.34315 7.34315C3.21895 10.4673 3.21895 15.5327 6.34315 18.6569C9.46734 21.7811 14.5327 21.7811 17.6569 18.6569C19.4737 16.84 20.234 14.3668 19.9377 12.0005M18.364 8.05026H14.1213M18.364 8.05026V3.80762"
																	stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
																	stroke-linejoin="round"></path>
															</g>
														</svg>

														<!-- MOON ICON -->
														<div id="theme-toggler">
															<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																<g id="SVGRepo_bgCarrier" stroke-width="0">
																</g>
																<g id="SVGRepo_tracurrentColorerCarrier" stroke-linecurrentcap="round" stroke-linejoin="round"></g>
																<g id="SVGRepo_icurrentColoronCarrier"> <path d="M10.5766 8.70419C11.2099 7.56806 11.5266 7 12 7C12.4734 7 12.7901 7.56806 13.4234 8.70419L13.5873 8.99812C13.7672 9.32097 13.8572 9.48239 13.9975 9.5889C14.1378 9.69541 14.3126 9.73495 14.6621 9.81402L14.9802 9.88601C16.2101 10.1643 16.825 10.3034 16.9713 10.7739C17.1176 11.2443 16.6984 11.7345 15.86 12.715L15.643 12.9686C15.4048 13.2472 15.2857 13.3865 15.2321 13.5589C15.1785 13.7312 15.1965 13.9171 15.2325 14.2888L15.2653 14.6272C15.3921 15.9353 15.4554 16.5894 15.0724 16.8801C14.6894 17.1709 14.1137 16.9058 12.9622 16.3756L12.6643 16.2384C12.337 16.0878 12.1734 16.0124 12 16.0124C11.8266 16.0124 11.663 16.0878 11.3357 16.2384L11.0378 16.3756C9.88634 16.9058 9.31059 17.1709 8.92757 16.8801C8.54456 16.5894 8.60794 15.9353 8.7347 14.6272L8.76749 14.2888C8.80351 13.9171 8.82152 13.7312 8.76793 13.5589C8.71434 13.3865 8.59521 13.2472 8.35696 12.9686L8.14005 12.715C7.30162 11.7345 6.88241 11.2443 7.02871 10.7739C7.17501 10.3034 7.78993 10.1643 9.01977 9.88601L9.33794 9.81402C9.68743 9.73495 9.86217 9.69541 10.0025 9.5889C10.1428 9.48239 10.2328 9.32097 10.4127 8.99812L10.5766 8.70419Z" fill="currentColor"></path>
																	<path opacurrentcity="0.8" fill-rule="evenodd" currentclip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="currentColor"></path>
																	<g opacurrentcity="0.5"> <path d="M18.5304 5.46967C18.8233 5.76256 18.8233 6.23744 18.5304 6.53033L18.1872 6.87359C17.8943 7.16648 17.4194 7.16648 17.1265 6.87359C16.8336 6.5807 16.8336 6.10583 17.1265 5.81293L17.4698 5.46967C17.7627 5.17678 18.2376 5.17678 18.5304 5.46967Z" fill="currentColor"></path>
																		<path d="M5.46967 5.46979C5.76256 5.17689 6.23744 5.17689 6.53033 5.46979L6.87359 5.81305C7.16648 6.10594 7.16648 6.58081 6.87359 6.87371C6.5807 7.1666 6.10583 7.1666 5.81293 6.87371L5.46967 6.53045C5.17678 6.23755 5.17678 5.76268 5.46967 5.46979Z" fill="currentColor"></path> <path d="M6.87348 17.1266C7.16637 17.4195 7.16637 17.8944 6.87348 18.1873L6.53043 18.5303C6.23754 18.8232 5.76266 18.8232 5.46977 18.5303C5.17688 18.2375 5.17688 17.7626 5.46977 17.4697L5.81282 17.1266C6.10571 16.8337 6.58058 16.8337 6.87348 17.1266Z" fill="currentColor"></path> <path d="M17.1265 17.1269C17.4194 16.834 17.8943 16.834 18.1872 17.1269L18.5302 17.4699C18.8231 17.7628 18.8231 18.2377 18.5302 18.5306C18.2373 18.8235 17.7624 18.8235 17.4695 18.5306L17.1265 18.1875C16.8336 17.8946 16.8336 17.4198 17.1265 17.1269Z" fill="currentColor"></path> </g> </g>
															</svg>
															
															<svg
																version="1.1"
																xmlns="http://www.w3.org/2000/svg"
																xmlns:xlink="http://www.w3.org/1999/xlink"
																xml:space="preserve"
																fill="currentColor"
																stroke="currentColor"
																viewBox="0 0 32 32"
															>
																<g
																	stroke-linecap="round"
																	stroke-linejoin="round"
																></g>
																<g>
																	<style type="text/css">
																	.st0 {
																		fill: none;
																		stroke: currentColor;
																		stroke-width: 2;
																		stroke-linecap: round;
																		stroke-linejoin: round;
																		stroke-miterlimit: 10;
																	}

																	.st1 {
																		fill: none;
																		stroke: currentColor;
																		stroke-width: 2;
																		stroke-linejoin: round;
																		stroke-miterlimit: 10;
																	}
																	</style>
																	<path
																		class="st0"
																		d="M17,5c-0.27,0-0.54,0.02-0.8,0.04C19.05,6.55,21,9.55,21,13c0,4.97-4.03,9-9,9c-2.74,0-5.19-1.23-6.85-3.17 C6.04,24.59,11,29,17,29c6.63,0,12-5.37,12-12S23.63,5,17,5z"
																	></path>
																	<g>
																		<path
																			class="st0"
																			d="M11,9c-2.58,0.62-3.38,1.42-4,4c-0.62-2.58-1.42-3.38-4-4c2.58-0.62,3.38-1.42,4-4C7.62,7.58,8.42,8.38,11,9z"
																		></path>
																	</g>
																	<line class="st0" x1="12" y1="14" x2="12" y2="16"></line>
																	<line class="st0" x1="11" y1="15" x2="13" y2="15"></line>
																</g>
															</svg>
														</div>

														<!-- SHUTDOWN ICON -->
														<svg style="width: 0.8em" fill="currentColor" version="1.1" id="Layer_1"
															xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
															viewBox="0 0 482.462 482.462" xml:space="preserve" stroke="currentColor">
															<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
															<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
															<g id="SVGRepo_iconCarrier">
																<g>
																	<g>
																		<rect x="231.385" width="19.692" height="245.199"></rect>
																	</g>
																</g>
																<g>
																	<g>
																		<path
																			d="M287.038,47.534l-4.086,19.26C374.76,86.26,441.394,168.611,441.394,262.606c0,110.37-89.793,200.163-200.163,200.163 S41.067,372.976,41.067,262.606c0-94,66.639-176.351,158.452-195.813l-4.087-19.264C94.577,68.909,21.375,159.361,21.375,262.606 c0,121.231,98.625,219.856,219.856,219.856s219.856-98.625,219.856-219.856C461.087,159.365,387.889,68.913,287.038,47.534z">
																		</path>
																	</g>
																</g>
															</g>
														</svg>
													</div>
												</div>
									</div>
							</dialog>
`)
	}

	connectedCallback() {
		// Debugging
		console.log(
			'%c[PumoComponents]:',
			'background-color: orange; color: black; font-weight: bold; padding: 0.5em; border-radius: 5px;',
			'pumo-menu is successfully connected!',
		)

		// Initializing other stuff
		this.#setStyleSheets()

		// Initializing variables
		this.#sfx = new Howl({
			src: [`${umamusumeSFX}`],
		})

		// (State) - Colorscheme
		const themeToggler = this.shadowRoot.querySelector('#theme-toggler')
		themeToggler.addEventListener('click', () => this.#handleColorScheme())

		// (Sound Effects) - Close Button
		const closeBtn = this.shadowRoot.querySelector('.modal__action button')
		closeBtn.addEventListener('click', () =>
			this.#handleMenuMouse().onClose(),
		)

		// (Sound Effects) - Lists
		const lists = this.shadowRoot.querySelectorAll('.startmenu__list li')
		lists.forEach(list => {
			list.addEventListener('mouseover', () =>
				this.#handleMenuMouse().onMouseOver(),
			)
			list.addEventListener('mouseleave', () =>
				this.#handleMenuMouse().onMouseLeave(),
			)
		})

		window.onload = () => {
			const proTips = [
				"Do alt + n if you're on desktop",
				'ESC to escape this menu',
				'I recommend listening to heat abnormal',
				'I forgot what I was gonna say..',
				'Dark theme is the coolest trust',
				'Broken website + no responsive',
				'Hachimi hachimi',
				'Mambo Mambo! Omatsuri Mambo!',
			]
			const randNum = Math.floor(Math.random() * proTips.length)
			const proTipSpan = this.shadowRoot.querySelector('#pro-tip')
			proTipSpan.innerHTML = proTips[randNum]
		}
	}

	disconnectedCallback() {
		// Debugging
		console.log(
			'%c[PumoComponents]:',
			'background-color: orange; color: black; font-weight: bold; padding: 0.5em; border-radius: 5px;',
			'pumo-menu is disconnected',
		)

		// (State) - Colorscheme
		const themeToggler = this.shadowRoot.querySelector('#theme-toggler')
		themeToggler.removeEventListener('click', () =>
			this.#handleColorScheme(),
		)

		// (Sound Effects) - Close Button
		const closeBtn = this.shadowRoot.querySelector('.modal__action button')
		closeBtn.removeEventListener('click', () =>
			this.#handleMenuMouse().onClose(),
		)

		// (Sound Effects) - Lists
		const lists = this.shadowroot.querySelectorAll('.startmenu__list li')
		lists.forEach(list => {
			list.removeEventListener('mouseover', () =>
				this.#handleMenuMouse().onMouseOver(),
			)
			list.removeEventListener('mouseleave', () =>
				this.#handleMenuMouse().onMouseLeave(),
			)
		})
	}

	// This will inject the stylesheets to the shadow DOM
	#setStyleSheets() {
		const sharedSheet = new CSSStyleSheet()
		sharedSheet.replace(sharedCSS)

		const componentSheet = new CSSStyleSheet()
		componentSheet.replaceSync(`
						#theme-toggler svg:first-of-type {
							display: var(--moon-display);
						}

						#theme-toggler svg:last-of-type {
							display: var(--sun-display);
						}
`)

		// Add some component styles here if you want
		// const componentSheet = new CSSStyleSheet()
		// componentSheet.replaceSync()
		this.shadowRoot.adoptedStyleSheets = [sharedSheet, componentSheet]
	}

	#handleMenuMouse() {
		const sfx = this.#sfx

		const onClose = () => {
			const menu = this.shadowRoot.querySelector('dialog#modal__start')
			sfx.play()
			sfx.seek(0.25)
			menu.open = false
		}

		const onMouseOver = () => {
			sfx.play()
		}

		const onMouseLeave = () => {
			sfx.stop()
		}

		return { onClose, onMouseLeave, onMouseOver }
	}

	#handleColorScheme() {
		const root = document.documentElement
		let colorScheme = root.getAttribute('data-theme')

		const theme = colorScheme == 'light' ? 'dark' : 'light'
		root.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}
}

customElements.define('pumo-menu', PumoMenu)
