import "../globals.css";
import Navigation from "@/components/Navigation";
import { Noto_Serif } from 'next/font/google'

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html >
      <body className={notoSerif}>
        {/* <h1>Hello Layout</h1> */}
        <Navigation />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nostrum non dignissimos doloribus, ea deleniti quasi doloremque laborum perferendis est aperiam, nobis magni. Nesciunt, necessitatibus obcaecati iure architecto sunt qui aut velit, dolor, accusamus quo illo porro quibusdam quis repudiandae explicabo. Possimus, aut? Officia rem quos eveniet sed, dolorum numquam inventore temporibus, architecto beatae ipsum earum. Nam quae vitae assumenda fugit id, dignissimos quis atque aliquid aliquam consequuntur illo quidem aspernatur unde sint eum, nulla impedit illum officiis cupiditate! Dicta suscipit hic exercitationem quo eaque aliquam beatae nobis deserunt, consequatur necessitatibus praesentium iusto, cupiditate alias adipisci vero possimus fuga inventore!</p>
        {children}
      </body>
    </html>
  );
}
