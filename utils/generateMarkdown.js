// return license badge based on which license is passed in
const renderLicenseBadge = license => {
  if (license == 'Apache 2.0') {
    return `https://img.shields.io/badge/License-Apache_2.0-yellowgreen`;
  } else if (license == 'GNU GPL v3') {
    return `https://img.shields.io/badge/License-GPLv3-blue`;
  } else if (license == 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow`;
  } else {
    return '';
  }
};

// return the respective license link
const renderLicenseLink = license => {
  if (license == 'Apache 2.0') {
    return `https://opensource.org/licenses/Apache-2.0`;
  } else if (license == 'GNU GPL v3') {
    return `https://www.gnu.org/licenses/gpl-3.0`;
  } else if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  } else {
    return '';
  }
};

// returns the license section of README
const renderLicenseSection = license => {
  if (license == 'Apache 2.0') {
    return `Please visit this [link](https://choosealicense.com/licenses/apache-2.0/) for more information regarding this license.`;
  } else if (license == 'GNU GPL v3') {
    return `Please visit this [link](https://choosealicense.com/licenses/gpl-3.0/) for more information regarding this license.`;
  } else if (license == 'MIT') {
    return `Please visit this [link](https://choosealicense.com/licenses/mit/) for more information regarding this license.`;
  } else {
    return '';
  }
};

// return screenshot & display under usage section of README
const generateScreenshot = screenshots => {
  let scrnshotList = '';

  if (screenshots) {
    screenshots.forEach(item => {
      scrnshotList += `![${item.img}](/../main/assets/images/${item.img})`;
    });
    return `${scrnshotList}`;
  } else {
    return '';
  }
};

// generate markdown file for README
const generateMarkdown = data => {
  return `
# ${data.title}
[![License: ${data.license}](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

## Description
${data.description}

## Table of Contents
${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

${generateScreenshot(data.screenshots)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This application is protected under the ${data.license} license. ${renderLicenseSection(data.license)}

## Questions
For any questions about this repository, please contact me at [${data.email}](mailto:${data.email}).

To view more of my works, please visit my GitHub: [${data.github}](https://github.com/${data.github}).
  `;
};

module.exports = generateMarkdown;
