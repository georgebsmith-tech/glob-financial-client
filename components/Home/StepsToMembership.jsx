
import { FaBriefcase, FaMoneyBill, FaMousePointer, FaSignature } from 'react-icons/fa'




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


export default HowToBecomeAMember