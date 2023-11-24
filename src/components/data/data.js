const data = {
  name: "Amaraneni Navya sree",
  email: "navyasree.8.2001@gmail.com",
  alternate_email: "navya.8.2001@gmail.com",
  phone: "9381218280",
  phone_extension: "+91",
  github: "https://github.com/Navya-amarneni",
  linkedin: "https://www.linkedin.com/in/navya-sree-a836a418b",
  codeforces: "",
  codechef: "",
  leetcode: "",
  skills: [
    { percentage: "98", title: "C++" },
    { percentage: "90", title: "Python" },
    { percentage: "90", title: "HTML" },
    { percentage: "85", title: "CSS" },
    { percentage: "80", title: "C" },
    { percentage: "95", title: "JavaScript" },
    { percentage: "98", title: "React" },
    { percentage: "90", title: "Jquery" },
    { percentage: "80", title: "Ruby" },
    { percentage: "80", title: "Bootstrap" },
  ],
  tools: [
    { percentage: "90", title: "MySQL" },
    { percentage: "85", title: "Redux" },
    { percentage: "90", title: "Node Js" },
    { percentage: "85", title: "Express" },
    { percentage: "90", title: "MongoDB" },
    { percentage: "75", title: "Catalyst" },
    { percentage: "75", title: "Ruby on rails" },
    { percentage: "85", title: "TensorFlow" },
    { percentage: "85", title: "Keras" },
    { percentage: "95", title: "Git" },
    { percentage: "95", title: "Github" },
  ],
  coursework: [
    "Data Structures and Algorithms",
    "Operating systems",
    "Database Management systems",
    "computer Networks",
    "System design",
    "Mathematics",
    "Linear Algebra and ODE",
    "Real and Complex Analysis",
    "Partial Differential Equations",
    "Probability Theory",
  ],
  education: [
    {
      id: 1,
      organization: "IIT Patna",
      degree: "B.tech in Computer Sciene Engineering",
      dates: [2018, 2022],
      location: "Patna, Bihar",
      grade: 8.54,
      total_grade: 10,
      imgURL:
        "https://imgs.search.brave.com/JvgXvLB2dVCw0cDSQTFWJJiFlJsdqfNAvjC1-u7mYKU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMS5y/Z3N0YXRpYy5uZXQv/aWkvaW5zdGl0dXRp/b24uaW1hZ2UvQVM6/MjY3NDY3NDIxNjE4/MTc2QDE0NDA3ODA2/MTAyODJfbA",
    },
    {
      id: 2,
      organization: "Narayana Jr college",
      degree: "Senior secondary",
      dates: [2018],
      location: "Mehdipatnam, Hyderabad",
      grade: 98.6,
      total_grade: 100,
      imgURL:
        "https://www.enrolmentdesk.com/components/com_mijoshop/opencart/image/cache/data/logo-large-500x500.png",
    },
    {
      id: 3,
      organization: "Narayana High School",
      degree: "High School",
      dates: [2016],
      location: "Nellore, Andhra Pradesh",
      grade: 10,
      total_grade: 10,
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUnbNVCXlNTiza5dA5aMw1_9ZzgleJVEI1p9bmkQ0&s",
    },
  ],
  projects: [
    {
      id: 1,
      title: "CELEBRITY PROFILING",
      title_description: "Prof. Sriparna Saha",
      dates: ["jan 2020", "may 2020"],
      source_code: "https://github.com/Navya-amarneni/Celebrity-profiling",
      description: [
        "Predicted 4 traits of the celebrities like age, gender, fame, and occupation based on their Twitter account feeds using Python, Tensorflow, Keras.",
        "Built logistic regression, Naive Bayes classifier model for classification which single- handedly achieved an accuracy of 88.31 %.",
      ],
      imgURL:
        "https://cdn-blog.novoresume.com/articles/jobs-for-seniors/bg.png",
    },
    {
      id: 2,
      title: "RAINFALL PREDICTION",
      title_description: "Weather News, japan",
      dates: ["jan 2021"],
      source_code: "https://github.com/Navya-amarneni/weather-news-tasks",
      description: [
        "Implemented an end-to-end application for predicting rainfall in various cities of japan using a proprietary Machine Learning model.",
        "Developed User friendly UI interface that uses REST API to consume the Machine Learning model for predictions using Python, Scikit-learn, flask, HTML, CSS, Javascript.",
      ],
      imgURL:
        "https://imgs.search.brave.com/YKJ8bbT3qRZxuAGOm2Y0zRynB7Zl2uprID1_RQfgaZs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lZGl0/b3IuYW5hbHl0aWNz/dmlkaHlhLmNvbS91/cGxvYWRzLzM1OTEz/VW50aXRsZWQlMjBk/ZXNpZ24ucG5n",
    },
  ],
  experiences: [
    {
      id: 1,
      company: "D.E SHAW GROUP",
      designation: "Software Developer",
      dates: ["june 2022", "present"],
      description: [
        "Implemented multiple asset class-based portfolios using novel methodologies that required developing full-stack application for new investment techniques, enhancements, feature additions from stakeholders on a regular basis.",
        "Constructed several instrument cards and improved the portfolio performance by designing an scalable and robust backend, frontend architecture for varied dimension data assessment strategies.",
        "Technologies used: React,python,Node.js,JavaScript,CSS,Redux,Express,Mongo.",
        "Internal Frameworks used: DJS,spyc,datab,dpysrv,stuic,shawcache.",
      ],
    },
    {
      id: 2,
      company: "EXPEDIA GROUP",
      designation: "Software Developer Intern",
      dates: ["may 2021", "july 2021"],
      description: [
        "Implemented Lodging UI convergence model which creates a consistent platform to converge on common UI technology and design for 3 LOB’s.",
        "Reduced complexity of the design interface by integrating existing component libraries and design systems using React UI components.",
        "Techologies used: HTML, CSS, JavaScript, Jquery, Bootstrap, React, Catalyst.",
      ],
    },
    {
      id: 3,
      company: "WEINVEST INDIA",
      designation: "Software Developer Intern",
      dates: ["nov 2020", "jan 2021"],
      description: [
        "Introduced new feature that simplifies recording and tracing historical changes to data using time-travel gem.",
        "Exercised on storing time dependant data records using postgreSQL to represent both the history of the facts and the history of changes to records in the database.",
        "Technologies used: Ruby,Ruby on rails,postgreSQL.",
      ],
    },
    {
      id: 4,
      company: "INFOSOFT, CALIFORNIA",
      designation: "Machine Learning Intern",
      dates: ["sep 2020", "nov 2020"],
      description: [
        "Developed Resume parser which converts unstructured resume data into structured machine-readable format and analyses it to extract the key information.",
        "Technologies used: Python,Regex,Tensorflow.",
      ],
    },
  ],
  achievements: [
    {
      id: 1,
      description:
        "Secured 204th rank in ACM ICPC Regional round 2020, constantly active in contests at coding platforms like codeforces, leetcode.",
    },
    {
      id: 2,
      description:
        "Qualified for Girl Script Summer of code  GSSOC’21, and delivered impressive results in the projects I contributed to.",
    },
    {
      id: 3,
      description: "Global rank:1500 in International Maths Olympiad 2011.",
    },
    {
      id: 4,
      description:
        "AIR 2842 rank in JEE Mains 2018 and AIR 4632 rank in JEE Advanced 2018.",
    },
    {
      id: 5,
      description:
        "Possess strong problem-solving and programming skills, leading to 7 job offers from top-tier companies such as Google, Amazon, Microsoft, and other multinational corporations.",
    },
  ],
};

export default data;
