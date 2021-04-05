import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignUp = ({ history }) => {
    const router = useRouter()
    return (
        <main className="container mb30">
            <h1
                style={{ marginTop: 100 }}
                class="tb f36">
                Register
        </h1>
            <div className="mt50">
                <form action="">
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Full Name
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Enter Email Address"
                            type="email" />
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Country
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="create new Password"
                            type="password" />
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Phone Number
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Enter Phone Number"
                            type="number" />
                    </div>
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Password
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Create new Password"
                            type="password" />
                    </div>

                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Confirm Password
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="Confirm Password"
                            type="password" />
                    </div>


                    <div
                        className="center-text mt30 ">
                        <button
                            onClick={(e) => { e.preventDefault(); router.push(links.rewards) }}
                            className="tw br8 bg-brand-orange bd-o"
                            style={{ padding: "11px 111px" }}>
                            Register
                        </button>
                    </div>
                    <div className="f16 center-text mt10">
                        New Here? <Link href={links.signIn}>
                            <a className="bolder text-brand-orange"> Login</a>
                        </Link>
                    </div>

                </form>
            </div>




        </main>
    )
}

SignUp.layout = "auth"
export default SignUp;