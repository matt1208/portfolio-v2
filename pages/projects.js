import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../lib/fetcher';

function myFunction() {
    document.body.classList.toggle('dark');
}

export default function Home() {
    const [dark, setDark] = useState(false);
    const { data } = useSWR('/api/now-playing', fetcher);
    const project = "BrainDUMP"
    let cssProperties = {};
    if (dark) {
        cssProperties["--body-bg-color"] = "#393E41";
        cssProperties["--card-bg-color"] = "#587B7F";
        cssProperties["--card-border"] = "2px solid #587B7F";
        cssProperties["--tag-border"] = "1px solid #1E2019";
        cssProperties["--tag-bg-color"] = "#587B7F";
        cssProperties["--title-color"] = "#D3D0CB";
        cssProperties["--subheader-color"] = "#D3D0CB";
        cssProperties["--text-color"] = "#D3D0CB";
        cssProperties["--text-border-color"] = "#587B7F"
        cssProperties["--smallheader-color"] = "#D3D0CB";
    }

    return (
        <>
            <div className={styles.container} style={cssProperties}>
                <Head>
                    <title>Projects</title>
                    <link rel="icon" href="/home.png" />
                </Head>

                <div className={styles.navbar} style={{ width: "100%" }}>
                    <img onClick={() => { setDark(!dark); myFunction(); }} style={{ marginTop: "20px", cursor: 'pointer' }} src="/sun.png"></img>
                    <p className={styles.rightnav}>Projects</p>
                    <p className={styles.rightnav} style={{ paddingRight: '44px' }}>Link</p>
                </div>

                <div className={styles.main} style={cssProperties}>


                    <p className={styles.subheader} style={{
                        marginTop: '20px'
                    }}>
                        Projects
          </p>

                    <div className={styles.grid}>

                        {/* Card 1 */}

                        <div className={styles.card2}>

                            <img src="brain.svg" alt="Test Graphic" className={styles.cardimg} height="150px" width="200px" />

                            <p
                                className={styles.pctext}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    marginBottom: "35px",
                                    position: "absolute",
                                    bottom: "0"
                                }}
                            >
                                BrainDUMP
              </p>
                            <p
                                style={{
                                    marginTop: "0px",
                                    position: "absolute",
                                    bottom: "0",
                                    marginBottom: "15px"
                                }}
                                className={styles.pctext}
                            >
                                Description
              </p>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.card2}>

                            <img src="brain.svg" alt="Test Graphic" className={styles.cardimg} height="150px" width="200px" />

                            <p
                                className={styles.pctext}
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    marginBottom: "35px",
                                    position: "absolute",
                                    bottom: "0"
                                }}
                            >
                                Students Who Code
              </p>
                            <p
                                style={{
                                    marginTop: "0px",
                                    position: "absolute",
                                    bottom: "0",
                                    marginBottom: "15px"
                                }}
                                className={styles.pctext}
                            >
                                Description
              </p>
                        </div>
                    </div>



                    <br></br>




                </div>
            </div >

            <footer>
                <div className={styles.container} style={cssProperties}>
                    <div className={styles.grid} style={{ marginTop: "20px" }}>
                        <div className={styles.live}>
                            <p>Currently Playing:
              {data?.songUrl ? (
                                    <a
                                        href={data.songUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.title}
                                    </a>
                                ) : (
                                    <p>
                                        Not Playing
                                    </p>
                                )}
                            </p>
                        </div>

                        <div className={styles.live}>
                            <p>Currently Working On: {project}</p>
                        </div>
                    </div>

                    {/* 
          <Link href="https://github.com/matt1208"><img style={{ cursor: 'pointer' }} src="github.png"></img></Link>
          <p style={{ fontSize: '12px', color: '#393E41' }}>Icons from icons8.com </p> */}
                </div>
            </footer>
        </>
    )
}

