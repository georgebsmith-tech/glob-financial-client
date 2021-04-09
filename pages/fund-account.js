import Head from 'next/head'
import styles from '../styles/FundAccount.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FundAccount = () => {
    const router = useRouter()
    const page = router.query.kind
    const option = router.query.option
    console.log(option)
    let content;
    if (page === "btc") {
        content = <BTC />
    } else if (page === "card-options") {
        if (!option) {
            content = <CardOptions />
        } else if (option === "card") {
            content = content = <CardDetails />
        } else if (option === "paypal") {
            content = content = <PayPal />
        }


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
                <h2 className="tb f24 center-text mt10 ">
                    CREDIT CARD
            </h2>
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
                        type="text" />
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
                    <Link href="/dashboard">
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
            name: "Credit card",
            option: "card"
        },
        {
            name: "PayPal",
            option: "paypal"
        },
        {
            name: "Bank",
            option: "bank"
        }
    ]
    return (
        <>
            <ul className="mt30">
                {
                    options.map(option => <li >
                        <Link href={"/fund-account?kind=card-options&option=" + option.option}>
                            <a
                                className={"f16 block mb20 tb " + styles.acctOptionHover}
                                style={{ padding: "13px 10px 13px 30px" }}>
                                {option.name}
                            </a>
                        </Link>

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


const PayPal = () => {
    const router = useRouter()
    return (
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
                        Select Amount
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

                <div className="f16 mb10">
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
                    <button
                        onClick={(e) => { e.preventDefault(); router.push("/dashboard") }}
                        className="tw br8 bg-brand-orange bd-o fw"
                        style={{ padding: "11px 111px" }}>
                        Proceed
                        </button>
                </div>
            </form>
        </div>
    )
}

FundAccount.layout = "auth"

export default FundAccount;
