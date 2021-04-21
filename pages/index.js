import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';

function myFunction() {
  document.body.classList.toggle('dark');
}

export default function Home() {
  const [dark, setDark] = useState(false);
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
    <div className={styles.container} style={cssProperties}>
      <Head>
        <title>Matthew</title>
        <link rel="icon" href="/home.png" />
      </Head>

      <div className={styles.navbar} style={{ width: "100%" }}>
        <img onClick={() => { setDark(!dark); myFunction(); }} style={{ marginTop: "20px", cursor: 'pointer' }} src="/sun.png"></img>
        <p className={styles.rightnav}>Link </p>
        <p className={styles.rightnav} style={{ paddingRight: '44px' }}>Link</p>
      </div>

      <div className={styles.main} style={cssProperties}>

        <div
          style={{
            marginTop: '20px'
          }}
        >
          <img src="/avatar.png" height="100px" width="100px" style={{ display: 'inline', verticalAlign: "middle" }} ></img>
          <p className={styles.title} style={{ display: 'inline', verticalAlign: "middle", paddingLeft: '10px' }}>
            Hi, I'm Matthew
          </p>
        </div>


        <p className={styles.desctext}
          style={{
            marginTop: '40px'
          }}
        >
          I'm a 17 year old, high school student, athlete, and developer. I am currently working on developing different websites and other projects.
        </p>

        <p className={styles.subheader} style={{
          marginTop: '20px'
        }}>
          Projects
        </p>

        <div className={styles.grid}>
          <div className={styles.card2}>
            <p>project cards</p>
          </div>
          <div className={styles.card2}>
            <p>project cards</p>
          </div>
        </div>


        {/* <br></br>


        <footer>
          <Link href="https://github.com/matt1208"><img style={{ cursor: 'pointer' }} src="github.png"></img></Link>
          <p style={{ fontSize: '12px', color: '#393E41' }}>Icons from icons8.com </p>
        </footer>  */}

      </div>
    </div >
  )
}

