import glob

files = glob.glob('*.html')

search_demo = '<div id="demo-anchor" class="relative w-full max-w-5xl mx-auto">'
replace_demo = '<div id="demo-anchor" class="relative w-full max-w-5xl mx-auto overflow-x-auto pb-4" style="max-width:100vw; -webkit-overflow-scrolling:touch;">\n      <div style="min-width:800px; padding:0 16px;">'

search_caption = '<!-- Caption -->'
replace_caption = '</div>\n      <!-- Caption -->'

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    modified = False
    
    if search_demo in content:
        if '<div style="min-width:800px;' not in content:
            content = content.replace(search_demo, replace_demo)
            content = content.replace(search_caption, replace_caption)
            modified = True
            
    if 'text-transform:uppercase;white-space:nowrap;' in content:
        content = content.replace('text-transform:uppercase;white-space:nowrap;', 'text-transform:uppercase;')
        modified = True
        
    if modified:
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f"Fixed {f}")
