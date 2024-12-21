# BreedNav

**BreedNav** is a dynamic dog breed search application that allows users to explore and filter dog breeds based on traits like size, temperament, and breed group. Built with **Next.js**, **Tailwind CSS**, and powered by **The Dog API**, BreedNav helps you find your perfect pup!

---

## Features

- 🐶 **Dynamic Filtering**: Search for breeds by name, size, temperament, and breed group.
- 🖼️ **Breed Images**: Visual representation of each breed fetched from The Dog API.
- ⚡ **Fast & Responsive**: Built with Next.js and styled with Tailwind CSS for modern performance and design.
- 📊 **Centralized State Management**: Filters and breed lists stay in sync.

---

## Tech Stack

- **Next.js**: React framework for SSR and seamless frontend development.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **Axios**: For fetching breed data from The Dog API.
- **The Dog API**: Provides comprehensive dog breed data and images.

---

## API Configuration

BreedNav uses The Dog API for breed data and images.

- Register for an API key at [The Dog API](https://thedogapi.com/).
- Add your API key to a `.env.local` file:
   ```
   NEXT_PUBLIC_DOG_API_KEY=your-api-key-here
   ```

---

## Contributing

Contributions are welcome! If you'd like to improve BreedNav:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request.

---

## License

This project is licensed under the Unlicense. For more information, please refer to <https://unlicense.org/>

---

## Acknowledgements

- [The Dog API](https://thedogapi.com) for providing breed data.
- [Tailwind CSS](https://tailwindcss.com) for making styling a breeze.
- [Vercel](https://vercel.com) for seamless deployment.

---

**Created with ❤️ by David Logan & Charla the AI**


---


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Installation

To run BreedNav locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nagoldivad/breednav.git
   cd breednav
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
