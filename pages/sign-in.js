import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SignIn({ history }) {
    const router = useRouter()
    return (
        <div
            className="flex justify-center container" style={{ width: "100vw" }}>
            <div
                style={{ marginTop: 40, maxWidth: 405, width: "100%" }}
            >
                <div className="f27 text-brand-green">
                    Sign In
            </div>
                <div className="f16 text-brand-green">
                    Please fill your details, to access your account
                </div>
                <form className="mt20 mb10 bg-brand-green p20 br10">
                    <div className="mb20">
                        <label
                            className="fw f16 mb5 block"
                            htmlFor="">UserID/ Email address</label>
                        <input
                            style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                            className="br10 p10 ptb15 no-bd full-width f16"
                            type="text" />
                    </div>
                    <div className="mb20">
                        <label
                            className="fw f16 mb5 block"
                            htmlFor="">Password</label>
                        <input
                            style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                            className="br10 p10 no-bd full-width f16 ptb15"
                            type="password" />
                    </div>
                    <div>
                        <button
                            onClick={(e) => { e.preventDefault(); router.push(links.dashboard) }}
                            className="bg-orange br10 full-width f14 p10 bd-o  fw">
                            sign in
                       </button>
                    </div>



                </form>
                <div className="center-text f14">
                    <span className="text-brand-green">
                        New Member? <Link href={links.signUp}>
                            <a className="text-brand-orange">
                                Open Account
                            </a>
                        </Link>
                    </span>

                </div>
                <div className="center-text mt20 f14">
                    <Link href={links.reset || ""}>
                        <a className="text-brand-orange">
                            Reset Password
                        </a>
                    </Link>
                </div>

            </div>


        </div>
    )
}
