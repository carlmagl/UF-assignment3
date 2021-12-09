import Head from 'next/head'
import {useState} from "react"

export default function Home() {
  const [imageOverlayOpen, setImageOverlayOpen] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Assignment 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className={imageOverlayOpen ? "":"title"}><b>Shared</b> by you</p>
        <img className={imageOverlayOpen && "open"} src="tokyo.jpeg"/>
        <div className={imageOverlayOpen && "titleOpen"}>
          <h2>Lost in Tokyo</h2>
          {imageOverlayOpen && <p style={{fontSize: 20, textAlign: "left"}}>By Jonathan Vik</p>}
        </div>
        <p style={{lineHeight: 1.7}}>Cras mattis consectetur purus sit amet fermentum. 
          Maecenas sed diam eget risus varius blandit sit amet non magna
        </p>
        <button 
          className={`openButton ${imageOverlayOpen && "closeButton"}`} 
          onClick={() => {
            setImageOverlayOpen(!imageOverlayOpen);
          }}
        >{imageOverlayOpen ? "X" : "<"}</button>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          height: 100vh; 
        }

        main p{
          width: 300px;
          text-align: center;
        }

        img{
          object-fit: cover;
          width: 80vw;
          height: 30vh;
          margin-top: 40px;
          border-radius: 4px;
          transition: all 0.7s ease;
          -webkit-transition: all 0.7s ease;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }  

        .title {
          position: absolute;
          top: 40px;
        }

        h2 {
          font-size: 40px;
        }

        .titleOpen {
          margin: 0;
          position: fixed;
          left: 5;
          bottom: 40px;
          z-index: 1;
          color: white;
          width: 300px;
          font-size: 40px;
        }

        .open{
          position: fixed;
          width: 100vw; 
          height: 100vh;
          z-index: 0;
          object-fit: cover;
          margin: 0;
          border-radius: 0px;
        }

        .openButton{
          display:block;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background-color: black;
          color: white;
          border: none;
        }
        
        .closeButton{
          height: 40px;
          width: 40px;
          position: fixed;
          top: 5px;
          background-color: transparent; 
          opacity: 0.7;
          left: 5px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        h2,
        p {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
