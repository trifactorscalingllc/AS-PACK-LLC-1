const fs = require('fs');
const html = fs.readFileSync('framer_design.html', 'utf8');

const colors = new Set();
const fonts = new Set();
const blocks = html.match(/style=\"[^\"]*\"|<style[^>]*>[\s\S]*?<\/style>|class=\"[^\"]*\"/g) || [];

// Extract colors (hex, rgb, rgba, hsl)
const colorRegex = /(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\))/g;
let match;
while ((match = colorRegex.exec(html)) !== null) {
    colors.add(match[1]);
}

// Extract font families
const fontRegex = /font-family:\s*([^;>\"\}]+)/g;
while ((match = fontRegex.exec(html)) !== null) {
    fonts.add(match[1].trim());
}

console.log("=== COLORS ===");
console.log(Array.from(colors).join('\n'));
console.log("\n=== FONTS ===");
console.log(Array.from(fonts).join('\n'));
