# Project Images Guide

Use this folder for all project images used by the portfolio.

## Folder Structure

- `public/images/projects/`
- `public/images/projects/buddytech/` (example project folder)

You can create one subfolder per project:

- `public/images/projects/buddytech/`
- `public/images/projects/plataforma-imobiliaria/`
- `public/images/projects/rebranding-studio-move/`

## Naming Pattern (PNG)

Use consistent names for each project:

- `Buddytech_capa.png`
- `Buddytech_showroom_01.png`
- `Buddytech_showroom_02.png`
- `Buddytech_showroom_03.png`

For other projects, keep the same pattern:

- `Projeto_capa.png`
- `Projeto_showroom_01.png`
- `Projeto_showroom_02.png`

## Recommended Sizes

1. Cover image (`*_capa.png`)
- Recommended: `1080 x 1080`
- Aspect ratio: `1:1`

2. Showroom images (`*_showroom_XX.png`)
- Recommended: `1600 x 1000`
- Aspect ratio: `16:10`

3. Optional gallery cards
- Recommended: `1200 x 900`
- Aspect ratio: `4:3`

## Optimization

- Prefer PNG only when transparency is needed.
- For normal screenshots, WebP or JPG gives better performance.
- Target file size: `<= 500 KB` per image when possible.

## How to Reference in JSON

Example path in `locales/pt.json` and `locales/en.json`:

- `/images/projects/buddytech/Buddytech_showroom_01.png`
- `/images/projects/buddytech/Buddytech_capa.png`

Recommended structure:

```json
{
	"image": "/images/projects/buddytech/Buddytech_showroom_01.png",
	"detailImage": "/images/projects/buddytech/Buddytech_capa.png",
	"gallery": [
		"/images/projects/buddytech/Buddytech_showroom_01.png",
		"/images/projects/buddytech/Buddytech_showroom_02.png"
	]
}
```

- `image`: project card image
- `detailImage`: square image used only on the project details page
- `gallery`: showroom sequence used inside the case study

## Quick Example for BuddyTech

Put files in:

- `public/images/projects/buddytech/Buddytech_capa.png`
- `public/images/projects/buddytech/Buddytech_showroom_01.png`
- `public/images/projects/buddytech/Buddytech_showroom_02.png`
- `public/images/projects/buddytech/Buddytech_showroom_03.png`
