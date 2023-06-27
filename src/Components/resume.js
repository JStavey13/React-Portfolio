import resume from "../image/Resume.jpg"
import resumeDownload from "../image/Resume.pdf"
import bootcampCert from "../image/bootcampCert.jpg"
import bootcampDownload from "../image/bootcampCert.pdf"


export default function Resume() {

    return (
        <div>
{/* resume header */}
            <h1 style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "40px",
                outlineStyle: "solid",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                width: "20%",
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
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "40px",
                outlineStyle: "solid",
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                width: "30%"
            }}>
                Bootcamp Certificate

{/* bootcamp cert download button */}
                <p>
                    <a href={bootcampDownload} className="download-btn" download>Download</a>
                </p>
            </h1>
{/* bootcamp cert pic */}
            <img src={bootcampCert}
                alt="resume"
                style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    outlineStyle: "solid",
                    borderRadius: "40px",
                    width: "55%",
                    marginBottom: "80px"
                }}
            ></img>

            

        </div>
    )
}