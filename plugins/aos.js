import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
    app.AOS = new AOS.init({
        disable: window.innerWidth < 10,
        offset: 50,
        duration: 600,
        easing: 'ease-in-out-cubic',
        once: true
    }); // or any other options you need
};