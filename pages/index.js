import Head from 'next/head'
import Link from 'next/link'
import { FaFacebook } from 'react-icons/fa'
import StepsToMembership from '../components/Home/StepsToMembership'

import WhatTheySay from '../components/Home/WhatTheySay'

export default function Home() {
  return (
    <div>
      <div className="mobile-container">
        <h2 className="f30 text-brand-green mb5"
          style={{ fontWeight: 500 }}>
          Start Your Journey To Financial Happiness.
        </h2>
        <h3 className="text-brand-orange f20 mb10">
          Look Into Your Future With Confidence.
        </h3>
        <p className="f16" style={{ fontStyle: "Regular" }}>
          <span className="bold block mb5">Grow your money up to 10% every month.</span> Pay for your bills and other needs from your investment account, without using your return on investment(ROI). It gives you freedom.
        </p>
      </div>

      <OpenAcctLink />

      <div className="mt20">
        <img
          style={{ width: "100%" }}
          src="./images/home-banner.png"
          alt="" />
      </div>

      <StepsToMembership />

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
    <div className="center-text" style={{ padding: "20px 50px" }}>

      <Link href="/sign-up" >
        <a className="f16 br10 bg-brand-orange tw flex wrap" style={{ padding: "7px 45px" }}>
          Open an account now Earn 10%
          more on ROI
         </a>
      </Link>
    </div>
  )
}

