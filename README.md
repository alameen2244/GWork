# Gwork - Connecting Skilled Labor with Opportunities

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Gwork is a revolutionary platform designed to bridge the gap between skilled laborers and those in need of their services. Our mission is to empower workers without formal certifications by connecting them with individuals and households seeking their expertise. Gwork provides a user-friendly interface for both service providers and clients, facilitating easy job postings, worker discovery, and secure payments.

## Features

- User registration for both workers and employers
- Detailed worker profiles showcasing skills and experience
- Service categories including plumbing, electrical work, carpentry, and more
- Real-time, location-based worker search
- Secure booking and scheduling system
- In-app messaging for communication between clients and workers
- Flexible payment options including one-time, weekly, and monthly plans
- Mobile-responsive design for accessibility on various devices

## Technologies Used

- React.js
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui component library
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/alameen2244/Gwork.git
   ```

2. Navigate to the project directory:
   ```
   cd gwork
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add necessary environment variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url_here
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

5. Run the development server:
   ```
   npm run dev
   ```

6. Open http://localhost:3000 in your browser to see the application.

## Usage

1. **Registration**: Users can sign up as either workers or employers.
2. **Profile Creation**: Workers can create detailed profiles showcasing their skills and experience.
3. **Service Search**: Employers can search for workers based on location and required skills.
4. **Booking**: Employers can book workers for specific tasks and time slots.
5. **Communication**: In-app messaging allows for direct communication between workers and employers.
6. **Payment**: Secure payment processing for services rendered.

## Project Structure

```
gwork/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── services/
│   ├── register/
│   ├── login/
│   ├── booking/
│   └── payment/
├── components/
│   ├── ui/
│   ├── layout.tsx
│   ├── home-blog-post.tsx
│   ├── popular-services.tsx
│   ├── updated-booking-form.tsx
│   └── updated-registration-form.tsx
├── hooks/
│   └── useFormValidation.ts
├── public/
├── styles/
│   └── globals.css
├── .env.local
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

We welcome contributions to the Gwork project! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: https://github.com/alameen2244/Gwork

For any inquiries, please reach out to us at support@gwork.com
