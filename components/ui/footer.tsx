export default function Footer() {
  // Define arrays for menu items
  const menu1Items = ["Item 1", "Item 2", "Item 3"];
  const menu2Items = ["Item 4", "Item 5", "Item 6"];
  const menu3Items = ["Item 7", "Item 8", "Item 9"];

  return (
    <footer className="bg-gray-500 text-white p-4 w-full h-[20rem] mt-16">
      <div className="container mx-auto flex justify-between">
        {/* Menu 1 */}
        <div className="menu">
          <h3 className="text-lg font-semibold mb-2">Menu 1</h3>
          <ul>
            {/* Loop through menu1Items */}
            {menu1Items.map((item, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h3 className="text-lg font-semibold mb-2">Menu 1</h3>
          <ul>
            {/* Loop through menu1Items */}
            {menu1Items.map((item, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h3 className="text-lg font-semibold mb-2">Menu 1</h3>
          <ul>
            {/* Loop through menu1Items */}
            {menu1Items.map((item, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h3 className="text-lg font-semibold mb-2">Menu 1</h3>
          <ul>
            {/* Loop through menu1Items */}
            {menu1Items.map((item, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu">
          <h3 className="text-lg font-semibold mb-2">Menu 1</h3>
          <ul>
            {/* Loop through menu1Items */}
            {menu1Items.map((item, index) => (
              <li key={index} className="mb-1">
                <a href="#" className="hover:text-gray-400">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
