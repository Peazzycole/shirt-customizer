import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#000000",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/threejs.png",
  fullDecal:
    "https://images.unsplash.com/photo-1682686581498-5e85c7228119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
});

export default state;
