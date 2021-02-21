import Head from 'next/head'
import styles from '../styles/Home.module.css'

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



        </main>
    )
}
