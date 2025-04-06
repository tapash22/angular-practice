const fs = require('fs');
const path = require('path');

const addJSDocToVariable = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const updatedContent = fileContent.replace(
    /(\blet\b|\bconst\b|\bvar\b)\s+([a-zA-Z0-9_]+)/g,
    (match, declaration, variable) => {
      return `/** please declear this with details */\n${declaration} ${variable}`;
    }
  );
  fs.writeFileSync(filePath, updatedContent, 'utf-8');
};

// Read all TypeScript files and apply the script
const directoryPath = './src/app';  // You can specify your folder here
fs.readdirSync(directoryPath)
  .filter(file => file.endsWith('.ts'))
  .forEach(file => {
    const filePath = path.join(directoryPath, file);
    addJSDocToVariable(filePath);
  });
