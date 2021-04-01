import React from 'react'
import GuestHeader from '../Header/GuestHeader'

import GuestFooter from '../Footer/GuestFooter'

const GuestLayout = ({ children }) => {
    return (
        <>
            <GuestHeader />
            { children}
            <GuestFooter />
        </>
    )
}

export default GuestLayout
