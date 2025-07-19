# AI Code Review Tool

This project is an AI-powered code review tool that automatically checks code changes in the current branch against the master branch. It evaluates the changes and provides feedback on whether they pass predefined criteria.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd ai-code-review-tool
npm install
```

## Usage

To run the application, use the following command:

```bash
node src/index.js "ai review code"
```

This command will trigger the code review process, comparing the current branch's changes against the master branch.

### Example

1. Make some changes in your code.
2. Run the command as shown above.
3. The tool will output whether the changes "pass" or "not pass" based on the review criteria.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.