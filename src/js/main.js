import MainSlider from "./modules/slider/slider-main";
import VidePlayer from "./modules/playVideo";
import MiniSlider from "./modules/slider/slider-mini";
import Difference from "./modules/difference";
import Form from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {
	new MainSlider({ container: ".page", btns: ".next" }).render();

	const modulePageSlider = new MainSlider({
		container: ".moduleapp",
		btns: ".next",
	});
	modulePageSlider.render();

	new VidePlayer(".showup .play", ".overlay").init();
	new VidePlayer(".module__video-item .play", ".overlay").init();

	const showUpSlider = new MiniSlider({
		container: ".showup__content-slider",
		next: ".showup__next",
		prev: ".showup__prev",
		activeClass: "card-active",
		animate: true,
	});
	showUpSlider.init();

	const modulesSlider = new MiniSlider({
		container: ".modules__content-slider",
		next: ".modules__info-btns .slick-next",
		prev: ".modules__info-btns .slick-prev",
		activeClass: "card-active",
		animate: true,
		autoplay: true,
	});
	modulesSlider.init();

	const feedSlider = new MiniSlider({
		container: ".feed__slider",
		next: ".feed__slider .slick-next",
		prev: ".feed__slider .slick-prev",
		activeClass: "feed__item-active",
		autoplay: true,
	});
	feedSlider.init();

	new Difference(".officerold", ".officernew", ".officer__card-item").init();
	new Form(".form").init();
});
