
function renderLicenseBadge(license) {if (license !== 'None') {
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}
return '';}

function renderLicenseLink(license) { if (license !== 'None') {
  return `[License](https://opensource.org/licenses/${license})`;
}
return '';}

function renderLicenseSection(license) {if (license !== 'None') {
  return `This project is licensed under the ${license} license. Click the badge above for more details.`;
}
return '';}

function generateMarkdown(data) {
 
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseSection}

${licenseLink}

## Questions
If you have any questions, please feel free to reach out to me on [GitHub](https://github.com/${data.github}) or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;




