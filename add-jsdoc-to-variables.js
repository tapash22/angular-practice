import fs from 'fs';
import path from 'path';
import glob from 'glob';

// Function to add JSDoc comment above a function or variable
const addJSDoc = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Regex patterns to find function declarations, variable declarations, etc.
  const functionPattern = /(?:function\s+|\w+\s*=\s*function\s*\|\s*=>)\s*\w+\s*\(.*\)\s*\{[^}]*\}/g;
  const variablePattern = /\blet\s+\w+\s*=\s*.*|const\s+\w+\s*=\s*.*|var\s+\w+\s*=\s*/g;
  
  let newContent = content;

  // Add JSDoc to functions
  newContent = newContent.replace(functionPattern, (match) => {
    return `/** declear function with details */\n${match}`;
  });

  // Add JSDoc to variables
  newContent = newContent.replace(variablePattern, (match) => {
    return `/** declear variable with details */\n${match}`;
  });

  // Save the updated file if content is modified
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Added JSDoc to: ${filePath}`);
  }
};

// Find all TypeScript files
glob("src/**/*.ts", (err, files) => {
  if (err) {
    console.error('Error finding files:', err);
    return;
  }

  files.forEach((file) => {
    addJSDoc(file);
  });
});
