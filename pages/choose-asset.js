import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Assets.module.css'
import { FaCheckCircle } from 'react-icons/fa'
import links from '../configs/links'
import Link from 'next/link'

export default function Home() {
    const [invType, setInvType] = useState("cash")
    const style = {
        investCat: {
            paddingTop: 15,
            paddingBottom: 15,
            textAlign: "center",
            fontSize: 14,
            backgroundColor: "#CCCCCC",
            cursor: "pointer",
            fontWeight: "bold"
        }
    }

    let content;
    if (invType === "crypto") {
        content = <Crypto />
    } else if (invType === "cash") {
        content = <Cash />
    }
    return (
        <main className="container">
            <h1 style={{ fontSize: 30, fontWeight: "bold", color: "#000000", marginBottom: 27 }}
                className="center-text">
                CHOOSE AN ASSET
        </h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", columnGap: 2 }}>
                {
                    ["CASH", "CRYPTO", "STOCK"].map((type) => <div
                        className={type.toLowerCase() === invType && styles.activeAsset}
                        data-type={type}
                        onClick={(e) => { setInvType(e.target.dataset.type.toLowerCase()) }}
                        style={style.investCat}>
                        {type} INVESTMENT
                </div>)
                }


            </div>
            <section className="mt50">
                {content}
            </section>
            {/* 
            <section className="mt35">
                <div style={{ display: "grid", gridTemplateColumns: "0.8fr repeat(3,1fr)", columnGap: 5 }}>
                    <div>

                    </div>
                    <InvestmentAsset
                        bg="#800080"
                        asset="PRIME"
                        range="$50 - $5000"
                    />
                    <InvestmentAsset
                        bg="#008000"
                        asset="PROPEL"
                        range="$1000 - $15000"
                    />
                    <InvestmentAsset
                        bg="#D4AF37"
                        asset="PROSPER"
                        range="$500 & ABOVE"
                    />

                </div>

            </section>
            <section className="mt5">

                <AssetProperty
                    bg="#CCCCCC"
                    props={["Investment Period", "30 DAYS", "180 DAYS", "365 DAYS"]}
                />
                <AssetProperty
                    bg="#E0E0E0"
                    props={
                        ["ROI", "7.5%", "9%", "10%"]
                    }
                />
                <AssetPropertyReward
                    bg="#CCCCCC"
                    props={
                        ["",]
                    }
                />
                <AssetPropertyLife
                    bg="#E0E0E0" />
                <AssetPropertyGoalWallet
                    bg="#CCCCCC"
                />

            </section> */}



        </main>
    )
}

const Crypto = () => {
    return (
        <div>
            <div className="br10">
                <div
                    className="flex justify-center align-center"
                    style={{
                        backgroundColor: "#E59011",
                        paddingTop: 60,
                        paddingBottom: 50
                    }}>
                    <div
                        className="round bold bw flex place-center"
                        style={{
                            width: 78, height: 78,
                            fontSize: 38,
                            color: "#E59011",
                            marginRight: 15
                        }}>
                        5%
                    </div>
                    <div >
                        <div className="f19 tw bold">
                            Return Of
                        </div>
                        <div className="f19 tw bold">
                            Investment Monthly
                        </div>
                    </div>

                </div>
                <div
                    style={{
                        backgroundColor: "#E0E0E0",
                        padding: "40px 10px 60px 10px"
                    }}>
                    <div >
                        <div className="tb f18 bolder center-text">
                            Investment in BTC is equivalent
                    </div>
                        <div className="tb f18 bolder center-text">
                            to USD at the current BTC price
                        </div>
                    </div>
                    <div className="center-text">
                        <Link href={links.invest || ""}>
                            <a
                                style={{
                                    backgroundColor: "rgba(56, 56, 56, 0.4)",
                                    padding: "20px 70px"
                                }}
                                className="text-brand-orange p20 f24 inline-block bold mt10 br10">
                                Invest
                        </a>

                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

const Cash = () => {
    return (
        <div>
            <InvestmentAsset

                bg="#800080"
                asset="PRIME"
                range="$50 - $5000"
            />
            <InvestmentAsset
                bg="#008000"
                asset="PROPEL"
                range="$1000 - $15000"
            />
            <InvestmentAsset
                bg="#D4AF37"
                asset="PROSPER"
                range="$500 & ABOVE"
            />
        </div>
    )
}



const InvestmentAsset = ({ range, asset, bg }) => {
    return (
        <div className="mb20">
            <h3
                style={{ borderRadius: "10px 10px 0 0", backgroundColor: bg }}
                className="f17 p20 center-text fw" >
                {asset}
            </h3>
            <div
                className="center-text"
                style={{ background: "transparent linear-gradient(180deg, #707070 0%, #383838 100%) 0% 0% no-repeat padding-box", padding: "33px 35px" }}>
                <p
                    className="fw mb10 bold"
                    style={{ fontSize: 29 }}>
                    {range}
                </p>
                <button
                    style={{ color: "#E59011", padding: "11px 30px" }}
                    className="br10 pointer">
                    Invest
</button>

            </div>
        </div>
    )
}


const AssetProperty = ({ props = [], bg }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr repeat(3,1fr)", columnGap: 5, marginBottom: 5 }}>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                {props[0]}
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                {props[1]}
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                {props[2]}
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                {props[3]}
            </div>
        </div>
    )
}


const AssetPropertyReward = ({ props = [], bg }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr repeat(3,1fr)", columnGap: 5, marginBottom: 5 }}>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                Rewards & Benefit
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="flex align-center justify-center">
                <span
                    className="block"
                    style={{ width: 20, height: 20, border: "2px solid #707070", borderRadius: 100 }}>

                </span>
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                <FaCheckCircle
                    style={{ color: "#8BBD43" }} />
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                <FaCheckCircle
                    style={{ color: "#8BBD43" }} />
            </div>
        </div>
    )
}


const AssetPropertyLife = ({ props = [], bg }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr repeat(3,1fr)", columnGap: 5, marginBottom: 5 }}>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                Life Account
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="flex align-center justify-center">
                <span
                    className="block"
                    style={{ width: 20, height: 20, border: "2px solid #707070", borderRadius: 100 }}>
                </span>
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                <FaCheckCircle
                    style={{ color: "#8BBD43" }} />
                <h4 className="f20">
                    1% EARNINGS MONTHLY
                </h4>
                <p className="f16">(Withdraw at end of 6 months)</p>
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">

                <FaCheckCircle
                    style={{ color: "#8BBD43" }} />
                <h4 className="f20">
                    1.25% EARNINGS MONTHLY
                </h4>
                <p className="f16">(Withdraw at end of 12 months)</p>
            </div>
        </div>
    )
}


const AssetPropertyGoalWallet = ({ props = [], bg }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "0.8fr repeat(3,1fr)", columnGap: 5, marginBottom: 5 }}>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">
                Goal Wallet
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="flex align-center justify-center">
                <span
                    className="block"
                    style={{ width: 20, height: 20, border: "2px solid #707070", borderRadius: 100 }}>
                </span>
            </div>

            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">

                <FaCheckCircle
                    style={{ color: "#8BBD43" }} />
                <h4 className="f20">
                    2% EARNINGS MONTHLY
                </h4>
                <p className="f16">(Accessed after 6 months)</p>
            </div>
            <div
                style={{ backgroundColor: bg }}
                className="center-text f20 p20 bold">

                <FaCheckCircle
                    style={{ color: "#8BBD43" }} />
                <h4 className="f20">
                    2% EARNINGS MONTHLY
                </h4>
                <p className="f16">(Withdraw at end of 12 months)</p>
            </div>
        </div>
    )
}