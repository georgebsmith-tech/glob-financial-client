import Head from 'next/head'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import HowItWorks from '../components/Home/HowItWorks'

import WhatTheySay from '../components/Home/WhatTheySay'

export default function Home() {
  return (
    <div>
      <div className="container">
        <h2 className="f18 text-brand-green mt30 center-text bolder"
        >
          Grow your money up to 10% monthly.
        </h2>
        <h3 className="tb bolder f36 mb10 center-text mt20">
          Start your journey to Financial happiness.
        </h3>
        <p className="f16 center-text" style={{ fontStyle: "Regular" }}>
          <span className="bold block mb5">Grow your money up to 10% every month.</span> Your investment helps you pay your bills and meet other needs without having to touch your monthly ROI. This is freedom. Open an account now. Earn 10% more ROI
        </p>
      </div>

      <OpenAcctLink />

      <div className="mt20">
        <img
          style={{ width: "100%" }}
          src="./images/home-banner.png"
          alt="" />
      </div>

      <HowItWorks />

      <CalculateReturn />
      <OpenAcctLink />


      <WhatTheySay />
      <SubScribe />
      <div className="f30 tw center-text bg-brand-green p20 mt50 bold">
        Start Investing Today Sign Up For Free
      </div>
      <OurCommunities />
      <RiskNotice />


    </div>
  )
}


const CalculateReturn = () => {
  return (
    <div className="mt50 container">
      <h2 className="f33 tb bolder center-text">
        Calculate Returns on Investment
</h2>

      <p
        style={{ fontFamily: "Gilroy", lineHeight: 1.5 }}
        className="f18 mt10">For Better understanding of your Investment Retuns, Calculate your ROI by selecting the membership Plan you are interested in.</p>

      <div className="mt50">
        <div>
          <div>
            <label htmlFor="" className="f18">Select Membership plan</label>
          </div>

          <select
            style={{ width: "100%" }}
            name="" id=""
            className="p10 mt5">
            <option value="Basic">Basic</option>
            <option value="Basic">Basic</option>
          </select>
        </div>
        <div className="mt30">
          <div>
            <label htmlFor="" className="f18">Enter Amount</label>
          </div>

          <input
            type="number"
            style={{ width: "100%" }}
            name="" id=""
            className="p10 mt5" />

        </div>

        <div className="mt30">
          <div>
            <label htmlFor="" className="f18">Select Duration</label>
          </div>

          <select
            style={{ width: "100%" }}
            name="" id=""
            className="p10 mt5">
            <option value="Basic">Basic</option>
          </select>
        </div>
      </div>

      <div
        className="p20 mt30"
        style={{ backgroundColor: "rgba(139,189,67,0.1)" }}>
        <h3 className="center-text f24 tb">
          Returns on Investment

        </h3>
        <div className="center-text f33 bolder mt30 text-brand-green">
          Basic Investment Plan
        </div>
        <div
          className="center-text bolder text-brand-orange mt50"
          style={{ fontSize: 64 }}>

          N 800
        </div>
      </div>
    </div>
  )
}


const RiskNotice = () => {
  return (
    <div className="mobile-container mt50">
      <p className="f16 tb">
        <span className="text-brand-green bold">
          RISK DISCLOSURE
      </span>: All investments involve risks, including the possible loss of capital, before deciding to invest, you should carefully and dilligently consider your personal Investment objectives.
      </p>
    </div>
  )
}

const OurCommunities = () => {
  return (
    <div
      className="mobile-container"
      style={{ marginTop: 80 }}>
      <h2 className="text-brand-orange f30 mb10">
        Our Communities
      </h2>
      <div>
        <h4 className="f20 text-brand-green mb10">
          Social
        </h4>
        <p className="f16 tb">
          Join us with any of the social media handles, interact, engage and win amazing giveaways.
        </p>
        <ul
          className="mt20 center-text"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr" }}>
          {
            [2, 4, 6].map(() => <li>
              <div>
                <FaFacebook size="1.7rem" />
              </div>
              <Link href="#">
                <a className="f16 tb">
                  Facebook
              </a>
              </Link>
            </li>)
          }

        </ul>
      </div>
    </div>
  )
}

const SubScribe = () => {
  return (
    <div >
      <div
        style={{ padding: "30px 0px" }}
        className="center-text f30">
        <div className="text-brand-green bold">
          Have Questions?
         </div>


        <div>


          <span className="text-brand-green mr5 bold">
            Let Us
          </span>
          <span className="text-brand-orange bold">
            Help You.
          </span>
        </div>
      </div>
      <div className="mobile-container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr" }}
          className="center-text">
          <input
            className="br10 p10"
            style={{ boxShadow: "0px 3px 20px #00000029", border: "1px solid #fff" }}
            type="text" placeholder="Enter Your Email Here" />
          <button
            className="bg-brand-orange br10 tw"
            style={{ boxShadow: "0px 3px 20px #00000029", border: "1px solid #fff" }}>
            Subscribe
            </button>
        </div>
      </div>
    </div>
  )
}


const OpenAcctLink = () => {
  return (
    <div>
      <div className="center-text" style={{ padding: "20px 50px" }}>

        <Link href="/sign-up" >
          <a className="f16 br5 bg-brand-orange tw wrap" style={{ padding: "10px 25px" }}>
            Open an Account
         </a>
        </Link>

      </div>

      <div className="bolder tb center-text mt5 f18">
        Earn 10% more on ROI
      </div>
    </div>
  )
}

