import { CHeader } from "@coreui/react";
import "./About.css";

export default function About() {
    
    return (
        <div className="about-div mx-auto">
            <p className="fs-2 fw-bold">关于我们</p>
            <p className="fs-4">我们是VIP Lab, 我们正在研发一款...</p>
            <CHeader className="my-2"/>
            <p className="fs-2 fw-bold">我们的愿景...</p>
            <CHeader className="my-2"/>
            <p className="fs-2 fw-bold">我们的价值观...</p>
        </div>
    )
}