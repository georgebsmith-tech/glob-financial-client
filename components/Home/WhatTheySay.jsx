

const WhatTheySay = () => {
    return (
        <div className="mobile-container">
            <h3 className="center-text f30">
                <span className="text-brand-green " style={{ marginRight: 5 }}>
                    What They Say
    </span>
                <span className="text-brand-orange">
                    About Us
    </span>
            </h3>
            <p className="f16">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            </p>

            <div
                className="mt20"
                style={
                    {
                        display: "grid", gridTemplateColumns: "0.7fr 1fr",
                        gap: 15,
                        padding: "10px 0px"
                    }}>
                <div>
                    <img src="./images/home-client.png" alt="" />
                </div>
                <div className="flex justify-start align-center">
                    <div>


                        <div className="bold f16">
                            Godswill Augustine
                </div>
                        <div className="f16">
                            Nigeria
                   </div>
                    </div>
                </div>
            </div>

            <p
                className="f16 mt20"
                style={{ boxShadow: "0 3px 30px #00000017", borderRadius: "15px 0 15px 15px", padding: "35px 20px 10px 20px" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            </p>

        </div>
    )
}

export default WhatTheySay