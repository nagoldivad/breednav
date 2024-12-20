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
Planned for deployment on Vercel once the project reaches MVP status.

## Outstanding Tasks
1. **Enhance UI/UX**:
   - Refine the layout and responsiveness of filter components and breed results.
   - Add feedback for empty results (e.g., "No breeds match your filters").
2. **Improve Data Management**:
   - Ensure SSR and hydration consistency for server-side rendered breed data.
   - Preload breed data using `getServerSideProps` or `getStaticProps` if needed.
3. **Final Functionalities**:
   - Allow users to filter by additional attributes (e.g., coat length, energy level).
   - Optimize and validate API calls for production readiness.


---


API

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