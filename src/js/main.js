import Slider from "./modules/slider";
import VidePlayer from "./modules/playVideo";

window.addEventListener("DOMContentLoaded", () => {
	const slider = new Slider(".page", ".next");
	slider.render();

	const player = new VidePlayer(".showup .play", ".overlay");
	player.init();
});
