import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SignIn({ history }) {
    const router = useRouter()
    return (
        <main className="container">
            <h1
                style={{ marginTop: 100 }}
                class="tb f36">
                Log In
        </h1>
            <div className="mt50">
                <form action="">
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            Email Address
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
                            Password
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "11px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="create new Password"
                            type="email" />
                    </div>


                    <div className="center-text mt30 ">
                        <button className="tw br8 bg-brand-orange bd-o"
                            style={{ padding: "11px 111px" }}>
                            Registeri
                        </button>
                    </div>
                    <div className="f16 center-text mt10">
                        New Here? <Link href={links.signUp}>
                            <a className="bolder text-brand-orange"> Register</a>
                        </Link>
                    </div>

                </form>
            </div>




        </main>
    )
}
