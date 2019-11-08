import * as React from "react"
import { Link } from "gatsby"
// ______________________________________________________
//
const Component: React.FC = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li><Link to="/">Back to top</Link></li>
    </ul>
  </div>
)
// ______________________________________________________
//
export default Component
