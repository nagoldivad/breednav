# BreedNav Project Summary

Last updated: Dec 14

## Goal
Create a dog breed search tool that allows users to dynamically filter and find breeds based on criteria such as size, temperament, breed group, etc.


## Current Status
- **Tech Stack**: Next.js, Tailwind CSS, Axios, and The Dog API.
- **Setup**: API integrated; breed data fetching and dynamic filtering are functional.
- **Filters**:
  - Filters for size and dynamically generated traits (e.g., temperament) are implemented.
  - Filters are synchronized with a centralized state in the `HomePage` component.
- **Dynamic Trait Generation**: Trait options are dynamically extracted from breed temperaments (`breeds.temperament`).


## Deployment
Has been deployed on Vercel and has domain name of breednav.com.

## Outstanding Tasks
Unknown. See Flaws and TODOs

---


## Flaws and TODOs

* Dark mode on Safari iPad might not work. Check on iOS and MacOS.
* Dark mode not working on Samsung mobile.
* Add link to GitHub repo in footer.

Enhance the Filter UI
Tooltips: Add tooltips to explain each filter option (e.g., what does "Medium" size mean?).
Previews: For temperament or size filters, show representative images/icons.
Clear All Filters Button: Let users reset filters with a single click.

Final Touch: Easter Egg!
Add a fun, hidden feature for users to discover. For example:
Typing "woof" in a search bar could show a surprise breed or a playful animation.

---


## API notes

1. Breed Information
Name: The breed name (e.g., Golden Retriever, Beagle).
Breed Group: The category of the breed (e.g., Sporting, Working, Toy).
Size: While not directly provided, size-related traits can be inferred from height and weight.
Temperament: A string describing general personality traits (e.g., "Friendly, Energetic, Gentle").
Life Span: Typical lifespan range (e.g., "10 - 12 years").
Height: Specified in inches (e.g., "20 - 24").
Weight: Specified in pounds (e.g., "50 - 70").
Bred For: Historical purpose of the breed (e.g., "Herding, Guarding").

2. Images
URLs: You can fetch URLs to images of the breed, which are great for visual representation.
Breed-Specific Images: Each breed has associated image data that can be fetched via /breeds or /images/search.