import Head from 'next/head'
import Link from 'next/link'
import { FaBriefcase, FaMoneyBill, FaMousePointer, FaSignature } from 'react-icons/fa'


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

      <div className="center-text" style={{ padding: "20px 50px" }}>

        <Link href="/sign-up" >
          <a className="f16 br10 bg-brand-orange tw flex wrap" style={{ padding: "7px 45px" }}>
            Open an account now Earn 10%
            more on ROI
         </a>
        </Link>
      </div>

      <div className="mt20">
        <img
          style={{ width: "100%" }}
          src="./images/home-banner.png"
          alt="" />
      </div>

      <HowToBecomeAMember />


    </div>
  )
}


const HowToBecomeAMember = () => {
  return (
    <div className="mt20 mobile-container">
      <h2 className="center-text text-brand-orange f30">
        How To Become A Member
      </h2>
      <h5 className="center-text text-brand-green f20 mt15">
        In 4 simple steps you join the community of globers
      </h5>
      <ul

        className="center-text f16"
        style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "repeat(2,100px", paddingTop: 15, marginTop: 50, gap: 15 }}>
        <li className="flex justify-center">
          <div>
            <div>
              <FaMousePointer size="2.5rem" />
            </div>
            <div>
              Click on Open Account
          </div>
          </div>
        </li>
        <li className="flex justify-center">
          <div>
            <div>
              <FaBriefcase size="2.5rem" />
            </div>
            <div>
              Choose your asset type and register your personal information
          </div>
          </div>
        </li>
        <li className="flex justify-center">
          <div>
            <div>
              <FaMoneyBill size="3rem" />
            </div>
            <div>
              Fund your account
            </div>
          </div>
        </li>
        <li className="flex justify-center">
          <div>
            <div>
              <FaSignature style={{ color: "red" }} size="3rem" />
            </div>

            <div>
              Your funds are verified and your account activated
      </div>
          </div>
        </li>
      </ul>
    </div>
  )
}