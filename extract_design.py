import re

with open('framer_design.html', 'r', encoding='utf-8') as f:
    html = f.read()

# hex colors
colors = set(re.findall(r'#[0-9a-fA-F]{3,8}', html))
print("=== COLORS ===")
for c in colors:
    print(c)

# fonts
fonts = set(re.findall(r'font-family:\s*([^;>\"\}]+)', html))
print("\n=== FONTS ===")
for font in fonts:
    print(font)
