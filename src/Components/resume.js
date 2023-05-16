import resume from "../image/resume.jpg"
import resumeDownload from "../image/Resume.pdf"


export default function Resume() {

    return (
        <div className="display">
{/* resume header */}
            <h1 style={{
                marginTop: "40px",
                outlineStyle: "solid",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
            }}>
                Resume
{/* resume download button */}
                <p>
                    <a href={resumeDownload} className="download-btn" download>
                        Download Resume
                    </a>
                </p>
            </h1>
{/* resume picture */}
            <img src={resume}
                alt="resume"
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    outlineStyle: "solid",
                    borderRadius: "40px",
                    width: "55%",
                }}
            ></img>

{/* bootcamp cert header */}
            <h1 style={{
                marginTop: "40px",
                outlineStyle: "solid",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
            }}>
                Bootcamp Certificate
                <p>
                    <a href="././public/assets/image/bootcampCert.pdf" className="download-btn" download>Download</a>
                </p>
            </h1>
            <img src="././public/assets/image/bootcampCert.jpg"
                alt="resume"
                id="resume"
            ></img>

        </div>
    )
}