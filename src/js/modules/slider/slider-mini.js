import Slider from "../slider";

export default class MiniSlider extends Slider {
	constructor(container, next, prev, activeClass, animate, autoplay) {
		super(container, next, prev, activeClass, animate, autoplay);
	}

	filteredSlides() {
		return Array.prototype.filter.call(
			this.slides,
			(slide) => slide.tagName !== "BUTTON"
		);
	}

	decorizedSlides() {
		Array.prototype.forEach.call(this.slides, (slide) => {
			slide.classList.remove(this.activeClass);

			if (this.animate) {
				slide.querySelector(".card__title").style.opacity = "0.4";
				slide.querySelector(".card__controls-arrow").style.opacity = "0";
			}
		});

		this.filteredSlides()[0].classList.add(this.activeClass);

		if (this.animate) {
			this.slides[0].querySelector(".card__title").style.opacity = "1";
			this.slides[0].querySelector(".card__controls-arrow").style.opacity = "1";
		}
	}

	nextSlide() {
		this.container.appendChild(this.filteredSlides()[0]);
		this.decorizedSlides();
	}

	bindTriggers() {
		this.next.addEventListener("click", () => this.nextSlide());

		this.prev.addEventListener("click", () => {
			this.container.prepend(this.filteredSlides()[this.filteredSlides().length - 1]);
			this.decorizedSlides();
		});
	}

	init() {
		try {
			this.container.style.cssText = `
			display : flex ;
			flex-wrap: wrap;
			overflow: hidden;
			align-items: flex-start;
		`;

			this.bindTriggers();
			this.decorizedSlides();

			if (this.autoplay) {
				setInterval(() => {
					this.nextSlide();
				}, 5000);
			}
		} catch (error) {}
	}
}
