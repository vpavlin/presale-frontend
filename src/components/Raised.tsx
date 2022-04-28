import { ethers } from "ethers";
import { useEffect, useState } from "react";
import {
    CHAINS,
    Contracts,
    Explorers,
    Networks,
    TOTAL_RAISE,
} from "../constants";
import { usePresaleContext } from "../hooks/userPresaleContext";
import { useWeb3Context } from "../hooks/useWeb3Context";
import { Presale__factory } from "../typechain/factories/Presale__factory";
import { Presale } from "../typechain/Presale";

const Raised = () => {
    const { connected, chainId, provider } = useWeb3Context();
    const { raised, raisedPerChain, hardCap } = usePresaleContext();
    const [showDetails, setShowDetails] = useState(false);

    const truncate = (n: number, decimals: number) =>
        Math.trunc(n * 10 ** decimals) / 10 ** decimals;

    const calcBarRatio = (v: number) => {
        const ratio = (v * 100) / raised;
        return ratio <= 4 ? 4 : ratio;
    };
    // const [raised, setRaised] = useState(NaN);

    /*useEffect(() => {
        if (provider && chainId && Contracts[chainId!]) {
            const presale:Presale = Presale__factory.connect(Contracts[chainId!].PRESALE, provider!.getSigner())
            presale.contributed().then((value) => setRaised(parseFloat(ethers.utils.formatEther(value))))
        }
        
      
    }, [connected, chainId, provider])*/

    return (
        <div className="raised-container">
            <div className="raised-title">Total Raised</div>
            <br />
            <div className="raised-amounts">
                <span className="raised-current">
                    ${truncate(raised, 1).toLocaleString()} /{" "}
                </span>
                <span className="raised-total">
                    ${TOTAL_RAISE.toLocaleString()}
                </span>
            </div>
            <div
                className={`raised-details-title ${showDetails ? "show" : ""}`}
                onClick={(e) => {
                    setShowDetails(!showDetails);
                }}
            >
                {showDetails ? (
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
                        />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                        />
                    </svg>
                )}
            </div>
            <div className={`raised-details ${showDetails ? "show" : ""}`}>
                <ul>
                    {raisedPerChain.map((v, i) => (
                        <li key={`raised-${i}`}>
                            {/* EXPERIMENTAL - "Bars that represent the ratio of contributions from each chain */}
                            {/* May be better to just leave the small translucent lines instead*/}
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${calcBarRatio(v)}%`,
                                }}
                            ></div>
                            <span>
                                ${truncate(v, 1).toLocaleString() + " "}
                            </span>
                            <a
                                href={`${Explorers[CHAINS[i]]}address/${
                                    Contracts[CHAINS[i]].PRESALE
                                }`}
                                target="_blank"
                            >
                                {Networks[CHAINS[i]]}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Raised;
