export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} William Schmitt — Tous droits réservés.</p>
    </footer>
  );
}