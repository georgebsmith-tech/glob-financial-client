import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import links from '../configs/links'

export default function SignIn({ history }) {
    const router = useRouter()
    return (
        <div
            className="container flex justify-center" style={{ width: "100vw" }}>
            <div className="fw flex justify-content">

                <div className="fw" style={{
                    maxWidth: 500
                }}>


                    <div className="f27 text-brand-green">
                        Sign Up
            </div>
                    <div className="f16 text-brand-green">
                        Please Fill The Form To Create An Account
                </div>

                    <div
                        style={
                            {
                                marginTop: 10
                                , width: "100%"
                            }}
                        className="bg-brand-green p20 br10">
                        <form action="" className="mt20 mb30">
                            <div className="mb20">
                                <label
                                    className="fw f16 mb5 block"
                                    htmlFor="">Full Name</label>
                                <input
                                    style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                                    className="br10 p10 ptb15 no-bd full-width f16"
                                    type="text" />
                            </div>
                            <div className="mb20">
                                <label
                                    className="fw f16 mb5 block"
                                    htmlFor="">Email Address</label>
                                <input
                                    style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                                    className="br10 p10 no-bd full-width f16 ptb15"
                                    type="text" />
                            </div>
                            <div className="mb20">
                                <label
                                    className="fw f16 mb5 block"
                                    htmlFor="">Country</label>
                                <select
                                    style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                                    className="br10 p10 no-bd full-width f16 ptb15"
                                    type="text" >
                                    <option value="">Nigeria</option>
                                </select>
                            </div>
                            <div className="mb20">
                                <label
                                    className="fw f16 mb5 block"
                                    htmlFor="">Phone</label>
                                <input
                                    placeholder="+23456765677"
                                    style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                                    className="br10 p10 no-bd full-width f16 ptb15"
                                    type="password" />
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
                            <div className="mb20">
                                <label
                                    className="fw f16 mb5 block"
                                    htmlFor="">Confirm Password</label>
                                <input
                                    style={{ backgroundColor: "rgba(227, 245, 149,0.4)" }}
                                    className="br10 p10 no-bd full-width f16 ptb15"
                                    type="password" />
                            </div>
                            <div>
                                <button
                                    onClick={(e) => { e.preventDefault(); router.push("/choose-asset") }}
                                    className="bg-orange br10 full-width f14 p10 bd-o  fw pointer">
                                    Create Account
                       </button>
                            </div>



                        </form>


                    </div>
                    <div className="center-text f14 mt10">
                        <span className="text-brand-green">
                            Already a Member? <Link href={links.signIn}>
                                <a className="text-brand-orange">
                                    Sign in here
                            </a>
                            </Link>
                        </span>

                    </div>
                </div>
            </div>


        </div>
    )
}
