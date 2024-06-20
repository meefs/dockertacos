#!/bin/bash

# Check if the script is being run from the correct directory
if [ ! -d "web-app" ] || [ ! -f "scripts/setup.sh" ]; then
  echo "Error: This script must be run from the project root directory."
  echo "Usage: bash scripts/setup.sh"
  exit 1
fi

# Check if the React app directory exists
if [ ! -d "web-app/src" ]; then
  echo "Error: The 'web-app' directory does not contain a React app."
  echo "Please make sure you have created a React app using 'npx create-react-app web-app' before running this script."
  exit 1
fi

# Copy the taco theme files
cp -r scripts/taco-theme/* web-app/src/

# Replace the App.js file
mv web-app/src/taco-theme/App.js web-app/src/App.js

# Update the App.css file
cat web-app/src/taco-theme/App.css >> web-app/src/App.css

echo "Taco theme and interactivity modifications applied successfully!"