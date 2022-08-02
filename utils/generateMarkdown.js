// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description
${data.description}

## Installation

## Usage

## Contributing

## Tests

## License

## Questions
For any questions about this repository, please contact me at [${data.email}](mailto:${data.email}).

To view more of my works, please visit my GitHub: [${data.github}](https://github.com/${data.github}).
  `;
};

module.exports = generateMarkdown;
