import { useEffect,useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'

const FireworksBackground = props => {

    const ref = useRef(null);

    useEffect(() => {
        ref.current.start();
    },[])

    return <>
        <Fireworks
            ref={ref}
            options={{ opacity: 0.5 }}
            style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                position: 'fixed',
                background: 'transparent'
            }}
        />
    </>
};

export default FireworksBackground;