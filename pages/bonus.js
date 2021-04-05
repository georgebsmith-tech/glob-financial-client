import Head from 'next/head'
import { useState } from "react"
import styles from '../styles/Home.module.css'
import links from '../configs/links'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { FaSmileO } from 'react-icons/fa'

export default function SignIn() {

    let content;

    const [active, setActive] = useState("referrals")
    const options = ["referrals", "gift", "contest"]
    if (active === "referrals") {
        content = <Referrals />
    }
    return (
        <div
            className="" style={{ width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.16)" }}>
            <h1 className="bolder f20 tb v-shadow p10 mt20 bw">
                Bonus
            </h1>
            <ul className="bw grid grid3">
                {
                    options.map(option => <li
                        onClick={(e) => setActive(e.target.dataset.option)}
                        data-option={option}
                        className={`f16 center-text ${active === option && "bg-brand-green tw bold"}`} style={{ padding: "13px 19px" }}>
                        {option.toUpperCase()}
                    </li>)
                }
            </ul>
            {
                content
            }



        </div>



    )
}


const Referrals = () => {
    return (
        <>
            <ReferAFriend />
            <MyReferrals />
            <MyReferralIncome />
        </>

    )
}

const MyReferralIncome = () => {
    return (
        <div className="bw mb30">


            <h2 className="f14 p15 normal" style={{ borderBottom: "2px solid #00000029" }}>
                MY REFERRAL INCOME
        </h2>

            <div style={{ paddingTop: 40 }}>
                <div className="bg-brand-green">
                    <h4 className="f20 tb bolder p20">
                        You earned
                </h4>

                    <div className="f30 tw bold" style={{ padding: "0px 0px 0px 40px" }}>
                        1,230.32 USD
</div>
                    <Link href={links.withdraw || ""}>
                        <a className="text-brand-orange bold f18 mb20 block p20">
                            Withdraw
                </a>

                    </Link>
                </div>
            </div>
            <div className="center-text">
                <div className="f16 tb">
                    Referal bonuses is processed within 30days.
                </div>
                <div className="f20 mt10 tb bold">
                    {"you can earn much more".toUpperCase()}
                </div>
                <div className="mt20">
                    <img src="./images/Icon feather-smile.svg" alt="" />
                </div>
                <p className="text-brand-green mt10 f20 p15">
                    Invite more of your friends, share your link or chat a friend with your link.
                </p>
                <div className="mt10 p15">
                    <button className="br5 bd-o bg-brand-orange tw bold fw p10">
                        Refer a friend
                </button>
                </div>
                <div className="p15">
                    <button
                        style={{ width: "100%" }}
                        className="br5 bd-o bw text-brand-orange bold p10">
                        Increase Investment
                </button>
                </div>
            </div>
        </div>
    )
}

const MyReferrals = () => {
    return (
        <div className="bw mt20">
            <h2 className="f14 p15" style={{ borderBottom: "2px solid #00000029" }}>
                MY REFERRALS
            </h2>
            <ul>
                <li>
                    <ul className="grid grid3">
                        <li>    <h4 className="f14 bold p10 tb">User</h4></li>
                        <li>    <h4 className="f14 bold p10 tb">Bonus</h4></li>
                        <li>    <h4 className="f14 bold p10 tb">Country</h4></li>
                    </ul>
                </li>
                <li>
                    {
                        [1, 2, 3, 2, 4, 2, 3].map(info =>
                            <ul className="grid grid3 gap20 mb10 p10" style={{ backgroundColor: "#00000020" }}>



                                <li className="f16" >
                                    547123***
                        </li>
                                <li className="f16">
                                    23
                                            </li>

                                <li className="f16">
                                    Nigeria
                                            </li>


                            </ul>)
                    }

                </li>
            </ul>
        </div>
    )
}
const ReferAFriend = () => {
    return (
        <div className="bw mt20 container" >
            <div className="center-text">
                <img src="./images/referral.png" alt="" />
            </div>
            <h2 className="f18 bolder tb">
                EVERYBODY WANTS TO WIN AND EARN CASH
            </h2>
            <p className="f16 mt10">
                Love your friends and want them to do win in their finances, invite them and earn.
            </p>

            <div className="mt50">
                <button className="br5 bd-o bg-brand-orange tw bold fw p10">
                    Refer a friend
                </button>
            </div>
        </div>
    )
}
