import React from "react";
import appStoreIcon from "./imgs/app-store.png";
import playStoreIcon from "./imgs/play-store.png";
import appScreenOne from "./imgs/app-screen-1.jpg";
import appScreenTwo from "./imgs/app-screen-2.jpg";
import appScreenThree from "./imgs/app-screen-3.jpg";
import appScreenFour from "./imgs/app-screen-4.jpg";

function App() {
  return (
    <div className='App'>
      <header>
        <h1>How To Make Your LRCC Contributions Electronically</h1>
      </header>
      <section className='intro'>
        <p className='intro-text'>
          As we pray and seek God during this time of national crisis, while
          taking all the necessary precautions to keep our local body of Christ
          safe, we, like many other churches, are learning to be inventive in
          finding new ways to serve you, the{" "}
          <strong>Living Rock Christian Center </strong>
          family, and to ensure your continued participation in the move of God
          throughout our church, the local community, the entirety of the
          Rockaways and beyond.
          <br />
          <br />
          As such, we are happy to introduce{" "}
          <a
            href='https://get.tithe.ly/'
            target='_blank'
            className='text-link'
            rel='noopener noreferrer'
          >
            Tithe.ly
          </a>{" "}
          as our preferred platform and solution to meet all of your
          contributory needs.
          <br />
          <br />
          Please reference the easy to follow guide below for a quick{" "}
          <strong>"how-to"</strong>.
        </p>
      </section>

      <section className='tutorial'>
        {/* Tut Section 1 Start */}
        <div className='tut-section'>
          <div className='num'>1</div>
          <div className='tut-content'>
            <h2>Download the Tithe.ly App on Your Mobile Device</h2>
            <p>
              The tithe.ly app is available on iOS and Android operating
              systems. Click one of the links below for quick access to the
              appropriate app for your device.
            </p>
            <div className='icon-container'>
              <a
                href='https://apps.apple.com/us/app/tithe-ly/id694740700'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={appStoreIcon}
                  alt='Apple iOS Store'
                  className='store-icon'
                />
              </a>
              <a
                href='https://play.google.com/store/apps/details?id=ly.tithe.tithely'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src={playStoreIcon}
                  alt='Google Play Store'
                  className='store-icon'
                />
              </a>
            </div>
          </div>
        </div>
        {/* Tut Section 1 End */}

        {/* Tut Section 2 Start */}
        <div className='tut-section'>
          <div className='num'>2</div>
          <div className='tut-content'>
            <h2>Create Your Account</h2>
            <p>
              Once the app is downloaded, you'll be taken to a screen similar to
              the one pictured below in order to create your account. Follow the
              prompts through the process and create your account. Remember to
              copy down your <strong>PASSWORD</strong> and your{" "}
              <strong>PIN</strong> and store them someplace safe.
            </p>
            <img
              src={appScreenOne}
              alt='Tithely app screen one'
              className='app-screen'
            />
          </div>
        </div>
        {/* Tut Section 2 End */}

        {/* Tut Section 3 Start */}
        <div className='tut-section'>
          <div className='num'>3</div>
          <div className='tut-content'>
            <h2>Find Your Church</h2>
            <p>
              Following account creation, you'll be taken to a screen that
              allows you to find your church within the app.
            </p>
            <img
              src={appScreenTwo}
              alt='Tithely app screen two'
              className='app-screen'
            />
            <p className='interim-text'>
              {" "}
              Begin typing the name of your church,
              <strong>"Living Rock Christian Center"</strong> into the search
              field. Options will begin appearing. Select Living Rock Christian
              Center from the presented options.
            </p>
            <img
              src={appScreenThree}
              alt='Tithely app screen three'
              className='app-screen'
            />
          </div>
        </div>
        {/* Tut Section 3 End */}

        {/* Tut Section 4 Start */}
        <div className='tut-section'>
          <div className='num'>4</div>
          <div className='tut-content'>
            <h2>Give</h2>
            <p>
              Once you've selected <strong>Living Rock Christian Center</strong>
              , click the "Give Now" button and you'll be taken to a screen
              similar to the one below:{" "}
            </p>
            <img
              src={appScreenFour}
              alt='Tithely app screen four'
              className='app-screen'
            />
            <p className='interim-text'>
              You'll see confirmation that you've selected Living Rock Christian
              Center in the upper left corner. You can go ahead and enter the
              amount you'd like to give. In the <strong>To:</strong> field, you
              can select the contribution type (Tithe, General Offering,
              Speaker's Offering or Pledge). You'll notice you can also set this
              as a recurring gift by checking the{" "}
              <strong>Recurring Gift</strong> checkbox. Leave it blank for a
              one-time offering.
            </p>
            <p className='interim-text extra'>
              After you've entered the amount and selected the contribution
              type, scroll down and you'll see a place where you can enter your
              payment information (i.e., Credit Card, Debit Card, Bank
              Information, etc.). Here, you can also choose to cover the fees.{" "}
              <br />
              <br /> <strong>NOTE:</strong> Leaving the{" "}
              <strong>Cover Fees</strong> box unchecked means your offering or
              tithe will be lessened by the fees associated with the
              transaction.
            </p>
            <div className='fees'>
              <strong>Fee Examples:</strong>
              <br />
              <br />
              Credit / debit card transactions: 2.9% + $0.30 per transaction.
              <br />
              Example: $100 donation --> $96.80 deposited.
              <br />
              <br />
              ACH / Bank account transactions: 1% + 0.30 per transaction.
              <br />
              Example: $100 donation --> $98.70 deposited.
            </div>
            <p className='interim-text'>
              Finalize the giving process by clicking on the{" "}
              <strong>Give $-.--</strong> button showing the amount you entered
              at the very bottom of the screen.
            </p>
          </div>
        </div>
        {/* Tut Section 4 End */}

        {/* Tut Section 5 Start */}
        <div className='tut-section'>
          <div className='num'>5</div>
          <div className='tut-content'>
            <h2>Praise God!</h2>
            <p>
              You did it! Thank you for honoring God through your substance.
              Spread the word to anyone you know who wants to give and doesn't
              know how and know that <strong>Living Rock</strong> thanks you
              from the bottom of our hearts.
            </p>
          </div>
        </div>
        {/* Tut Section 5 End */}
      </section>
    </div>
  );
}

export default App;
