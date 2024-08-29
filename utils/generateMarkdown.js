// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = none) return "";{
    return "![License: MIT](https://img.shields.io/badge/License-MIT-blue)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license = none) return "";{
    return "https://opensource.org/licenses/MIT";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license = none) return "";{
    return "MIT";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title, data.contents, data.installation, data.usage, data.license, data.contributors, data.test, data.screenshot, data.questions, data.github}

`;
}

export default generateMarkdown;
