import Home from "@/components/Home"
import Customizer from "@/components/Customizer"
import CanvasModel from "@/canvas"


export default function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
  )
}
