import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaCheckCircle } from 'react-icons/fa'

export default function Home() {
    const style = {
        investCat: {
            paddingTop: 24,
            paddingBottom: 24,
            textAlign: "center",
            fontSize: 14,
            backgroundColor: "#CCCCCC",
            cursor: "pointer",
            fontWeight: "bold"
        }
    }
    return (
        <main style={{ margin: "30px 198px" }}>
            <h1 style={{ fontSize: 30, fontWeight: "bold", color: "#000000", marginBottom: 27 }}
                className="center-text">
                CHOOSE AN ASSET
        </h1>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", columnGap: 10 }}>
                <div style={style.investCat}>
                    CASH INVESTMENT
                </div>
                <div style={style.investCat}>
                    CRYPTO INVESTMENT
                </div>
                <div style={style.investCat}>
                    STOCK INVESTMENT
                </div>
            </div>

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

            </section>



        </main>
    )
}


const InvestmentAsset = ({ range, asset, bg }) => {
    return (
        <div>
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