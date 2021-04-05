import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FundAccount = ({ location, history }) => {
    const router = useRouter()
    const page = router.query.kind
    let content;
    if (page === "btc") {
        content = <BTC />
    } else if (page === "card-options") {
        content = <CardOptions />
    } else if (page === "payment-details") {
        content = <CardDetails />
    }

    return (
        <main>
            <h1
                style={{ marginTop: 70 }}
                class="tb f36 center-text mb30">
                Fund Account
        </h1>
            <div
                style={{ boxShadow: "0px 16px 35px rgba(0, 0, 0, 0.0675668)", borderRadius: 16, padding: "10px 10px 30px 10px", margin: 15 }}
                className="mt50" >

                {content}

            </div>




        </main>
    )
}


const CardDetails = () => {
    return (
        <>

            <form action="">
                <div className="f16 mb20 mt30">
                    <label
                        className="t-grey block mb10"
                        htmlFor="">
                        CARD NUMBER
                    </label>
                    <input

                        className="fw br5 f16 t-grey3"
                        style={{
                            padding: "17px 15px",
                            backgroundColor: "rgba(250,250,250,1)",
                            border: "1px solid rgba(250,250,250,1)"
                        }}
                        placeholder="0000 0000 0000 0000"
                        type="number" />
                </div>
                <div className="f16 mb20">
                    <label
                        className="t-grey block mb10"
                        htmlFor="">
                        NAME ON CARD
                    </label>
                    <input

                        className="fw br5 f16 t-grey3"
                        style={{
                            padding: "17px 15px",
                            backgroundColor: "rgba(250,250,250,1)",
                            border: "1px solid rgba(250,250,250,1)"
                        }}
                        placeholder="Ex. John Doe "
                        type="number" />
                </div>
                <div className="grid grid2 gap20">
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            EXPIRY DATE
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder="MM/YY "
                            type="number" />
                    </div>
                    <div className="f16 mb20">
                        <label
                            className="t-grey block mb10"
                            htmlFor="">
                            CVV
                    </label>
                        <input

                            className="fw br5 f16 t-grey3"
                            style={{
                                padding: "17px 15px",
                                backgroundColor: "rgba(250,250,250,1)",
                                border: "1px solid rgba(250,250,250,1)"
                            }}
                            placeholder=" "
                            type="number" />
                    </div>
                </div>
                <div className="center-text mt10 ">
                    <Link href="/fund-account?kind=payment-options">
                        <a className="tw br5 bg-brand-orange bd-o fw block f14"
                            style={{ padding: "11px" }}>
                            PROCEED
                        </a>
                    </Link>
                </div>


            </form>
        </>
    )
}

const CardOptions = () => {
    const options = [
        {
            name: "Credit card"
        },
        {
            name: "PayPal"
        },
        {
            name: "Bank"
        }
    ]
    return (
        <>
            <ul className="mt30">
                {
                    options.map(option => <li className="f16 tw mb20"
                        style={{ backgroundColor: "#8BBD43", padding: "13px 10px 13px 30px" }}>
                        {option.name}
                    </li>)
                }
            </ul>
        </>
    )
}
const BTC = () => {
    return (
        <>

            <div
                className="flex justify-center mb50 mt20">

                <div
                    className="round flex justify-center align-center"
                    style={{ width: 100, height: 100, backgroundColor: "#F99400", }}>
                    <img src="./images/Glob Financial/btc.svg" alt="" />
                </div>

            </div>
            <form action="">
                <div className="f16 mb20">
                    <label
                        className="t-grey block mb10"
                        htmlFor="">
                        Invest
                    </label>
                    <input

                        className="fw br5 f16 t-grey3"
                        style={{
                            padding: "17px 15px",
                            backgroundColor: "rgba(250,250,250,1)",
                            border: "1px solid rgba(250,250,250,1)"
                        }}
                        placeholder="Enter investment"
                        type="number" />
                </div>

                <div className="f16 mb20">
                    <label
                        className="t-grey block mb10"
                        htmlFor="">
                        Dolla worth
                    </label>
                    <input

                        className="fw br5 f16 t-grey3"
                        style={{
                            padding: "17px 15px",
                            backgroundColor: "rgba(250,250,250,1)",
                            border: "1px solid rgba(250,250,250,1)"
                        }}
                        placeholder="Dolla Equivalent"
                        type="number" disabled />
                    <div className="f16 mt10 flex flex-end">
                        Minimum BTC to USD  is $100
                        </div>
                </div>


                <div className="center-text mt30 ">
                    <button className="tw br8 bg-brand-orange bd-o fw block f14"
                        style={{ padding: "11px" }}>
                        Proceed to Fund Account
                        </button>

                </div>


            </form>
        </>
    )
}

FundAccount.layout = "auth"

export default FundAccount;
