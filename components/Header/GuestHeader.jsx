import React from 'react'
import Link from 'next/link'

const GuestHeader = ({ children }) => {
    return (
        <header>

            <nav
                className="bg-brand-green align-center"
                style={{ padding: "24px 51px 35px 51px", display: "flex", justifyContent: "space-around" }}
            >
                <h2>
                    <span className="bold f24 fw">GLOB</span><span className="f24 fo">
                        FINANCIAL
                </span>
                </h2>
                <ul
                    className="align-center"
                    style={{ display: "flex" }}>
                    <li className="mr30">
                        <Link href="/">
                            <a className="f20 fw">
                                Home
                          </a>
                        </Link>
                    </li>
                    <li className="mr30">
                        <Link href="/community">
                            <a className="f20 fw">
                                Community
                      </a>
                        </Link>
                    </li>
                    <li className="mr30">
                        <Link href="/product">
                            <a className="f20 fw">
                                Product
                      </a>
                        </Link>
                    </li>
                    <li className="mr30">
                        <Link href="/rewards">
                            <a className="f20 fw">
                                Rewards
                      </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/our-stories">
                            <a className="f20 fw">
                                Our Story
                      </a>
                        </Link>
                    </li>
                </ul>
                <ul
                    className="align-center"
                    style={{ display: "flex" }}>
                    <li className="mr30">
                        <Link href="/sign-in">
                            <a
                                style={{ padding: "12px 32px" }}
                                className="f17 fw bd5-orange fo block">
                                Sign in
                      </a>
                        </Link>
                    </li>
                    <li>
                        <Link

                            href="/sign-up">
                            <a
                                style={{ padding: "12px 24px" }}
                                className="f17 fw bd bd5-orange block bg-orange bd5">
                                Become A Member
                      </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default GuestHeader