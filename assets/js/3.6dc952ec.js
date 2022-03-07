(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{347:function(e,t,n){},350:function(e,t,n){"use strict";n(347)},376:function(e,t,n){"use strict";n.r(t);var r={name:"Experience",props:{experience:Object}},o=(n(350),n(56)),a=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("h3",{staticStyle:{display:"inline-block"}},[e._v(e._s(e.experience.name))]),e._v(" "),n("span",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.experience.location))]),e._v(" "),n("span",{staticStyle:{"font-style":"italic","margin-left":"25px"}},[e._v(e._s(e.experience.industry))])]),e._v(" "),n("ul",{staticStyle:{"list-style-type":"none"}},e._l(e.experience.roles,(function(t){return n("li",{key:t},[n("h4",{staticStyle:{display:"inline-block"}},[e._v(e._s(t.title))]),e._v(" "),t.end?n("span",{staticStyle:{"font-size":"15px","margin-left":"5px"}},[e._v(e._s(t.start)+" - "+e._s(t.end))]):n("span",{staticStyle:{"font-size":"15px","margin-left":"5px"}},[e._v(e._s(t.start))]),e._v(" "),n("ul",{staticStyle:{"list-style-type":"square","margin-top":"-10px"}},e._l(t.description,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)])})),0)])}),[],!1,null,null,null);t.default=a.exports},404:function(e,t,n){"use strict";n.r(t);var r=n(376),o=[{name:"Amazon",location:"Seattle, WA",industry:"E-commerce",roles:[{title:"Software Development Engineer Intern",start:"May 2022",description:["Incoming intern for summer of 2022"]}]},{name:"Polyture",location:"Santa Clara, CA",industry:"Data Infrastructure",roles:[{title:"Software Engineer Intern",start:"May 2021",end:"Present",description:["Working to redesign Polyture's data infrastructure design platform to provide mid-market companies with easy-to-use tools for data analytics","Developed automation tools for code coverage and testing to accelerate the CI/CD process and ensure code quality","Implemented backend data visualization and transformation functions and performed frontend integrations","Used PySpark, Pandas, NumPy, Typescript, React, and FastAPI"]}]},{name:"Precise Software Solutions",location:"Rockville, MD",industry:"Information Technology Consulting",roles:[{title:"Software Engineer Intern",start:"June 2021",end:"August 2021",description:["Developed a low-cost, scalable food traceability software to track food through the stages of the supply chain","Designed backend to transform XML/JSON GS1 data, interface with Neo4j, and facilitate user interactions","Recognized as one of the winners of FDA's Food Traceability Challenge","Used Flask, Neo4j, MongoDB, and React"]},{title:"Software Engineer Intern",start:"May 2020",end:"August 2020",description:["Worked to build the foundation of the counterfeit drug detection project","Built web app to utilize Google AutoML and OCC analysis techniques and performed backend integrations","Recognized with Incubator Award for innovations not yet in production by ACT-IAC","Used Firebase, Flask, React, and Google Cloud Platform"]}]},{name:"ScholarHub",location:"Berkeley, CA",industry:"Education",roles:[{title:"Project Developer (Upsilon Pi Epsilon)",start:"September 2021",end:"December 2021",description:["Led team of backend developers to build features to support lecture notes and lecture videos","Developed testing framework with Mocha and Chai","Used MongoDB, Express, and Nodejs"]},{title:"Backend Developer (PlexTech)",start:"February 2021",end:"May 2021",description:["Developed Groups and Chat/Direct Message features for ScholarHub's class management platform to service thousands of students worldwide","Implemented OAuth 2.0 services and chat features ready for integration","Created testing suite with Postman to ensure code quality","Used MongoDB, Express, Socket.IO, and Nodejs"]}]},{name:"Tassel Software",location:"San Francisco, CA",industry:"Education",roles:[{title:"Project Developer (PlexTech)",start:"September 2021",end:"December 2021",description:["Developed backend API from scratch to add messenging features to connect instructors and students","Used Express, mySQL, Sequelize, and Nylas"]}]},{name:"PlexTech",location:"Berkeley, CA",industry:"Consulting",roles:[{title:"Curriculum Officer",start:"January 2022",end:"Present",description:["Working to create projects for incoming curriculum students to develop skills for frontend and backend design","Primarily designing lesson plans around the use of Flask and React"]},{title:"Project Developer",start:"January 2021",end:"December 2021",description:["Worked with clients to provide full stack services"]}]},{name:"University of Maryland - College Park",location:"College Park, MD",industry:"Education",roles:[{title:"Student Researcher",start:"June 2019",end:"September 2019",description:["Conducted research with a team of students on the application of machine learning in Ramsey theory","Developed a reinforcement learning algorithm to produce empirical evidence for Ramsey Game numbers"]}]}],a={name:"Experiences",components:{Experience:r.default},data:function(){return{experiences:o}}},i=n(56),s=Object(i.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",this._l(this.experiences,(function(e){return t("Experience",{key:e.name,attrs:{experience:e}})})),1)}),[],!1,null,null,null);t.default=s.exports}}]);