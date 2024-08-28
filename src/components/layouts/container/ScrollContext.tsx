import { createContext, RefObject } from 'react';

const ScrollContext = createContext<RefObject<HTMLDivElement> | null>(null);

export default ScrollContext;
