import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {" "}
      <div className="container">
        <div>
          <header>
            <h1 id="heading">Expense management for growing businesses</h1>
            <h4 id="desc">
              Experience the convenience of simplified travel booking, faster
              expense reporting, and effective cost control. With our Expense
              manager, take the first step to revolutionize the way you manage
              travel and expense.
            </h4>
          </header>
          <main>
            <h2>Expense management the easy way.</h2>
            <button id="loginbutton">Login To Start</button>
          </main>
        </div>
        <div>
          <section>
            <img
              id="expencechart"
              width="100%"
              src="https://www.zoho.com/expense/index/header-small.png?v=1"
              alt="dummy expence chart"
            />
          </section>
        </div>
      </div>
      <div id="spacification">
        <header className="center">
          What our Expense Manager brings to the table.
        </header>
        <div className="featureddiv">
          <div className="grid-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8654/8654390.png"
              alt=""
            />
            <h2>Expence</h2>
            <p>End-to-end expence reporting automation.</p>
          </div>
          <div className="grid-item">
            <img
              src="https://w7.pngwing.com/pngs/589/619/png-transparent-payment-gateway-payment-processor-computer-icons-e-commerce-payment-blue-angle-text.png"
              alt=""
            />
            <h2>Payments</h2>
            <p>Reimbursements and payments done right.</p>
          </div>
          <div className="grid-item">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/560/761/original/data-analytics-icon-monitoring-big-data-analysis-containing-database-free-png.png"
              alt=""
            />
            <h2>Analytics</h2>
            <p>Comprehensive travel and expence mangments analytics.</p>
          </div>
          <div className="grid-item">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3882/3882227.png"
              alt=""
            />
            <h2>Transactions</h2>
            <p>Completed agreement between a buyer and a seller.</p>
          </div>
        </div>
      </div>
      <div className="bluecontainer">
        <header className="headcenter">Expence manager is extensible</header>
        <div className="featureddiv">
          <div className="grid-item">
            <div className="flexBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgechJzhq2z8tVDQ49pa_CMmQ_OLgrkVXDg&usqp=CAU"
                alt=""
              />
              <h2>Automation</h2>
            </div>
            <p>
              Set different expense reporting tasks to autopilot with features
              like workflow rules, custom functions, and webhooks.
            </p>
          </div>
          <div className="grid-item">
            <div className="flexBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCKgOL6dkqzVuwzZgDhG5Yx-Lw2kykDAqsCQ&usqp=CAU"
                alt=""
              />
              <h2>Customization</h2>
            </div>
            <p>
              Tailor your expense management to suit your business needs. Create
              custom components like buttons, links, and modules.
            </p>
          </div>
          <div className="grid-item">
            <div className="flexBox">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oHmm8J-ghBgpKGf5sbxLjYUsLkWQ6KeUcQ&usqp=CAU"
                alt=""
              />
              <h2>Collaboration</h2>
            </div>
            <p>
              Siloed departments are a thing of the past. Communicate with
              employees contextually and in real time via chat, comments, and
              notifications.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <h3>AVAILABLE ON</h3>
          <img
            src="https://www.zoho.com/expense/common/app-store-small.png"
            alt="apple store png"
          />
          <br />
          <img
            src="https://www.zoho.com/expense/common/google-play-small.png"
            alt="play store png"
          />
        </div>
        <div>
          <h3>QUICK LINKS</h3>

          <Link className="quicklinks" to="/">
            home
          </Link>
          <br />
          <Link className="quicklinks" to="/transactions">
            transactions
          </Link>
          <br />
          <Link className="quicklinks" to="/overview">
            Overview
          </Link>
          <br />
          <Link className="quicklinks" to="/login">
            login
          </Link>
          <br />
          <Link className="quicklinks" to="/about">
            about
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Home;
