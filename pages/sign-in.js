import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function SignIn() {
    return (
        <div
            className="flex justify-center" style={{ width: "100vw" }}>
            <div
                style={{ marginTop: 180, maxWidth: 405, width: "100%" }}
                className="bg-brand-green p20 br10">
                <form action="" className="mt20 mb30">
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
                        <button className="bg-orange br10 full-width f14 p10 bd-o  fw">
                            sign in
                       </button>
                    </div>



                </form>

            </div>


        </div>
    )
}
