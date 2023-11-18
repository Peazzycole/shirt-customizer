import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/threejs.png",
  fullDecal:
    "https://t4.ftcdn.net/jpg/02/47/26/45/360_F_247264547_N881ohyaHcOayDFdvB76IZpsN4gdIuxW.jpg",
});

export default state;
