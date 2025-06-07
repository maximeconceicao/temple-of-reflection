export function TableOfContents() {
  // Tu pourras passer dynamiquement la liste des titres si tu veux
  return (
    <aside className="text-sm space-y-2">
      <p className="font-bold mb-2">Sommaire</p>
      <ul className="space-y-1">
        <li>
          <a href="#introduction" className="text-blue-600 hover:underline">
            Introduction
          </a>
        </li>
        <li>
          <a href="#section-1" className="text-blue-600 hover:underline">
            Section 1
          </a>
        </li>
        <li>
          <a href="#conclusion" className="text-blue-600 hover:underline">
            Conclusion
          </a>
        </li>
      </ul>
    </aside>
  );
}
