import React, { useEffect } from "react";
import "../../styles/index.css";

function Blog() {
  useEffect(() => {
    document.title = "tastebuds: blog";
  }, []);
  return (
    <section className="bg-white section">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold brand_primary__color ">
            Our Blog
          </h2>
          <p className="font-light  sm:text-xl ">
            We have tried to answer some of MongoDB related questions, Hope it
            will be helpful.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Tutorial
              </span>
              <span className="text-sm">1 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight brand_primary__color ">
              <a href="#">Difference between sql and nosql ?</a>
            </h2>
            <p className="mb-5 font-light brand_primary__color ">
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://avatars.githubusercontent.com/u/86164507?v=4"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Taiyeb Nirjhor</span>
              </div>
              <a
                href="https://www.talend.com/resources/sql-vs-nosql/#:~:text=SQL%20is%20the%20programming%20language,generally%20do%20not%20use%20SQL"
                className="inline-flex items-center font-medium text-primary-600  hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span className="text-sm">1 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight brand_primary__color ">
              <a href="#">What is JWT, and how does it work?</a>
            </h2>
            <p className="mb-5 font-light  ">
              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
              standard (RFC 7519) for securely transmitting information between
              parties as JSON object. It is compact, readable and digitally
              signed using a private key/ or a public key pair by the Identity
              Provider(IdP)
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://avatars.githubusercontent.com/u/86164507?v=4"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Taiyeb Nirjhor</span>
              </div>
              <a
                href="https://dev.to/kcdchennai/how-jwt-json-web-token-authentication-works-21e7#:~:text=What%20is%20JWT%20(JSON%20Web,the%20Identity%20Provider(IdP)."
                className="inline-flex items-center font-medium text-primary-600  hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span className="text-sm">1 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight brand_primary__color ">
              <a href="#">
                What is the difference between javascript and Node JS?
              </a>
            </h2>
            <p className="mb-5 font-light brand_primary__color ">
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://avatars.githubusercontent.com/u/86164507?v=4"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Taiyeb Nirjhor</span>
              </div>
              <a
                href="https://www.knowledgehut.com/blog/web-development/node-js-vs-javasript#:~:text=JavaScript%20is%20a%20simple%20programming,for%20the%20JavaScript%20programming%20language."
                className="inline-flex items-center font-medium text-primary-600  hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>

          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span className="text-sm">1 days ago</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight brand_primary__color ">
              <a href="#">
                How does NodeJS handle multiple requests at the same time?
              </a>
            </h2>
            <p className="mb-5 font-light ">
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="https://avatars.githubusercontent.com/u/86164507?v=4"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Taiyeb Nirjhor</span>
              </div>
              <a
                href="https://www.geeksforgeeks.org/how-to-run-many-parallel-http-requests-using-node-js/#:~:text=How%20NodeJS%20handle%20multiple%20client,receives%20requests%20and%20processes%20them."
                className="inline-flex items-center font-medium text-primary-600  hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Blog;
