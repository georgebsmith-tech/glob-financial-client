import React from 'react'
import GuestHeader from '../Header/GuestHeader'

import GuestFooter from '../Footer/GuestFooter'

const GuestLayout = ({ children }) => {
    const layout = children.type.layout
    if (layout === "auth") {
        return (
            <>
                <GuestHeader />
                { children}
            </>
        )
    }
    return (
        <>
            <GuestHeader />
            { children}
            <GuestFooter />
        </>
    )
}

export default GuestLayout
