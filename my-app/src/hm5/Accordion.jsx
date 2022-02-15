import React, { useState, createContext } from 'react'
import Title from './Title';
import Content from './Content';
import PropTypes from 'prop-types';

export const AccordionContext = createContext();

const Accordion = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false);
    return <AccordionContext.Provider value={{ isOpened, setIsOpened }}>
        <div>{children}</ div>
    </AccordionContext.Provider>
}


Accordion.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

Accordion.Title = Title;
Accordion.Content = Content;


export default Accordion;