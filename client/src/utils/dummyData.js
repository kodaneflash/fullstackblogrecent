import { BsCodeSlash, BsNewspaper } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { MdCastForEducation, MdOutlineSportsHandball } from "react-icons/md";

export const posts = [
  {
    id: "clndjngfp00020a6of07mhqu5",
    createdAt: "2023-10-05T19:01:47.126Z",
    slug: "fullstack-social-media-app-full-code",
    title: "Fullstack Social Media App - Full Code",
    desc: '<p>Full-Stack Social Media Application using ReactJs, and Tailwind CSS for the front end and NodeJs, ExpressJs and MongoDb for backend.</p><p>This App is fully responsive. This project includes for frontend (UI Design) and Backend (Server).</p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># Functionalities:</strong></p><p><span style="color: rgb(103, 150, 230);">1.</span> User Authentication and Authorisation</p><p><span style="color: rgb(103, 150, 230);">2.</span> Email Verification</p><p><span style="color: rgb(103, 150, 230);">3.</span> Password reset</p><p><span style="color: rgb(103, 150, 230);">4.</span> Create Post</p><p><span style="color: rgb(103, 150, 230);">5.</span> Advance Comment system (comments with sub coments)</p><p><span style="color: rgb(103, 150, 230);">6.</span> Like post and comments</p><p><span style="color: rgb(103, 150, 230);">7.</span> Delete post</p><p><span style="color: rgb(103, 150, 230);">8.</span> Friend Request (send request, accept or deby)</p><p>and others.....</p><p><br></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># Getting Started</strong></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># SERVER OR BACKEND</strong></p><p>Firstly move to the server directory eg: cd server</p><p><br></p><p><span style="color: rgb(103, 150, 230);">1.</span> Create a <span style="color: rgb(206, 145, 120);">`.env`</span> file</p><p>&nbsp;&nbsp;The .env file will contain the following:</p><p>&nbsp;&nbsp;i. MONGODB_URL = <span style="color: rgb(206, 145, 120);">`database connection string`</span></p><p>&nbsp;&nbsp;ii. JWT_SECRET_KEY = <span style="color: rgb(206, 145, 120);">`your secreate key`</span></p><p>&nbsp;&nbsp;iii. PORT = <span style="color: rgb(206, 145, 120);">`8800`</span></p><p>&nbsp;&nbsp;iv. AUTH_EMAIL= <span style="color: rgb(206, 145, 120);">`email address`</span></p><p>&nbsp;&nbsp;v. AUTH_PASSWORD= <span style="color: rgb(206, 145, 120);">`email access password`</span></p><p>&nbsp;&nbsp;vi. APP_URL = <span style="color: rgb(206, 145, 120);">`http://localhost:8800`</span></p><p><br></p><p>&nbsp;&nbsp;Note: I used hotmail account to send verification email, so you can just create one because hotmail account is reliable in product and has no configuration.</p><p><br></p><p>&nbsp;&nbsp;Alos, change <span style="color: rgb(206, 145, 120);">`API_URL`</span> when you deploy your app else use localhost with the appropriate <span style="color: rgb(206, 145, 120);">`port number`</span></p><p><br></p><p><span style="color: rgb(103, 150, 230);">2.</span> Run <span style="color: rgb(206, 145, 120);">`npm install`</span> to install the packages</p><p><span style="color: rgb(103, 150, 230);">3.</span> Run <span style="color: rgb(206, 145, 120);">`npm start`</span> to start the server</p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># VIEWS FILE</strong></p><p>In the view are the static html files to be use for <span style="color: rgb(206, 145, 120);">`email verfication`</span> and <span style="color: rgb(206, 145, 120);">`password reset`</span>.</p><p><br></p><p><span style="color: rgb(103, 150, 230);">1.</span> This folder is a React App</p><p><span style="color: rgb(103, 150, 230);">2.</span> navigate in the folder and install it dependencies</p><p><span style="color: rgb(103, 150, 230);">3.</span> make changes to suit your preference and run build</p><p><span style="color: rgb(103, 150, 230);">4.</span> copy the build folder into the view folder in the server folder</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">**Override the existing one.**</strong></p><p>NOTE: During deployment make sure you change the various links in the view file and build it again and replace the files in the view folder of the server folder.</p><p><br></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># CLINET SIDE</strong></p><p><br></p><p>The client or frontend also has .env filde in the root folder.</p><p>Create an environment variable of name <span style="color: rgb(206, 145, 120);">`REACT_APP_CLOUDINARY_ID`</span>.</p><p>This will store the cloudinary cloud name</p><p><br></p><p>This side also has and env file with <span style="color: rgb(206, 145, 120);">`REACT_APP_CLOUDINARY_ID`</span></p>',
    img: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874471/cld-sample-3.jpg",
    views: 16,
    cat: "CODING",
    user: {
      name: "John Smith",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1693809205/SOCIALMEDIA/bcrhwho7szx3vbktyrtt.png",
    },
  },
  {
    id: "clndj3ohm00010a6o8qdmj4ok",
    createdAt: "2023-10-05T18:46:24.442Z",
    slug: "fullstack-social-media-backend",
    title: "Fullstack Social Media App - Full Code",
    desc: '<p>Full-Stack Social Media Application using ReactJs, and Tailwind CSS for the front end and NodeJs, ExpressJs and MongoDb for backend.</p><p>This App is fully responsive. This project includes for frontend (UI Design) and Backend (Server).</p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># Functionalities:</strong></p><p><span style="color: rgb(103, 150, 230);">1.</span> User Authentication and Authorisation</p><p><span style="color: rgb(103, 150, 230);">2.</span> Email Verification</p><p><span style="color: rgb(103, 150, 230);">3.</span> Password reset</p><p><span style="color: rgb(103, 150, 230);">4.</span> Create Post</p><p><span style="color: rgb(103, 150, 230);">5.</span> Advance Comment system (comments with sub coments)</p><p><span style="color: rgb(103, 150, 230);">6.</span> Like post and comments</p><p><span style="color: rgb(103, 150, 230);">7.</span> Delete post</p><p><span style="color: rgb(103, 150, 230);">8.</span> Friend Request (send request, accept or deby)</p><p>and others.....</p><p><br></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># Getting Started</strong></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># SERVER OR BACKEND</strong></p><p>Firstly move to the server directory eg: cd server</p><p><br></p><p><span style="color: rgb(103, 150, 230);">1.</span> Create a <span style="color: rgb(206, 145, 120);">`.env`</span> file</p><p>&nbsp;&nbsp;The .env file will contain the following:</p><p>&nbsp;&nbsp;i. MONGODB_URL = <span style="color: rgb(206, 145, 120);">`database connection string`</span></p><p>&nbsp;&nbsp;ii. JWT_SECRET_KEY = <span style="color: rgb(206, 145, 120);">`your secreate key`</span></p><p>&nbsp;&nbsp;iii. PORT = <span style="color: rgb(206, 145, 120);">`8800`</span></p><p>&nbsp;&nbsp;iv. AUTH_EMAIL= <span style="color: rgb(206, 145, 120);">`email address`</span></p><p>&nbsp;&nbsp;v. AUTH_PASSWORD= <span style="color: rgb(206, 145, 120);">`email access password`</span></p><p>&nbsp;&nbsp;vi. APP_URL = <span style="color: rgb(206, 145, 120);">`http://localhost:8800`</span></p><p><br></p><p>&nbsp;&nbsp;Note: I used hotmail account to send verification email, so you can just create one because hotmail account is reliable in product and has no configuration.</p><p><br></p><p>&nbsp;&nbsp;Alos, change <span style="color: rgb(206, 145, 120);">`API_URL`</span> when you deploy your app else use localhost with the appropriate <span style="color: rgb(206, 145, 120);">`port number`</span></p><p><br></p><p><span style="color: rgb(103, 150, 230);">2.</span> Run <span style="color: rgb(206, 145, 120);">`npm install`</span> to install the packages</p><p><span style="color: rgb(103, 150, 230);">3.</span> Run <span style="color: rgb(206, 145, 120);">`npm start`</span> to start the server</p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># VIEWS FILE</strong></p><p>In the view are the static html files to be use for <span style="color: rgb(206, 145, 120);">`email verfication`</span> and <span style="color: rgb(206, 145, 120);">`password reset`</span>.</p><p><br></p><p><span style="color: rgb(103, 150, 230);">1.</span> This folder is a React App</p><p><span style="color: rgb(103, 150, 230);">2.</span> navigate in the folder and install it dependencies</p><p><span style="color: rgb(103, 150, 230);">3.</span> make changes to suit your preference and run build</p><p><span style="color: rgb(103, 150, 230);">4.</span> copy the build folder into the view folder in the server folder</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">**Override the existing one.**</strong></p><p>NOTE: During deployment make sure you change the various links in the view file and build it again and replace the files in the view folder of the server folder.</p><p><br></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># CLINET SIDE</strong></p><p><br></p><p>The client or frontend also has .env filde in the root folder.</p><p>Create an environment variable of name <span style="color: rgb(206, 145, 120);">`REACT_APP_CLOUDINARY_ID`</span>.</p><p>This will store the cloudinary cloud name</p><p><br></p><p>This side also has and env file with <span style="color: rgb(206, 145, 120);">`REACT_APP_CLOUDINARY_ID`</span></p>',
    img: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874448/samples/ecommerce/analog-classic.jpg",
    views: 14,
    cat: "CODING",
    user: {
      name: "John Smith",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1693809205/SOCIALMEDIA/bcrhwho7szx3vbktyrtt.png",
    },
  },
  {
    id: "clndid3jo00000a6obn591ri7",
    createdAt: "2023-10-05T18:25:44.242Z",
    slug: "fullstack-social-media-app-frontend",
    title: "Fullstack Social Media App - Frontend",
    desc: '<p>Hello coders, welcome to another episode of React project. In this project, we will build and deploy a fully responsive FullStack or MERN Stack Social Media application using MongoDB, ExpressJs, Reactjs, NodeJs, and tailwind css for styling our UI.</p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># FULLY RESPONSIVE APP</strong></p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># Getting Started with Create React App</strong></p><p><br></p><p>This project was bootstrapped with [<span style="color: rgb(206, 145, 120);">Create React App</span>](https://github.com/facebook/create-react-app).</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">## Available Scripts</strong></p><p><br></p><p>In the project directory, you can run:</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">### </strong><strong style="color: rgb(206, 145, 120);">`npm start`</strong></p><p><br></p><p>Runs the app in the development mode.\\</p><p>Open [<span style="color: rgb(206, 145, 120);">http://localhost:3000</span>](http://localhost:3000) to view it in your browser.</p><p><br></p><p>The page will reload when you make changes.\\</p><p>You may also see any lint errors in the console.</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">### </strong><strong style="color: rgb(206, 145, 120);">`npm test`</strong></p><p><br></p><p>Launches the test runner in the interactive watch mode.\\</p><p>See the section about [<span style="color: rgb(206, 145, 120);">running tests</span>](https://facebook.github.io/create-react-app/docs/running-tests) for more information.</p>',
    img: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
    views: 9,
    cat: "FASHION",
    user: {
      name: "John Smith",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1693809205/SOCIALMEDIA/bcrhwho7szx3vbktyrtt.png",
    },
  },
  {
    id: "clncnnfs60000mn08pf4xca95",
    createdAt: "2023-10-05T04:05:58.567Z",
    slug: "mern-stack-job-finder-app-full",
    title: "MERN Stack Job Finder App Full",
    desc: '<p>Hello coders, welcome to the last session of our time is MERN Stack project. In this project. In this session, we will integrate the frontend and backend of our MERN Stack Job Finder application using MongoDB, ExpressJs, Reactjs, NodeJs, and tailwind css for styling our UI. Then after everything, we will deploy it to the internet.</p><p><br></p><p><strong style="color: rgb(86, 156, 214);"># Get Started</strong></p><p><br></p><p>Firstly move to the server directory eg: cd server</p><p><br></p><p><strong style="color: rgb(86, 156, 214);">## Backend (Server)</strong></p><p><br></p><p><span style="color: rgb(103, 150, 230);">1.</span> <strong style="color: rgb(86, 156, 214);">## Create a .env file</strong></p><p>&nbsp;&nbsp;The .env file will contain the following:</p><p>&nbsp;&nbsp;i. MONGODB_URL = <span style="color: rgb(206, 145, 120);">`database connection string`</span></p><p>&nbsp;&nbsp;ii. JWT_SECRET_KEY = <span style="color: rgb(206, 145, 120);">`your secreate key`</span></p><p>&nbsp;&nbsp;iii. PORT = <span style="color: rgb(206, 145, 120);">`8800`</span></p><p>&nbsp;&nbsp;iv. AUTH_EMAIL= <span style="color: rgb(206, 145, 120);">`email address`</span></p><p>&nbsp;&nbsp;v. AUTH_PASSWORD=<span style="color: rgb(206, 145, 120);">`email access password`</span></p><p>&nbsp;&nbsp;vi. APP_URL = <span style="color: rgb(206, 145, 120);">`http://localhost:8800/api-v1`</span></p><p><br></p><p>&nbsp;&nbsp;Note: I used hotmail account to send verification email, so you can just create one</p><p>&nbsp;&nbsp;because hotmail account is reliable in product and has no configuration.</p><p><br></p><p>&nbsp;&nbsp;Alos, chnage API_URL when you deploy your app else use localhost with the appropriate port number</p><p><br></p><p><span style="color: rgb(103, 150, 230);">2.</span> Run npm install to install the packages</p><p><span style="color: rgb(103, 150, 230);">3.</span> Run npm start to start the server on&nbsp;<span style="color: rgb(206, 145, 120);">`http://localhost:8800`</span></p><p><br></p><p><strong style="color: rgb(86, 156, 214);">## Client</strong></p><p>The client or frontend also has .env filde in the root folder.</p><p>Create an environment variable of name REACT_APP_CLOUDINARY_ID.</p><p>This will store the cloudinary cloud name</p><p><br></p><p>This side also has and env file with REACT_APP_CLOUDINARY_ID</p><p><br></p><p><span style="color: rgb(103, 150, 230);">1.</span> Run npm install to install all dependencies</p><p><span style="color: rgb(103, 150, 230);">2.</span> Run npm start to start on <span style="color: rgb(206, 145, 120);">`http://localhost:3000`</span></p>',
    img: "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874458/samples/ecommerce/accessories-bag.jpg",
    views: 22,
    cat: "SPORTS",
    user: {
      name: "John Smith",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1693809205/SOCIALMEDIA/bcrhwho7szx3vbktyrtt.png",
    },
  },
];

export const comments = [
  {
    _id: "783jhdfhkg3h5436v4g",
    user: "clndjngfp00020a6o786547f07mhqu5",
    post: "clndjngfp00020a6of07mhqu5",
    desc: "Comments for the project at  https://firebasestorage.googleapis.com",
    user: {
      _id: "6734j5434534h43bdcv",
      name: "John Smith",
      image:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1693809205/SOCIALMEDIA/bcrhwho7szx3vbktyrtt.png",
    },
  },
];

export const userInfo = {
  name: "John Smith",
  image:
    "https://res.cloudinary.com/djs3wu5bg/image/upload/v1693809205/SOCIALMEDIA/bcrhwho7szx3vbktyrtt.png",
};

export const CATEGORIES = [
  {
    label: "NEWS",
    color: "bg-[#e11d48]",
    text: "text-[#fff]",
    icon: <BsNewspaper />,
  },
  {
    label: "SPORTS",
    color: "bg-[#2563eb]",
    icon: <MdOutlineSportsHandball />,
  },
  {
    label: "CODING",
    color: "bg-[#000000]",
    icon: <BsCodeSlash />,
  },
  {
    label: "EDUCATION",
    color: "bg-[#ca8a04]",
    icon: <MdCastForEducation />,
  },
  {
    label: "FASHION",
    color: "bg-[#9333ea]",
    icon: <GiClothes />,
  },
];

export const popularWriters = [
  {
    _id: "ghdt74eghb",
    name: "Joseph Software",
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874448/samples/ecommerce/analog-classic.jpg",
    followers: 12655,
  },
  {
    _id: "bmdnfbnmdf",
    name: "Joseph Wagonner",
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
    followers: 7534768,
  },
  {
    _id: "b87cvnbcmdvr",
    name: "Joseph Software",
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874448/samples/ecommerce/analog-classic.jpg",
    followers: 99986,
  },
  {
    _id: "nbmcxviuycmn ",
    name: "Joseph Wagonner",
    image:
      "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874453/samples/bike.jpg",
    followers: 4534,
  },
];
