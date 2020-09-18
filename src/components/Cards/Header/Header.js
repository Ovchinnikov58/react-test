import React from 'react';
import classes from './Header.module.scss'

export default class Header extends React.Component {
    state ={
        header: 'PRFCT FIT'
    }
    render() {
        return (
            <div className = {classes.Header}>
                <div className = {classes.title}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes.ico}>
                        <path d="M9.01944 5C9.01944 4.20435 9.33619 3.44129 9.90001 2.87868C10.4638 2.31607 11.2285 2 12.0259 2C12.8233 2 13.588 2.31607 14.1518 2.87868C14.7156 3.44129 15.0324 4.20435 15.0324 5V6H17.0367V5C17.0367 3.67392 16.5087 2.40215 15.569 1.46447C14.6293 0.526784 13.3548 0 12.0259 0C10.697 0 9.42246 0.526784 8.48275 1.46447C7.54305 2.40215 7.01514 3.67392 7.01514 5V6H9.01944V5Z" fill="#0C1014"/>
                        <path d="M24.0438 22.876L22.0395 6.876C22.0092 6.63415 21.8915 6.41166 21.7083 6.25034C21.5252 6.08903 21.2894 6.00001 21.0451 6H17.0365V10H15.0322V6H9.0193V10H7.015V6H3.00639C2.76213 6.00001 2.52628 6.08903 2.34317 6.25034C2.16006 6.41166 2.04229 6.63415 2.012 6.876L0.00769615 22.876C-0.00829673 23.0164 0.00541426 23.1586 0.0479428 23.2934C0.0904714 23.4282 0.160871 23.5525 0.254591 23.6585C0.348311 23.7644 0.463265 23.8496 0.592023 23.9084C0.720782 23.9672 0.860478 23.9984 1.00208 24H23.0494C23.191 23.9984 23.3307 23.9672 23.4595 23.9084C23.5882 23.8496 23.7032 23.7644 23.7969 23.6585C23.8906 23.5525 23.961 23.4282 24.0036 23.2934C24.0461 23.1586 24.0598 23.0164 24.0438 22.876ZM16.0344 15.75C15.6091 17.2351 12.0258 19.75 12.0258 19.75C12.0258 19.75 8.44306 17.2351 8.01715 15.75C7.26629 13.1277 10.524 12.2515 12.0258 13.75C13.5275 12.2515 16.7852 13.1277 16.0344 15.75Z" fill="#0C1014"/>
                    </svg>
                    {/* {this.state.header} */}
                    <svg width="82" height="12" viewBox="0 0 82 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M9.92322 4.46213C9.92322 7.37261 7.65285 8.71078 5.20306 8.71078H3.38124V11.7842H0.0688477V0.215759H5.20306C7.65975 0.215759 9.92322 1.57001 9.92322 4.46213ZM6.47281 4.46213C6.47281 3.37184 6.02655 2.95868 5.03283 2.95868H3.37664V5.96786H5.03283C6.03115 5.96786 6.47741 5.57077 6.47741 4.46213H6.47281Z" fill="#0C1014"/>
                        <path d="M21.7144 11.7842H17.5739L14.7262 8.44682V11.7842H11.4115V0.215759H16.2168C18.7172 0.215759 20.6724 1.88446 20.6724 4.08339C20.6724 5.98393 19.7523 7.04208 18.0708 7.75592L21.7144 11.7842ZM17.2588 4.36342C17.2588 3.44529 16.7987 2.95868 15.8786 2.95868H14.7285V5.96786H15.7705C16.7964 5.96786 17.2588 5.58683 17.2588 4.36342Z" fill="#0C1014"/>
                        <path d="M26.0872 7.70314V11.7842H22.7748V0.215759H30.9063V3.02524H26.0872V4.89365H30.276V7.70314H26.0872Z" fill="#0C1014"/>
                        <path d="M35.4608 6.00918C35.4608 7.90972 36.7857 9.03443 38.4925 9.03443C39.6581 9.05326 40.813 8.81006 41.8716 8.32288V11.3803C40.7914 11.7978 39.6418 12.0081 38.4833 12C34.8213 12 31.8907 9.40398 31.8907 6C31.8907 2.59602 34.6074 2.84496e-06 38.366 2.84496e-06C39.5689 -0.013133 40.7608 0.22943 41.8624 0.711557V3.76894C40.7655 3.263 39.5743 2.99244 38.366 2.97475C36.5695 2.97475 35.4608 4.11553 35.4608 6.00918Z" fill="#0C1014"/>
                        <path d="M52.8187 0.215759V3.14001H49.5385V11.7842H46.2261V3.14001H42.9459V0.215759H52.8187Z" fill="#0C1014"/>
                        <path d="M61.2561 7.70314V11.7842H57.9437V0.215759H66.0867V3.02524H61.2561V4.89365H65.4472V7.70314H61.2561Z" fill="#0C1014"/>
                        <path d="M70.8023 0.215759V11.7842H67.4899V0.215759H70.8023Z" fill="#0C1014"/>
                        <path d="M81.9999 0.215759V3.14001H78.7198V11.7842H75.4074V3.14001H72.1272V0.215759H81.9999Z" fill="#0C1014"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="81.9311" height="12" fill="white" transform="translate(0.0688477)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>

                <h2 className={classes.subtitle}>Hi {this.props.name}! Here is your weekly updates 👀️</h2>
            </div>
        )
    }
}