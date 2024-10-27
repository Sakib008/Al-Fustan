import "../Style/footer.css";

export function Footer() {
  return (
    <div className="footer h-64">
      <div className="max-w-screen-lg mx-auto flex flex-col">
        <div className="company text-center">
          <h2 className="text-6xl font-semibold">AL FUSHAN</h2>
          <p className='footer'>Brand of Choice</p>
        </div>
        <div className="flex justify-between ">
          <div className="left">
            <div>
              <h2 className="company text-2xl pb-4">At Our Shop</h2>
              <ul>
                <li>
                  <a href="/">New Arival</a>
                </li>
                <li>
                  <a href="/">Best Seller</a>
                </li>
                <li>
                  <a href="/">Top Rated</a>
                </li>
                <li>
                  <a href="/">Sale</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle">
            <div>
              <h2 className="company text-2xl pb-4">Company </h2>
              <ul>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Payment Options</a>
                </li>
                <li>
                  <a href="/">Affiliate Program</a>
                </li>
                <li>
                  <a href="/">Our Services</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right">
          <div>
              <h2 className="company text-2xl pb-4">Follow Us</h2>
              <ul>
                <li>
                  <a href="/">Github</a>
                </li>
                <li>
                  <a href="/">My Website</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright text-center">	&#169; 2024 Al Fushan | All Right Reserved</div>
      </div>
    </div>
  );
}
