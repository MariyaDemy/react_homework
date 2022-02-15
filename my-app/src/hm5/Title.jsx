import { useContext } from "react";
import { AccordionContext } from "./Accordion";

const Title = ({ children }) => {
    const { isOpened, setIsOpened } = useContext(AccordionContext);
    const handleClick = () => {
        setIsOpened(!isOpened);
    }
    return <div onClick={handleClick}>{children}</div>
}

export default Title;