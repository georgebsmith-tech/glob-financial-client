import React from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';

const GuestFooter = ({ children }) => {
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isTabletOrMobileDevice = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    if (isTabletOrMobile) {
        return (
            <footer
                style={{ backgroundColor: "rgba(248,248,248,1)", padding: "30px 15px 10px 15px" }}
                className="pt25">

                <ul className="grid grid3 gap10">
                    <li>
                        <h3>Company</h3>
                    </li>
                    <li>
                        <h3>Product</h3>
                    </li>
                    <li>
                        <h3>Resources</h3>
                    </li>
                </ul>
            </footer>

        )
    }
}

export default GuestFooter
