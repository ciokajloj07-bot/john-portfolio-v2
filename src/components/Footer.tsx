export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} John Ciokajlo. Built with Next.js,
        React, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
}
