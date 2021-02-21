import React from 'react'
import GuestHeader from '../Header/GuestHeader'

const GuestLayout = ({ children }) => {
    return (
        <>
            <GuestHeader />

            { children}
        </>
    )
}

export default GuestLayout
