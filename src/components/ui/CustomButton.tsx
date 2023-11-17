import state from "@/store"
import { useSnapshot } from "valtio"
import { getContrastingColor } from "@/config/helpers"

interface CustomButtonProps {
    type: string
    title: string
    handleClick: () => void
    customStyles: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, type, customStyles, handleClick }) => {

    const snap = useSnapshot(state)

    const generateStyles = (type: string) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if (type === "outline") {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    }

    return (
        <button className={`px-2 py-1.5 rounded-md ${customStyles}`} style={generateStyles(type)} onClick={handleClick}>
            {title}
        </button>
    )
}

export default CustomButton