import Head from 'next/head'
import Link from 'next/link'

import 'firacode'
import '@fontsource/lobster'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>compute.toys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <span style={{ color: 'white', fontFamily: 'Fira Code', fontSize: '3rem', fontWeight: 'normal' }}><span style={{ color: 'gray' }}>@</span>compute<span style={{ fontFamily: 'Lobster', fontSize: '110%' }}><span style={{ color: 'gray' }}>.</span>toys</span></span>
        </h1>
      </main>

      <main>
        <ul>
          <li><Link href="/new">New</Link></li>
          <li><Link href="/view/435e9bb5c60ef892df53ce2233bae197">Buddhabrot</Link></li>
          <li><Link href="/view/53a3829482e4bce3f8329f19f1641f4c">Caustics</Link></li>
          <li><Link href="/view/5f9677a0ccfbd63d7a8657ad9af3a856">Hash without sine</Link></li>
          <li><Link href="/view/ab237d17e5cdc3759e25c6b4dc1a73aa">Texture colorspace projection</Link></li>
          <li><Link href="/view/ebd53bc4d99f8edd63b623ef0439d10c">Simplex Noise</Link></li>
          <li><Link href="/view/0c70160b4145514241ac78098ac6d19f">Demofox Path Tracing</Link></li>
          <li><Link href="/view/24429fb91484c0bace7c402f1ac1d1bd">Assert demo</Link></li>
          <li><Link href="/view/67af8481dde3948b74e05769827cb5ae">Importance sampling demo</Link></li>
        </ul>
      </main>


      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}