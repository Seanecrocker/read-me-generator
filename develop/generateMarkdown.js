function template(responses) {
  return `TITLE 
  ${responses.title} 
  Description: ${responses.description}
  Table of Contents: ${responses.tableOfContents} 
  How to Install: ${responses.installation}
  How to use: ${responses.usage} 
  License: ${responses.license} 
  Contributions: ${responses.contributing}
  Test: ${responses.test}
  Email: ${responses.email}
  Github Link: ${responses.github}`;
}

module.exports = template;