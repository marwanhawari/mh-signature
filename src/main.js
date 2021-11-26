const mhSignatureElement = document.querySelector("#mh-signature");

const mhSignatureChild = document.createElement("div");
mhSignatureChild.setAttribute("id", "signature-container");
mhSignatureChild.innerHTML = `
    <style>
        #signature-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        #signature-svg {
            fill-rule: nonzero;
            clip-rule: evenodd;
            stroke-linecap: round;
            stroke-linejoin: round;
            width: 10%;
            height: auto;
            padding-left: 0.5rem;
        }
        
        #signature-svg:hover {
            cursor: pointer;
        }
        
        #signature-path {
            stroke-dasharray: 3625;
            stroke-dashoffset: 3625;
            animation: sign 4s ease;
            animation-fill-mode: forwards;
        }
        
        @keyframes sign {
            to {
                stroke-dashoffset: 0;
            }
        }
    </style>

    <span id="signature-message">Developed by</span>
    <svg
        id="signature-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:vectornator="http://vectornator.io"
        version="1.1"
        xml:space="preserve"
        viewBox="0 0 832.642 342.925"
    >
        <path
            id="signature-path"
            stroke="#000000"
            stroke-width="12"
            d="M67.7009+192.781C64.8863+194.657+56.9285+200.118+58.0447+204.583C58.2386+205.359+59.4147+205.85+60.1905+205.656C70.8886+202.981+77.2266+189.311+83.7948+182.051C87.5274+177.926+91.6628+174.183+95.5969+170.249C120.537+145.309+143.772+120.862+172.847+100.509C182.296+93.8953+192.453+88.2536+202.889+83.3426C205.281+82.2169+209.493+79.1621+212.545+81.1968C213.965+82.1434+213.618+88.6055+213.618+89.7802C213.618+99.9178+210.157+109.493+206.108+118.749C196.16+141.486+181.434+161.481+169.628+183.124C161.036+198.877+153.249+214.939+143.878+230.333C137.998+239.993+131.103+249+124.566+258.229C122.155+261.632+120.091+265.278+118.128+268.958C117.222+270.657+114.991+275.974+115.982+274.323C119.274+268.837+121.239+262.621+124.566+257.156C135.226+239.643+147.715+223.877+158.899+206.729C180.501+173.606+200.044+137.775+226.493+108.02C233.048+100.646+240.712+94.3373+247.952+87.6343C254.213+81.8366+263.314+72.6134+272.629+72.6134C276.276+72.6134+275.539+79.7764+274.775+83.3426C274.272+85.6885+272.447+87.5526+271.556+89.7802C270.296+92.9304+269.704+96.3309+268.337+99.4364C254.501+130.882+238.161+161.465+220.056+190.635C214.652+199.341+209.618+208.292+205.035+217.458C204.32+218.888+203.604+220.319+202.889+221.749C202.531+222.465+201.251+224.461+201.816+223.895C206.588+219.124+208.942+212.434+212.545+206.729C216.098+201.104+220.263+195.886+224.347+190.635C248.899+159.068+273.441+127.637+299.452+97.2906C304.25+91.6926+308.581+85.7039+313.4+80.1239C318.938+73.7116+322.707+70.5548+331.64+68.3217C333.409+67.8794+335.91+67.9358+337.004+69.3947C342.068+76.1464+332.666+92.0189+329.494+98.3635C319.295+118.761+306.691+137.512+297.306+158.447C293.31+167.361+289.419+176.321+285.504+185.27C284.732+187.035+281.817+191.79+283.358+190.635C288.281+186.943+290.802+180.816+294.087+175.614C300.606+165.293+306.629+154.656+313.4+144.499C324.144+128.382+335.933+114.733+347.733+99.4364C352.584+93.149+356.452+86.1+361.681+80.1239C366.514+74.6013+372.066+69.7138+377.775+65.103C383.127+60.7804+389.135+55.4467+396.015+55.4467C396.645+55.4467+398.331+59.6497+397.088+66.1759C396.178+70.9544+394.334+75.5091+392.796+80.1239C390.757+86.2405+388.838+92.412+386.358+98.3635C374.446+126.953+357.584+152.5+347.733+182.051C344.469+191.845+341.685+201.86+340.223+212.093C339.965+213.898+339.497+217.758+341.296+217.458C346.828+216.536+351.135+208.428+354.171+204.583C362.825+193.621+372.115+183.176+380.994+172.395C410.621+136.42+436.754+97.7486+468.973+64.03C475.962+56.7166+483.279+49.7244+490.432+42.5716C496.732+36.2714+497.514+34.1716+505.453+30.7695C510.559+28.5812+525.123+22.9081+525.838+32.9153C526.073+36.2042+524.448+39.362+523.692+42.5716C519.352+61.0182+505.754+74.4872+496.869+90.8531C486.872+109.269+478.023+128.297+467.9+146.645C446.683+185.102+425.536+224.396+407.817+264.666C404.445+272.329+401.364+280.174+399.234+288.271C397.766+293.847+397.328+299.676+397.088+305.437C396.885+310.309+396.783+315.693+402.452+317.239C414.405+320.499+424.666+304.971+430.348+296.854C433.762+291.978+437.154+287.059+440.005+281.833C445.778+271.249+449.902+254.001+452.88+243.208C458.238+223.782+462.99+195.012+452.88+176.687C448.997+169.65+445.777+161.893+440.005+156.301C434.013+150.497+426.071+147.025+418.546+143.426C409.558+139.128+400.218+135.475+390.65+132.697C364.955+125.237+337.991+121.91+311.254+120.895C237.082+118.078+160.276+130.296+91.3052+158.447C71.4601+166.547+51.6682+175.184+33.3675+186.343C27.5018+189.92+22.0054+194.237+17.2737+199.218C15.0705+201.537+12.982+204.603+12.982+207.801C12.982+210.091+15.466+211.76+17.2737+213.166C21.0573+216.109+24.6937+215.312+29.0758+215.312C38.0168+215.312+46.9908+216.08+55.8988+215.312C82.6108+213.009+108.926+207.286+135.295+202.437C204.829+189.649+273.853+174.13+343.442+161.666C421.236+147.732+499.916+135.494+578.411+126.259C597.644+123.997+617.033+123.348+636.349+121.968C676.034+119.133+715.669+117.432+755.443+116.603C761.879+116.469+768.318+116.603+774.756+116.603C780.613+116.603+789.432+115.176+795.141+116.603C795.917+116.797+793.789+117.577+792.996+117.676C790.866+117.942+788.704+117.676+786.558+117.676C785.127+117.676+783.697+117.676+782.266+117.676C776.828+117.676+771.611+118.749+766.173+118.749"
            fill="none"
            stroke-linecap="round"
            opacity="1"
            stroke-linejoin="round"
        />
    </svg>
`;

mhSignatureChild.addEventListener("click", () => {
  window.open("https://www.github.com/marwanhawari");
});

mhSignatureElement.append(mhSignatureChild);
