import { useSnapshot } from "valtio";
import state from "@/store";
import Image from "next/image";

interface TabProps {
    key: string
    tab: {
        name: string;
        icon: string;
    }
    isFilterTab: boolean
    isActiveTab: string
    handleClick: () => void
}

const Tab: React.FC<TabProps> = ({ tab, isFilterTab, isActiveTab, handleClick }) => {

    const snap = useSnapshot(state)
    const activeStyles = isFilterTab && isActiveTab ? {
        backgroundColor: snap.color, opacity: 0.5
    } : { backgroundColor: 'transparent', opacity: 1 }

    return (
        <div
            key={tab.name}
            className={`tab-btn ${isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'} `}
            style={activeStyles}
            onClick={handleClick}
        >
            <Image
                src={tab.icon}
                alt=""
                width={100}
                height={100}
                className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
            />
        </div>
    )
}

export default Tab