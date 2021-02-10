import Layout from '../components/layouts/Layout';

export default function Profile() {

  return (
    <Layout title="Profile | Next.js + TypeScript Example">
      {/* <!-- Profile section --> */}
      <section
        className="profile lg:w-1/2 md:w-4/5 w-full mx-auto md:mt-36 my-24 md:px-0 px-4"
      >
        <div className="container">
          {/* <!-- edit profile area --> */}
          <div className="flex items-start flex-wrap">
            <div className="md:w-2/3 w-1/2 flex items-center">
              <div className="md:w-1/3 w-full relative">
                <img
                  src="/img/user.jpg"
                  alt=""
                  className="rounded-full w-full"
                />
                <button
                  className="absolute bottom-4 right-0 outline-none focus:outline-none"
                >
                  <img src="/img/plus-icon.svg" alt="" />
                </button>
              </div>
              <div className="w-1/2 md:ml-10 ml-4 md:block hidden">
                <span className="uppercase secondary-color1 text-xs"
                >first & last name</span
                >
                <h2 className="capitalize secondary-color2 text-2xl mb-6 mt-2">
                  jim halpert
              </h2>
                <span className="uppercase secondary-color1 text-xs">location</span>
                <h2 className="capitalize secondary-color2 text-2xl">
                  berlin, germany
              </h2>
              </div>
            </div>
            <div className="md:w-1/3 w-1/2 text-right md:mb-0 mb-6">
              <button
                className="outline-none focus:outline-none capitalize text-white primary-bg  px-5 py-3 rounded-xl"
              >
                edit profile
            </button>
            </div>
            <div className="md:hidden block w-full my-8">
              <span className="uppercase secondary-color1 text-xs"
              >first & last name</span
              >
              <h2 className="capitalize secondary-color2 text-2xl mb-6 mt-2">
                jim halpert
            </h2>
              <span className="uppercase secondary-color1 text-xs">location</span>
              <h2 className="capitalize secondary-color2 text-2xl">
                berlin, germany
            </h2>
            </div>

            <div className="w-full flex flex-wrap md:mt-16">
              <div className="w-full mb-4">
                <h2 className="secondary-color1 uppercase text-xs">
                  static of responses
              </h2>
              </div>
              <div className="md:w-1/3 w-full mb-4">
                <p className="secondary-color2">
                  <span className="primary-color text-2xl">21</span>
                opportunities sent
              </p>
              </div>
              <div className="md:w-2/3 w-full mb-4">
                <p className="secondary-color2">
                  <span className="primary-color text-2xl">42</span>
                not interested
              </p>
              </div>
              <div className="md:w-1/3 w-full mb-4">
                <p className="secondary-color2">
                  <span className="primary-color text-2xl">2</span>
                invites received
              </p>
              </div>
              <div className="md:w-2/3 w-full mb-4">
                <p className="secondary-color2">
                  <span className="primary-color text-2xl">20%</span>
                reponses more than similiar accounts
              </p>
              </div>
            </div>
          </div>
          {/* <!-- edit profile area ends --> */}

          <hr className="my-12" />

          {/* <!-- feilds of occupation area --> */}
          <div className="flex flex-wrap">
            <div className="w-full mb-4">
              <h2 className="secondary-color1 uppercase text-xs">
                field of occupation
            </h2>
            </div>
            <div className="p-3 rounded-xl green-light-bg flex">
              <div className="circle h-5 w-5 green-bg rounded-full mr-3"></div>
              <h1
                className="secondary-color2 capitalize md:text-base text-xs truncate"
              >
                web, mobile & software development
            </h1>
            </div>
          </div>
          {/* <!-- feilds of occupation area ends --> */}

          <hr className="my-12" />

          {/* <!-- skills I offer area --> */}
          <div className="flex flex-wrap">
            <div className="w-full mb-4">
              <h2 className="secondary-color1 uppercase text-xs">skills i offer</h2>
            </div>
            <div className="w-full">
              <ul>
                <li
                  className="secondary-color2 skill-color-bg1 inline-block px-4 py-3 rounded-xl mr-5 mb-6"
                >
                  HTML (5 years)
              </li>
                <li
                  className="secondary-color2 skill-color-bg2 inline-block px-4 py-3 rounded-xl mr-5 mb-6"
                >
                  CSS (5 years)
              </li>
                <li
                  className="secondary-color2 skill-color-bg3 inline-block px-4 py-3 rounded-xl mr-5 mb-6"
                >
                  Javascript: Angular (3 years)
              </li>
                <li
                  className="secondary-color2 skill-color-bg4 inline-block px-4 py-3 rounded-xl mr-5 mb-6"
                >
                  Javascript: React (3 years)
              </li>
                <li
                  className="secondary-color2 skill-color-bg5 inline-block px-4 py-3 rounded-xl mr-5 mb-6"
                >
                  Javascript: Node.js (3 years)
              </li>
                <li
                  className="secondary-color2 skill-color-bg2 inline-block px-4 py-3 rounded-xl mr-5 mb-6"
                >
                  Ruby (2 years)
              </li>
              </ul>
            </div>
          </div>
          {/* <!-- skills I offer area ends --> */}

          <hr className="my-12" />

          {/* <!-- Portfolio area --> */}
          <div className="flex flex-wrap">
            <div className="w-full mb-2">
              <h2 className="secondary-color1 uppercase text-xs">Portfolio</h2>
            </div>
            <p className="text-lg secondary-color2">portfolio.jimhalpert.com</p>
          </div>
          {/* <!-- Portfolio area ends --> */}

          <hr className="my-12" />

          {/* <!-- Short Bio area --> */}
          <div className="flex flex-wrap">
            <div className="w-full mb-4">
              <h2 className="secondary-color1 uppercase text-xs">Short Bio</h2>
            </div>
            <p className="secondary-color1 font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quibusdam maxime tempora aut fugiat eligendi ut, consectetur ipsam
              in! Pariatur quis perferendis vel. Unde aperiam voluptas, libero
              aspernatur asperiores dolores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Velit quibusdam maxime tempora aut
              fugiat eligendi ut, consectetur ipsam in! Pariatur quis perferendis
              vel. Unde aperiam voluptas, libero aspernatur asperiores dolores.
          </p>
          </div>
          {/* <!-- Short Bio area ends --> */}

          <hr className="my-12" />

          {/* <!-- notable achievments area --> */}
          <div className="flex flex-wrap">
            <div className="w-full mb-4">
              <h2 className="secondary-color1 uppercase text-xs">
                notable achievments
            </h2>
            </div>
            <div className="w-full mb-5">
              <h1 className="secondary-color1 flex items-center font-sans">
                <span
                  className="h-1 w-1 inline-block mr-2 rounded-full primary-bg"
                ></span>
                <span
                >At least 15 years of work experience in the field of web
                development</span
                >
              </h1>
            </div>
            <div className="w-full mb-5">
              <h1 className="secondary-color1 flex items-center font-sans">
                <span
                  className="h-1 w-1 inline-block mr-2 rounded-full primary-bg"
                ></span>
                <span>Won Developer award from UK for 2019</span>
              </h1>
            </div>
            <div className="w-full mb-5">
              <h1 className="secondary-color1 flex items-center font-sans">
                <span
                  className="h-1 w-1 inline-block mr-2 rounded-full primary-bg"
                ></span>
                <span>Startup reached as nr. #1 startup in UK for 2019</span>
              </h1>
            </div>
          </div>
          {/* <!-- notable achievments area ends --> */}
        </div>
      </section>
      {/* <!-- Profile section ends --> */}
    </Layout>
  )
}
