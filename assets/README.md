# Assets Directory Structure

This directory contains all media assets for the portfolio website, organized for easy maintenance and optimal performance.

## Directory Structure

### `/images/`
Main directory for all image assets:

- **`/avatars/`** - Profile pictures and personal photos
- **`/portfolio/`** - Project screenshots and portfolio images  
- **`/blog/`** - Blog post featured images and thumbnails
- **`/logos/`** - Company logos, brand assets, and client logos

### `/icons/`
Icon assets including:
- Technology stack icons
- Social media icons  
- UI/UX icons
- Custom branded icons

## Current Placeholder Assets

### Profile Images
- `profile-placeholder.svg` - Default avatar placeholder with professional styling

### Portfolio Projects
- `haribon-project.svg` - HARIBON AI project placeholder
- `select-voting-platform.svg` - sELECT voting system placeholder  
- `portfolio-website.svg` - Portfolio website project placeholder
- `data-science-project.svg` - Data science project placeholder

### Blog Posts
- `ml-environmental-science.svg` - Machine learning blog post placeholder
- `ux-voting-systems.svg` - UX design blog post placeholder
- `data-science-pm.svg` - Project management blog post placeholder

### Technology Icons
- `python.svg` - Python programming language icon
- `javascript.svg` - JavaScript programming language icon
- `html5.svg` - HTML5 technology icon
- `css3.svg` - CSS3 technology icon
- `bootstrap.svg` - Bootstrap framework icon
- `figma.svg` - Figma design tool icon

### Brand Assets
- `company-logo-placeholder.svg` - Generic company logo placeholder

## File Naming Conventions

### Images
- Use descriptive, lowercase names with hyphens
- Include project/context prefix when applicable
- Examples:
  - `profile-photo-2024.jpg`
  - `haribon-project-screenshot.png`
  - `blog-ml-environmental-science.jpg`

### Icons
- Use technology/service name as filename
- Keep consistent sizing (preferably SVG format)
- Examples:
  - `python.svg`
  - `figma.svg`
  - `github.svg`

## Recommended Image Specifications

### Avatar Images
- **Size**: 150x150px minimum
- **Format**: JPG or PNG
- **Optimization**: Web-optimized, <50KB preferred

### Portfolio Images  
- **Size**: 400x300px recommended
- **Format**: JPG for photos, PNG for screenshots
- **Optimization**: Web-optimized, <200KB preferred

### Blog Images
- **Size**: 400x250px recommended  
- **Format**: JPG preferred
- **Optimization**: Web-optimized, <150KB preferred

### Icons
- **Size**: 60x60px standard
- **Format**: SVG preferred (scalable)
- **Fallback**: PNG at 2x resolution (120x120px)

## Optimization Guidelines

1. **Compress images** before adding to reduce load times
2. **Use appropriate formats**: SVG for icons, JPG for photos, PNG for graphics with transparency
3. **Include alt text** in HTML for accessibility
4. **Consider lazy loading** for images below the fold
5. **Provide retina versions** for high-DPI displays when using PNG/JPG

## Replacing Placeholders

To replace placeholder assets with real content:

1. **Profile Image**: Replace `profile-placeholder.svg` with actual profile photo
2. **Portfolio Projects**: Replace project SVG placeholders with actual project screenshots
3. **Blog Images**: Replace blog SVG placeholders with relevant featured images
4. **Technology Icons**: Current icons are styled to match the portfolio theme
5. **Logos**: Replace placeholder logos with actual client/company logos

## Usage in HTML

```html
<!-- Avatar -->
<img src="./assets/images/avatars/profile-photo.jpg" alt="Kyla Elijah Ramiro" width="80">

<!-- Portfolio Project -->
<img src="./assets/images/portfolio/project-name.jpg" alt="Project Name" loading="lazy">

<!-- Blog Post -->
<img src="./assets/images/blog/post-title.jpg" alt="Blog Post Title" loading="lazy">

<!-- Technology Icon -->
<img src="./assets/icons/technology-name.svg" alt="Technology Name" width="50" height="50">
```

Remember to update image paths in the HTML when adding new assets to maintain the organized structure.