'use client'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <style jsx>{`
        .container {
          font-family: 'Varela Round', sans-serif;
          color: #9b9b9b;
          position: relative;
          height: 100vh;
          text-align: center;
          font-size: 16px;
        }
        .container h1 {
          font-size: 32px;
          margin-top: 32px;
        }
        .boo-wrapper {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding-top: 64px;
          padding-bottom: 64px;
        }
        .boo {
          width: 160px;
          height: 184px;
          background-color: #f7f7f7;
          margin-left: auto;
          margin-right: auto;
          border: 0.48px solid #9b9b9b;
          border-bottom: 0;
          overflow: hidden;
          border-radius: 80px 80px 0 0;
          box-shadow: -16px 0 0 2px rgba(230,230,230,0.5) inset;
          position: relative;
          animation: floating 3s ease-in-out infinite;
        }
        .boo .face {
          width: 24px;
          height: 3px;
          border-radius: 5px;
          background-color: #9b9b9b;
          position: absolute;
          left: 50%;
          bottom: 56px;
          transform: translateX(-50%);
        }
        .boo .face::before,
        .boo .face::after {
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          background-color: #9b9b9b;
          border-radius: 50%;
          position: absolute;
          bottom: 64px;
        }
        .boo .face::before {
          left: -24px;
        }
        .boo .face::after {
          right: -24px;
        }
        .shadow {
          width: 128px;
          height: 16px;
          background-color: rgba(230,230,230,0.75);
          margin-top: 40px;
          margin-right: auto;
          margin-left: auto;
          border-radius: 50%;
          animation: floatingShadow 3s ease-in-out infinite;
        }
        @keyframes floating {
          0% { transform: translate3d(0, 0, 0);}
          45% { transform: translate3d(0, -10%, 0);}
          55% { transform: translate3d(0, -10%, 0);}
          100% { transform: translate3d(0, 0, 0);}
        }
        @keyframes floatingShadow {
          0% { transform: scale(1);}
          45% { transform: scale(.85);}
          55% { transform: scale(.85);}
          100% { transform: scale(1);}
        }
        body {
          background-color: #f7f7f7;
        }
      `}</style>

            {/* --- Added animated ghost 404 --- */}
            <div className="container">
                <div className="boo-wrapper">
                    <div className="boo">
                        <div className="face"></div>
                    </div>
                    <div className="shadow"></div>
                    <h1>Whoops!</h1>
                    <p>
                        We couldn't find the page you
                        <br />
                        were looking for.
                    </p>

                    <Link href="/">Return Home</Link>

                </div>
            </div>

        </div>
    )
}