

function Footer() {
  return (
    <footer className="bg-[#D9CFC7] text-foreground py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-foreground text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            The Legal Chambers is a full-service law firm delivering integrated, strategic, and high-value legal solutions across practice areas.
          </p>
        </div>
        <div>
          <h2 className="text-foreground text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-primary transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/clients"
                className="hover:text-primary transition-colors duration-300"
              >
                Clients/Retainers
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-primary transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-foreground text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-foreground text-lg font-semibold mb-4">Contact Us</h2>
          <p>Head Office: 483, Lawyers Chambers, Block-II, Delhi High Court, Delhi - 11003</p>
          <p>Email: office@thelegalchambers.org</p>
          <p>Phone: +91 96627 78086</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 The Legal Chambers. All rights reserved.</p>
    </footer>
  )
}

export default Footer