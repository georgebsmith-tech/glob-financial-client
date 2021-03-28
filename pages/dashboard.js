import Head from 'next/head'
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function SignIn() {
    return (
        <div
            className="" style={{ width: "100vw" }}>
            <h1 className="bold f20 tb v-shadow p10 mt20">
                Dashboard
            </h1>
            <UserProfile />
            <AccountValue />

            <ReferAFriend />




        </div>



    )
}


const UserProfile = () => {
    return (
        <div className="center-text flex align-center flex-cols  v-shadow p40 mt20">
            <div className="mb20" style={{ width: 70 }}>
                <img
                    style={{ width: "100%" }}
                    src="./images/home-client.png" alt="" />
            </div>

            <h3 className="tb f23">
                Godswill Augustine
                </h3>
            <div className="f16">
                Member ID: <span className="bold tb">635343***</span>
            </div>
        </div>
    )
}

const ReferAFriend = () => {
    return (
        <div className="p10 tw v-shadow mt20" style={{ paddingTop: 30, paddingBottom: 50 }}>
            <h2 className="f16 bolder tb mb30">
                Spread The Word
        </h2>
            <p className="f16 tb mb30">
                Invite your friends to Sign up to Glob and earn a reward.
        </p>
            <div className="center-text">
                <button className="tw br10 bg-brand-orange f16 p15 bd-brand-orange bold" style={{ width: "80%" }}>
                    Refer A friend
            </button>
            </div>

        </div>
    )
}

const AccountValue = () => {
    return (
        <div className="bw mt20 p10" style={{ paddingTop: 20 }}>
            <div className="center-text mb30">
                <h2 className="f14">
                    Account Value
            </h2>
                <div className="f30 bold tb mt10">
                    $1,234.98
            </div>
            </div>
            {
                [2, 4].map(() => <li >
                    <Link href={links.withdrawal}>
                        <a className="v-shadow mb20 flex align-center space-between p20" style={{ paddingBottom: 40 }}>


                            <div>
                                <h3 className="f14 mb20">
                                    Life Account
                </h3>
                                <div className="f18 bolder">
                                    14,000
                        </div>

                            </div>
                            <div>
                                <div>
                                    this
                        </div>

                            </div>
                        </a>
                    </Link>

                </li>)
            }



        </div>
    )
}