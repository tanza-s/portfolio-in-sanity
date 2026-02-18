# Portfolio & Blog Site

A modern portfolio and blog application built with Next.js and Sanity CMS.

## Tech Stack

- **Frontend**: Next.js
- **CMS**: Sanity Studio
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation & Running Locally

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd portfolio-in-sanity
    ```

2. **Start Sanity Studio**
    ```bash
    cd sanity
    npm install
    npm run dev
    ```
    Sanity Studio will be available at `http://localhost:3333`

3. **Start Next.js Frontend** (in a new terminal)
    ```bash
    cd nextjs
    npm install
    npm run dev
    ```
    The frontend will be available at `http://localhost:3000`

## Project Structure

- `/studio-portfolio-in-sanity` - Sanity Studio configuration and schemas
- `/nextjs-portfolio-in-sanity` - Next.js frontend application

## Development

Make sure both servers are running for the full application experience. The Next.js frontend fetches content from Sanity Studio.
