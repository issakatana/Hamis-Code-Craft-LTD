import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Hamis Code Craft LTD.",
  description: "Turning your ideas into reality, at the cost of your budget.",
};


const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>

        <div className='main'>
          <div className='gradient' />
        </div>

        <main className="overflow-x-hidden">
          <Nav />
          {children}
        </main>
        
      </Provider>
    </body>
  </html>
);

export default RootLayout;



